import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {   
    font-size: ${({ theme }) => theme.fontSizes.main};
    color:${({ theme }) => theme.colors.darkGreen} ;
    background-color: ${({ theme }) => theme.colors.background}; 
  }

  * {
    box-sizing: border-box;
  }

  body { 
    margin: 0 ;
    padding: 0;  
    width: 100vw;
    min-height: 100vh;

    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.darkGreen};

    background-color: #242424;

    text-align: justify;
  }

  html {
    scroll-behavior: smooth;  
  }

  h1,
  h2,
  h3
  {
     margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    text-transform: uppercase;
    text-align: left;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge.s};
    line-height: 36px;
        word-spacing: 3px;

    @media screen and (${({ theme }) => theme.media.tablet}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.m};
    line-height: 48px;

  }
    @media screen and (${({ theme }) => theme.media.desktop}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.l};
  line-height: 64px;
  }
}

h2{
    margin: 0 0 24px 0;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: 28px;

      @media screen and (${({ theme }) => theme.media.tablet}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.s};
    line-height: 36px;
  }
    @media screen and (${({ theme }) => theme.media.desktop}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.m};
      line-height: 48px;
  }
}

h3{
  font-size: ${({ theme }) => theme.fontSizes.main};

  @media screen and (${({ theme }) => theme.media.tablet}) {
  font-size: ${({ theme }) => theme.fontSizes.m};
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.xs};
  }
}



  p {
    margin: 0;
    padding: 0;
      letter-spacing: -0.64px;
  }

    ul, li, ol {  
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;   
  } 

  img,
  picture,
  video,
  canvas{
    display: block;
  }

  svg{
  stroke: ${({ theme }) => theme.colors.darkGreen};
  }
  
  form
  input,
  button,
  textarea,
  select{
    font: inherit;
    color: inherit
}

section {
  margin: 0 auto;
  padding: 18px 20px;
   max-width: 480px;

   @media screen and (${({ theme }) => theme.media.tablet}) {
  padding: 50px 30px;
  max-width: 768px;
  }
    @media screen and (${({ theme }) => theme.media.desktop}) {
  padding: 60px 20px;
  max-width: 1280px;
  }
}
`;
