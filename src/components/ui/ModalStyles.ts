import styled from "styled-components";

export const ModalContainer = styled.div<{ isCentered: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: ${(props) => (props.isCentered ? "center" : "initial")};
  align-items: ${(props) => (props.isCentered ? "center" : "initial")};
`;
