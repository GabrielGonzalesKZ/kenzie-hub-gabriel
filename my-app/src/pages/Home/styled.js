import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-bottom: 40px;

  h1 {
    font-size: 25px;
    color: var(--color-primary);
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 800px;
    width: 90%;
    align-items: center;
  }

  .nav button {
    padding: 0px 16px;
    width: 67px;
    height: 40px;
    background: var(--color-grey-3);
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    color: var(--color-grey-0);
    border-style: none;
    cursor: pointer;
  }

  .nav button:hover {
    background-color: var(--color-grey-2);
  }

  .user {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    width: 100%;
    justify-content: center;
    border-top: 2px solid var(--color-grey-3);
    border-bottom: 2px solid var(--color-grey-3);
    padding: 20px 0;
  }

  .text {
    max-width: 800px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-items: center;
  }

  h4 {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-grey-0);
  }

  h2 {
    font-weight: 700;
    font-size: 30px;
    color: var(--color-grey-0);
    padding-top: 40px;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-1);
  }

  a {
    text-decoration: none;
    color: var(--color-grey-0);
  }

  @media screen and (max-width: 729px) {
    .text {
      flex-direction: column;
    }
  }
`;
