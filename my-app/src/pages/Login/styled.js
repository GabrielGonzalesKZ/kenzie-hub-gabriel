import styled from "styled-components";

export const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 25px;
    color: var(--color-primary);
  }

  div {
    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 35%;
    max-width: 369px;
    min-width: 250px;
    padding: 42px 22px;
  }

  h4 {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-grey-0);
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-0);
  }

  input {
    padding: 0px 16px;
    height: 48px;
    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-3);
    border-radius: 4px;
    font-weight: 400;
    font-size: 16.2426px;
    color: var(--color-grey-1);
  }

  form button {
    padding: 0px 22px;
    height: 48px;
    background: var(--color-primary);
    border: 1.2182px solid var(--color-primary);
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    color: var(--color-grey-0);
    cursor: pointer;
  }

  form button:hover {
    background: #ff427f;
    border: 1.2182px solid #ff427f;
  }

  span {
    text-align: center;
    padding-top: 25px;
    padding-bottom: 15px;
  }

  a {
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    color: var(--color-grey-1);
  }

  button {
    padding: 0px 22px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background: var(--color-grey-1);
    border: 1.2182px solid var(--color-grey-1);
  }

  button a {
    font-weight: 500;
    font-size: 16px;
    color: var(--color-grey-0);
  }

  .error {
    font-weight: 400;
    font-size: 12px;
    color: #e83f5b;
    text-align: start;
    margin: -10px 0;
    padding: 0;
  }
`;
