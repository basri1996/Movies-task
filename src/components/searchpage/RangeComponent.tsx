import { Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  CustomSlider,
  FilterCategorieTitle,
  KeywordInputWrapper,
  KeywordsDiv,
  KeywordsH1,
  LanguageInputWrapper,
  sx,
} from './ExpandedSearchComponentStyles';
import { useExpandedSearchContext } from '../../context/ExpandedSearchContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/StoreTypes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { fetchKeywordsAsync } from '../../redux/features/search/SearchThunk';

export type Values = {
  [key: string]: number[];
};

const RangeComponent = () => {
  const { setFilters } = useExpandedSearchContext();
  const dispatch =useDispatch<AppDispatch>()
  const [userVotes, setUserVotes] = useState<number>(300);
  const[keywordQuery , setkeywordQuery]=useState('')
  const { keywords } = useSelector((state: RootState) => state.search);
  const [values, setValues] = useState<Values>({
    userScore: [0, 10],
    runtime: [0, 400],
  });

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      rangeValues: { userScore: values.userScore, runtime: values.runtime },
      userVotes: userVotes,
    }));
  }, [setFilters, userVotes, values]);

  const handleChange = (event: number[], field: string) => {
    setValues(prev => ({ ...prev, [field]: event }));
  };

  const handleKeywordsApiCall=(query:string)=>{
    setkeywordQuery(query)
    dispatch(fetchKeywordsAsync(query))
  }

  return (
    <>
      <LanguageInputWrapper>
        <FilterCategorieTitle>User Score</FilterCategorieTitle>
        <Box sx={sx}>
          <CustomSlider
            value={values.userScore}
            onChange={(e: any) => handleChange(e.target.value, 'userScore')}
            valueLabelDisplay="auto"
            max={10}
          />
        </Box>
        <FilterCategorieTitle>Minimum User Votes</FilterCategorieTitle>
        <Box sx={sx}>
          <CustomSlider
            onChange={(e: any) => setUserVotes(e.target.value)}
            value={userVotes}
            max={500}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
        <FilterCategorieTitle>Runtime</FilterCategorieTitle>
        <Box sx={sx}>
          <CustomSlider
            value={values.runtime}
            onChange={(e: any) => handleChange(e.target.value, 'runtime')}
            valueLabelDisplay="auto"
            max={400}
          />
        </Box>
      </LanguageInputWrapper>
      <KeywordInputWrapper>
        <FilterCategorieTitle>Keywords</FilterCategorieTitle>
        <TextField value={keywordQuery} onChange={(e)=>handleKeywordsApiCall(e.target.value)} id="outlined-basic" label="Keywords" variant="outlined" />
        {keywords.length > 0 && (
          <KeywordsDiv>
            {keywords.map(el => (
              <KeywordsH1 key={el.id}>{el.name}</KeywordsH1>
            ))}
          </KeywordsDiv>
        )}
      </KeywordInputWrapper>
    </>
  );
};

export default RangeComponent;
