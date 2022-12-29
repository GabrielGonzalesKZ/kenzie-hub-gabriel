import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  width: 30%;
  max-width: 369px;
  min-width: 300px;
  background-color: var(--color-grey-3);
  margin: 0 auto;
  top: 40%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-2);
    padding: 0 20px;
    border-radius: 4px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    color: #f8f9fa;
  }

  span {
    font-weight: 100;
    font-size: 15px;
    color: #868e96;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: #f8f9fa;
    padding: 10px 0;
  }

  input {
    padding: 0px 16.2426px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;
  }

  select {
    padding: 0px 16.2426px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;
  }

  button {
    padding: 0px 22.3336px;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin: 20px 0;
  }

  button:hover {
    background: #FF427F;
  }
`;
