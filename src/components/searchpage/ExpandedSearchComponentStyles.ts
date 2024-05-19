import { Slider } from '@mui/material';
import styled from 'styled-components';

export const ExpandedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  margin-top: 64px;
`;

export const SortDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
  background-color: white;
  @media (min-width: 768px) {
    width: 342px;
  }
`;

export const SortDivHeaderWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  border-radius: 8px;
  width: 100%;
  min-width: 333px;
  height: 50px;
  padding: 14px 16px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 338px;
  }
`;

export const ExpandedSectionTitles = styled.h1`
  font-size: 17px;
  font-weight: 600;
`;

export const TriggerOpenIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SortInputWrapper = styled.div`
  padding: 14px 16px 16px;
`;
export const LanguageInputWrapper = styled.div`
  padding: 14px 16px 16px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;
export const KeywordInputWrapper = styled.div`
  padding: 14px 16px 16px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

export const KeywordsDiv = styled.div`
  width: 306px;
  border: 1px solid lightgray;
  position: absolute;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  top: 100px;
  padding: 0 14px;
  max-height: 100px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.Blue};
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.VeryLightBlue};
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.colors.Blue};
  }
`;
export const KeywordsH1 = styled.h1`
  font-size: 14px;
  cursor: pointer;
`;

export const FilterDivWrapper = styled(SortDivWrapper)``;
export const FilterDivHeaderWrapper = styled(SortDivHeaderWrapper)``;

export const FilterCategorieTitle = styled.h1`
  font-size: 16px;
  font-weight: 300;
`;

export const FilterCategorieDiv = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 14px 16px 16px;
`;

export const CalendarInput = styled.input`
  border: 2px solid lightgray;
  padding: 6px 12px;
  color: gray;
  width: 70%;
`;

export const CalendarInputLabel = styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #a4a4a4;
  width: 30px;
`;
export const CalendarInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
`;
export const CalendarInputLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GenreDivWrapper = styled.div`
  padding: 14px 16px 16px;
`;

export const GenreItems = styled.div<{ active: boolean }>`
  padding: 4px 12px;
  border: 1px solid #9e9e9e;
  font-size: 15px;
  font-weight: 400;
  border-radius: 14px;
  cursor: pointer;
  background-color: ${props =>
    props.active ? `${props.theme.colors.LightBlue}` : 'transparent'};
  color: ${props => (props.active ? 'white' : 'black')};
`;

export const GenreItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 10px;
`;

export const sx = {
  width: 300,
};

export const CustomSlider = styled(Slider)`
  && .MuiSlider-thumb {
    width: 15.33px;
    height: 15.33px;
  }
`;
