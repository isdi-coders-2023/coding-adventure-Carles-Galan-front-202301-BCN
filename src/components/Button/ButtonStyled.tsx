import styled from "styled-components";
const ButtonStyled = styled.button`
  font-family: var(--font-primary);
  color: var(--color-primary-black);
  font-size: 20px;
  border-radius: 10px;
  background-color: var(--color-primary-yellow);
  text-align: center;
  width: 320px;
  height: 40px;
  border: none;
  cursor: pointer;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 600px) {
    height: 57px;
  }
`;
export default ButtonStyled;
