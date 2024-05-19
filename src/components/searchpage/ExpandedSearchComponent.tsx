import { useState } from 'react';
import {
  ExpandedSectionTitles,
  ExpandedWrapper,
  FilterDivHeaderWrapper,
  FilterDivWrapper,
  KeywordInputWrapper,
  SortDivHeaderWrapper,
  SortDivWrapper,
  TriggerOpenIcon,
} from './ExpandedSearchComponentStyles';
import open from '../../assets/images/open.png';
import close from '../../assets/images/close.png';
import ReleaseDatesFilterComponent from './ReleaseDatesFilterComponent';
import SortComponent from './SortComponent';
import SearchGenreComponent from './SearchGenreComponent';
import SearchLanguage from './SearchLanguage';
import RangeComponent from './RangeComponent';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { fetchContentByExpandSearchAsync } from '../../redux/features/search/SearchThunk';
import { useExpandedSearchContext } from '../../context/ExpandedSearchContext';

type IsOpenType = {
  [key: string]: boolean;
};
const ExpandedSearchComponent = ({
  mediaType,
}: {
  mediaType: string | undefined;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { params } = useExpandedSearchContext();
  const [isOpen, setIsOpen] = useState<IsOpenType>({
    sort: true,
    filters: true,
  });

  const ExpandSearchApiFunction = () => {
   

    dispatch(fetchContentByExpandSearchAsync({ params, mediaType }));
  };

  const handleOpenChange = (type: string) => {
    setIsOpen((prev: IsOpenType) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <ExpandedWrapper>
      <SortDivWrapper>
        <SortDivHeaderWrapper>
          <ExpandedSectionTitles>Sort</ExpandedSectionTitles>
          <TriggerOpenIcon
            onClick={() => handleOpenChange('sort')}
            src={isOpen.sort ? close : open}
          />
        </SortDivHeaderWrapper>
        {isOpen.sort && <SortComponent />}
      </SortDivWrapper>
      <FilterDivWrapper>
        <FilterDivHeaderWrapper>
          <ExpandedSectionTitles>Filters</ExpandedSectionTitles>
          <TriggerOpenIcon
            onClick={() => handleOpenChange('filters')}
            src={isOpen.filters ? close : open}
          />
        </FilterDivHeaderWrapper>
        {isOpen.filters && (
          <>
            <ReleaseDatesFilterComponent />

            <SearchGenreComponent />
            <SearchLanguage />
            <RangeComponent />
          </>
        )}
        <KeywordInputWrapper>
        <Button variant="contained" onClick={ExpandSearchApiFunction}>search</Button>
        </KeywordInputWrapper>
      </FilterDivWrapper>
    </ExpandedWrapper>
  );
};

export default ExpandedSearchComponent;
