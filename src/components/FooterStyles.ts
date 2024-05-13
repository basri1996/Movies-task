import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.Blue};
  width: 100%;
  height: 70px;
  padding: 20px 20px;
  @media (min-width: 500px) {
    padding: 20px 30px;
  }
  @media (min-width: 768px) {
    padding: 20px 40px;
  }
  @media (min-width: 1054px) {
    padding: 20px 50px;
  }
`;
