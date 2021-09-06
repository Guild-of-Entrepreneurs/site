import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    // Colours
    --purple-1: #786BE1;
    --purple-2: #9A90E8;
    --purple-3: #BBB5F0;
    --purple-4: #DDDAF7;
    --red-1: #EFA5A8;
    --red-2: #F3BBBE;
    --red-3: #F7D2D3;
    --red-4: #FBE8E9;
    --pink-1: #E1B1F0;
    --pink-2: #E8C4F4;
    --pink-3: #F0D8F7;
    --pink-4: #F7EBFB;
    --green-1: #48B2B7;
    --green-2: #76C5C9;
    --green-3: #A3D8DB;
    --green-4: #D1ECED;
    --blue-1: #69AFE9;
    --blue-2: #8FC3EE;
    --blue-3: #B4D7F4;
    --blue-4: #D9EBF9;
    --black: #292929;
    --gray-1: #828282;
    --gray-2: #B3B3B3;
    --gray-3: #D8D8D8;
    --gray-4: #F2F2F2;
    --white: #FFFFFF;

    // Colours as Intentions
    --bodyTextColor: var(--black);
    --primary: var(--purple-1);
    --secondary: var(--red-1);
    

    // Typography
    --headingFont: Encode Sans, sans-serif;
    --bodyFont: Encode Sans, sans-serif;
    

    --h1: 3.5rem;
    --h2: 3.3rem;
    --h3: 3rem;
    --h4: 2rem;
    --h5: 1.7rem;
    --h6: 1.5rem;
    --bodyFontSize: 1.5rem;
    --buttonFontSize: 1.4rem;
    --bodyLineHeight: 30px;

    // Heights
    --headingHeight: 0;
    
    // Shadows
    --screenShadow: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.25));

    // Elevation
    --level-3: 0px 4px 50px rgba(0, 0, 0, 0.25);

    // Transitions
    --cubeTransition: all 0.15s cubic-bezier(1,.25,0,.75) 0s;
  }

  // !smooth scrolling
  html {
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html,body {
    min-height: 100vh;
  }

  html {
    box-sizing: border-box;
    font-size: 57.5%;
    overflow-x: hidden;
  }

  body {
    font-size: var(--bodyFontSize);
    font-family: var(--bodyFont);
    /* overflow: hidden; */
  }

  p {
    line-height: 30px;
  }

  h1,h2,h3,h4,h5 {
    font-family: var(--headingFont);
    font-weight: var(--headingWeight);
    margin: 0; padding: 0;
  }

  h1 {
    font-size: var(--h1);
  }

  h2 {
    font-size: var(--h2);
  }

  h3 {
    font-size: var(--h3); 
  }

  h4 {
    font-size: var(--h4);
  }

  h5 {
    font-size: var(--h5);
  }

  h6 {
    font-size: var(--h6);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  @media ${props => props.theme.breakpoints.s} {
    // Manually override: 500px < x < 769px
  }

  @media ${props => props.theme.breakpoints.m} {
    :root {
      --h1: 5.2rem;
      --h2: 4.7rem;
      --h3: 4.2rem;
      --h4: 1.9rem;
      --h5: 1.8rem;
      --h6: 1.7rem;
      --bodyFontSize: 1.7rem;
      --buttonFontSize: 1.7rem;
      --logoFontSize: 2.5rem;
      --footerlogoFontSize : 1.8rem;

      // Configs
    }


    html {
      font-size: 60%;
    }
  }

  @media ${props => props.theme.breakpoints.l} {
    :root {
      /* --h1: 6.2rem; */
      --h2: 5rem;
      --h3: 3.8rem;
      --h4: 2.13rem;
      --h6: 1.6rem;
      --bodyFontSize: 1.6rem;
      --buttonFontSize: 1.6rem;
      --logoFontSize: 2.4rem;

      // Configs
    }

    html {
      font-size: 62.5%;
    }
  }

`

export default GlobalStyles
