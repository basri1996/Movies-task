import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store/StoreTypes';
import Slide from '../components/slider/Slide';
import { useEffect, useState } from 'react';
import { fetchSearchContentByTypeAndTitleAsync } from '../redux/features/search/SearchThunk';
import { AppDispatch } from '../redux/store/store';
import Loader from '../components/ui/Loader';
import { SearchDataType } from '../redux/features/search/SearchTypes';
import { triggerSearchedModal } from '../redux/features/search/SearchSlice';
import {
  SearchPageSectionWrapper,
  SearchPageitemWrapper,
  SearchResultContentAmount,
  SearchResultContentDiv,
  SearchResultContentTitle,
  SearchResultDiv,
  SearchResultTitle,
  SearchResultTitleDiv,
} from '../components/searchpage/SearchPageStyles';

const SearchResult = () => {
  const { movie, tv, status } = useSelector((state: RootState) => state.search);
  const [mediaType, setMediaType] = useState<string>('movie');
  const dispatch = useDispatch<AppDispatch>();
  const { title } = useParams();

  useEffect(() => {
    if (title) {
      dispatch(
        fetchSearchContentByTypeAndTitleAsync({ mediaType: 'movie', title }),
      );
      dispatch(
        fetchSearchContentByTypeAndTitleAsync({ mediaType: 'tv', title }),
      );
      dispatch(triggerSearchedModal(false));
    }
  }, [dispatch, mediaType,title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie, tv]);

  if (status === 'loading') return <Loader />;

  return (
    <SearchPageSectionWrapper>
      <SearchResultDiv>
        <SearchResultTitleDiv>
          <SearchResultTitle>Search Result</SearchResultTitle>
        </SearchResultTitleDiv>
        <SearchResultContentDiv active={mediaType ==="movie"} onClick={() => setMediaType('movie')}>
          <SearchResultContentTitle>Movies</SearchResultContentTitle>
          <SearchResultContentAmount>{movie.amount}</SearchResultContentAmount>
        </SearchResultContentDiv>
        <SearchResultContentDiv active={mediaType ==="tv"} onClick={() => setMediaType('tv')}>
          <SearchResultContentTitle>Tv Shows</SearchResultContentTitle>
          <SearchResultContentAmount>{tv.amount}</SearchResultContentAmount>
        </SearchResultContentDiv>
      </SearchResultDiv>
      <SearchPageitemWrapper>
        {(mediaType === 'movie' ? movie.data : tv.data).map(
          (el: SearchDataType) => (
            <Slide
              key={el.id}
              id={el.id}
              film={el}
              mediaType={mediaType}
            />
          ),
        )}
      </SearchPageitemWrapper>
    </SearchPageSectionWrapper>
  );
};

export default SearchResult;

