import styled, { keyframes } from "styled-components";
const moveTopAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ShopItemSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
  @media (min-width: 600px) {
    margin-top: 70px;
  }
  @media (min-width: 1024px) {
    margin-top: 100px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 337px;
  padding-left: 25px;
  @media (min-width: 640px) {
    width: 647px;
  }
  @media (min-width: 1024px) {
    width: 957px;
  }
  @media (min-width: 1301px) {
    padding-left: 13px;
    width: 1200px;
  }
`;

// export const ShopItemSectionProducts = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 50px;
// `;

export const ShopItemSectionButton = styled.div`
  margin-top: 10px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    margin-top: 50px;
  }
`;

export const ShopItemSectionText = styled.p`
  color: black;
  font-size: 48px;
  line-height: 1.3em;
  font-weight: 700;
`;

export const ShopItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  position: relative;

  &:hover {
    animation: ${moveTopAnimation} 1s ease infinite;
  }
`;

export const ShopItemName = styled.p`
  font-size: 16px;
  width:280px;
  color: black;
  font-weight: 700;
  line-height: 1.3em;
  margin-top: 10px;
`;

export const ShopItemPrice = styled.p`
  font-size: 14px;
  line-height: 1.3em;

  color: black;
  margin-top: 4px;
  font-weight: 700;
`;

export const ShopItemSectionContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CartCircle = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  left: 245px;
`;

export const TriangleContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  left: 155px;
  top: 10px;
`;

export const Triangle = styled.div`
  position: absolute;
  top: 10;
  right: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid black;
`;

export const ImageFilm = styled.div<{ img: string }>`
  width: 285px;
  height: 382px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

export const SectionTitle = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.colors.Blue};
  /* padding :25px; */
  padding: 25px 0;
`;
