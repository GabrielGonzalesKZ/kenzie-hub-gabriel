import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;
    }

    body {
    margin: 0;
    padding: 0;
    background: var(--color-background);
    font-family: 'Inter', sans-serif;
    background: var(--color-grey-4);
  }

  ul,li {
    list-style: none;
  }

  ul {
    padding: 0;
  }  

  .container {
    margin: 0 auto;
    width: 1200px;
    padding: 20px;
    width: 100%;
  }

`