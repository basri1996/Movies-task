import styled from "styled-components";

export const SearchedItemsDivWrapper = styled.div`
 
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.LightBlue};
  position: absolute;
  right: 20px;
  top: 35px;
  border-radius:10px;
  z-index: 999;
  width:150px;
  @media (min-width: 500px) {
    right: 30px;
  }
  @media (min-width: 768px) {
    top: 60px;
    width:250px;
  }
  @media (min-width: 768px) {
    right: 40px;
  }
  @media (min-width: 1054px) {
    right: 50px;
  }
`;
export const Title = styled.h1`
  font-size: 12px;
  width: 50px;
  color:${props=>props.theme.colors.Blue};
  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const SearchedImage = styled.img`
  width: 70px;
  height: 100px;
  @media (min-width: 768px) {
    width: 100px;
    height: 140px;
  }
`;
export const SearchedItemWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
export const SearchedInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SearchedItemDescription = styled.p`
  font-size: 10px;
  width: 90%;
  height: 50px;
  overflow: hidden;
  color:white;
  @media (min-width: 768px) {
    height: 65px;
  }
`;

export const sx = {
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  padding: innerWidth && innerWidth > 768 ? "10px" : "4px",
  width: innerWidth && innerWidth < 768 ? "150px" : "250px",
  fontSize: innerWidth && innerWidth > 768 ? "16px" : "9px",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
};
