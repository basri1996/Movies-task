import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store/StoreTypes';
import Slide from '../components/slider/Slide';
import { useEffect } from 'react';
import {
  fetchContentPageItemsByCategoryAsync,
  fetchSearchLanguageAsync,
} from '../redux/features/search/SearchThunk';
import { AppDispatch } from '../redux/store/store';
import Loader from '../components/ui/Loader';
import { SearchDataType } from '../redux/features/search/SearchTypes';
import {
  PanginationWrapper,
  SearchPageSectionWrapper,
  SearchPageitemWrapper,
} from '../components/searchpage/SearchPageStyles';
import ExpandedSearchComponent from '../components/searchpage/ExpandedSearchComponent';
import { fetchGenresAsync } from '../redux/features/genre/GenreThunk';
import { Pagination } from '@mui/material';
// import { useExpandedSearchContext } from '../context/ExpandedSearchContext';

const ContentPage = () => {
  const {
    data: Searched,
    status,
    dataAmount,
  } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  // const { params} = useExpandedSearchContext();
  const { mediaType, category } = useParams();

  console.log(Searched);
  useEffect(() => {
    if (mediaType !== 'person') {
      dispatch(fetchGenresAsync(mediaType));
      dispatch(fetchSearchLanguageAsync());
    }
    if (mediaType && category) {
      dispatch(fetchContentPageItemsByCategoryAsync({ mediaType, category,page:"1"}));
    }
  }, [dispatch, mediaType,category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Searched]);

  function HandleChange(value: number) {
    if (mediaType && category) {
      dispatch(fetchContentPageItemsByCategoryAsync({ mediaType, category,page:String(value)}));
    }
  }

  if (status === 'loading') return <Loader />;

  return (
    <SearchPageSectionWrapper>
      {mediaType !== 'person' && (
        <ExpandedSearchComponent mediaType={mediaType} />
      )}
      <PanginationWrapper>
        <SearchPageitemWrapper>
          {Searched.map((el: SearchDataType) => (
            <Slide
              key={el.id}
              id={el.id}
              film={el}
              mediaType={mediaType || 'tv'}
            />
          ))}
        </SearchPageitemWrapper>
        <Pagination
          count={Math.round(Number(dataAmount) / 20)}
          color="primary"
          variant="outlined"
          onChange={(_, value) => HandleChange(value)}
        />
      </PanginationWrapper>
    </SearchPageSectionWrapper>
  );
};

export default ContentPage;
