import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --orange-100: #fbf1e7;
        --orange-200: #e8a660;
        --orange: #DC780B;
        --white: #fff;

        --brown: #150C01;

        --gray-100: #f5f5f5;
        --gray-200: #e8e8e8;
        --gray-400: #8D8884;
        --gray-500: #252525;

        --font-xxl: clamp(1rem, 4vw , 2.5rem);
        --font-xl: clamp(1rem, 3vw , 1.95rem);
        --font-l: clamp(1rem, 3vw , 1.56rem);
        --font-md: clamp(1rem, 2vw , 1.125rem);
        --font-sm: clamp(0.7rem, 2vw , 1rem);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: var(--font-sm);
    }
`
