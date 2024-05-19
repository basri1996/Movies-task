import styled from "styled-components";

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  @media (min-width: 500px) {
    padding: 0 30px;
  }
  @media (min-width: 500px) {
    padding: 0 40px;
  }
  @media (min-width: 1024px) {
    padding: 0 100px;
  }
`;

export const ReviewWrapper = styled.div`
  padding: 20px;
  background-color:${(props) => props.theme.colors.LightBlue};;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 285px;
  @media (min-width: 640px) {
    width: 596px;
  }
  @media (min-width: 1024px) {
    width: 907px;
  }
  @media (min-width: 1301px) {
    width: 1180px;
  }
`;

export const ReviewContent = styled.h1`
  font-size: 12px;
  font-weight: 400;
  color: black;
  opacity: 0.5;
  margin-top: 10px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const UserName = styled.h1`
  font-size: 17px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.Blue};
`;
export const HeaderDivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: color-interpolation-filters;
`;
export const CreatedAt = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.Blue};
`;
