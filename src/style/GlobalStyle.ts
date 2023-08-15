import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset} // styled-reset이라는 패키지를 설치해야한다. 몇가지만 reset해 줄 경우 사용하지 않아도 무방하다.
`;

export default GlobalStyles;
