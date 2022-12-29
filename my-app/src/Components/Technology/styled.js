import styled from "styled-components";

export const StyledTechnology = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  padding-top: 20px;

  .tech {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tech p {
    font-weight: 600;
    font-size: 16px;
    color: #f8f9fa;
  }

  button {
    width: 28px;
    height: 28px;
    border-radius: 2.86px;
    background-color: #212529;
    border-style: none;
    color: #f8f9fa;
    font-size: 18px;
    cursor: pointer;
  }

  button:hover {
    background-color: #343B41;
  }

  ul {
    padding: 15px 13px;
    background: #212529;
    border-radius: 2.85739px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    display: flex;
    padding: 2px 8px;
    background: #121214;
    border-radius: 4.06066px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  li:hover {
    background-color: #343B41;
  }

  li p {
    font-weight: 700;
    font-size: 16px;
    color: #f8f9fa;
  }

  li span {
    font-weight: 400;
    font-size: 13 px;
    color: #868e96;
  }

  .description {
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
    text-align: center;
    align-items: center;
  }
`;
