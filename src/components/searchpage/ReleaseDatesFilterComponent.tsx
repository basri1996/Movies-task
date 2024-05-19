import { useEffect, useState } from 'react';
import {
  CalendarInput,
  CalendarInputLabel,
  CalendarInputLabelWrapper,
  CalendarInputWrapper,
  FilterCategorieDiv,
  FilterCategorieTitle,
} from './ExpandedSearchComponentStyles';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useExpandedSearchContext } from '../../context/ExpandedSearchContext';

type CheckboxState = {
  [key: string]: boolean;
};
type FromToType = {
  [key: string]: string;
};

const ReleaseDatesFilterComponent = () => {
  const { setFilters } = useExpandedSearchContext();
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    SearchAllReleases: true,
    '2': false,
    "3": false,
    "1": false,
    "4": false,
    "5": false,
    "6": false,
  });
  const [fromto, setFromTo] = useState<FromToType>({
    from: '',
    to: '',
  });

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      release: {
        ...prev.release,
        type: checkboxes.SearchAllReleases
          ? []
          : Object.keys(checkboxes).filter(
              key => checkboxes[key] && key !== 'SearchAllCountries',
            ),
        date: {
          from: fromto.from,
          to: fromto.to,
        },
      },
    }));
  }, [checkboxes, setFilters, fromto]);

  const handeFromTo = (field: string, value: string) => {
    setFromTo(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (label: string) => {
    setCheckboxes(prev => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleSearchAllReleasesChange = (event: boolean) => {
    setCheckboxes(prev => ({
      ...Object.fromEntries(Object.entries(prev).map(([key]) => [key, !event])),
      SearchAllReleases: !prev.SearchAllReleases,
    }));
  };

  return (
    <FilterCategorieDiv>
      <FilterCategorieTitle>Release Dates</FilterCategorieTitle>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxes.SearchAllReleases}
              onChange={e => handleSearchAllReleasesChange(e.target.checked)}
            />
          }
          label="Search all releases?"
        />
        {!checkboxes.SearchAllReleases && (
          <>
            {/* <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.SearchAllCountries}
                  onChange={() => handleCheckboxChange('SearchAllCountries')}
                />
              }
              label="Search all countries?"
            /> */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes["2"]}
                  onChange={() => handleCheckboxChange('2')}
                />
              }
              label="Theatrical (limited)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes["3"]}
                  onChange={() => handleCheckboxChange('3')}
                />
              }
              label="Theatrical"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes["1"]}
                  onChange={() => handleCheckboxChange('1')}
                />
              }
              label="Premiere"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes["4"]}
                  onChange={() => handleCheckboxChange('4')}
                />
              }
              label="Digital"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes["5"]}
                  onChange={() => handleCheckboxChange('5')}
                />
              }
              label="Physical"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes["6"]}
                  onChange={() => handleCheckboxChange("6")}
                />
              }
              label="TV"
            />
          </>
        )}
      </FormGroup>
      <CalendarInputWrapper>
        <CalendarInputLabelWrapper>
          <CalendarInputLabel>from</CalendarInputLabel>
          <CalendarInput
            onChange={e => handeFromTo('from', e.target.value)}
            type="date"
          />
        </CalendarInputLabelWrapper>
        <CalendarInputLabelWrapper>
          <CalendarInputLabel>to</CalendarInputLabel>
          <CalendarInput
            onChange={e => handeFromTo('to', e.target.value)}
            type="date"
          />
        </CalendarInputLabelWrapper>
      </CalendarInputWrapper>
    </FilterCategorieDiv>
  );
};

export default ReleaseDatesFilterComponent;
