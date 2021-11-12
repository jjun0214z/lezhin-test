import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
    ${reset}
    
    html,
    body {
      overflow: hidden;
    }

    * {
      box-sizing: border-box;
    }
`;

export default GlobalStyles;
