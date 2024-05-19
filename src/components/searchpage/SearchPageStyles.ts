import styled from 'styled-components';

export const SearchPageitemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 16px;
  padding-top: 80px;
`;

export const SearchPageSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchResultDiv = styled.div`
  margin-top: 80px;
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  width: 260px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: white;
  height: 185px;
`;

export const SearchResultTitleDiv = styled.div`
  width: 260px;
  padding: 20px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: ${props => props.theme.colors.Blue};
`;

export const SearchResultTitle = styled.h1`
  font-size: 19px;
  font-weight: 600;
  color: white;
`;

export const SearchResultContentDiv = styled.div<{ active: any }>`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.active ? ' rgba(0,0,0,.08)' : 'white')};
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const SearchResultContentTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

export const SearchResultContentAmount = styled.div`
  padding: 5px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 400;
`;


export const PanginationWrapper =styled.div`
display:flex;
flex-direction:column;
gap:20px;
justify-content:center;
align-items:center;
`