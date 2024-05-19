import styled from 'styled-components';

export const MenuDiv = styled.div`
  gap: 20px;
  justify-content: center;
  align-items: center;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MenuFields = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding: 10px;
  cursor:pointer;
  &:hover {
    color: ${props => props.theme.colors.VeryLightBlue};
  }
`;

export const MenuFieldWrapper = styled.div`
position: relative;`

export const MenuBarExpandedDiv = styled.div`
  width: 130px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  position: absolute;
  background-color:white;
  top:38px;
  left:0px;
`;
export const MenuBarExpandedDivText = styled.h1`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.VeryLightBlue};
  }
`;
