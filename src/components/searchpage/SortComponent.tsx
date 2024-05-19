import { useExpandedSearchContext } from '../../context/ExpandedSearchContext';
import { SortInputWrapper } from './ExpandedSearchComponentStyles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';



const SortComponent = () => {
  const {filters, setFilters }=useExpandedSearchContext()
  const handleChange = (event: string, type: string) => {
    setFilters((prev) => ({ ...prev, [type]: event }));
  };
  return (
    <SortInputWrapper>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="SortBy"
          value={filters.sort}
          onChange={e => handleChange(e.target.value, 'sort')}
        >
          <MenuItem value={'popularity.desc'}>
            Popularity Descending
          </MenuItem>
          <MenuItem value={'popularity.asc'}>
            Popularity Ascending
          </MenuItem>
          <MenuItem value={'vote_average.desc'}>Rating Descending</MenuItem>
          <MenuItem value={'vote_average.asc'}>Rating Ascending</MenuItem>
          <MenuItem value={'primary_release_date.desc'}>
            Release Date Descending
          </MenuItem>
          <MenuItem value={'primary_release_date.asc'}>
            Release Date Ascending
          </MenuItem>
          <MenuItem value={'title.asc'}>Title (A-Z)</MenuItem>
          <MenuItem value={'title.desc'}>Title (Z-A)</MenuItem>
        </Select>
      </FormControl>
    </SortInputWrapper>
  );
};

export default SortComponent;
