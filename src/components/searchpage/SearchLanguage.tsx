import { useSelector } from 'react-redux';
import {
  FilterCategorieTitle,
  LanguageInputWrapper,
} from './ExpandedSearchComponentStyles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { RootState } from '../../redux/store/StoreTypes';
import { useExpandedSearchContext } from '../../context/ExpandedSearchContext';
const SearchLanguage = () => {
  const { filters, setFilters } = useExpandedSearchContext();
  const { searchLanguage } = useSelector((state: RootState) => state.search);
  const handleChange = (event: string, type: string) => {
    setFilters((prev: any) => ({ ...prev, [type]: event }));
  };
  return (
    <LanguageInputWrapper>
      <FilterCategorieTitle>Language</FilterCategorieTitle>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Languages"
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 250,
              },
            },
          }}
          value={filters.language}
          onChange={e => handleChange(e.target.value, 'language')}
        >
          <MenuItem value={'None Selected'}>None Selected</MenuItem>
          {searchLanguage.map(el => (
            <MenuItem key={el.iso_639_1} value={el.iso_639_1}>
              {el.english_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </LanguageInputWrapper>
  );
};

export default SearchLanguage;
