import * as S from "./header.style";
import MainNavigation from "../navigation/index"

function Header() {
   return (
      <S.Wrapper>
         <svg
            width="107"
            height="66"
            viewBox="0 0 107 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
         >
            <rect width="107" height="66" fill="url(#pattern0)" />
            <defs>
               <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
               >
                  <use
                     xlinkHref="#image0_422_72"
                     transform="matrix(0.00442478 0 0 0.0071735 0 -0.00214535)"
                  />
               </pattern>
               <image
                  id="image0_422_72"
                  width="226"
                  height="140"
                  xlinkHref="data:image/png;base64,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"
               />
            </defs>
         </svg>
         <MainNavigation />
      </S.Wrapper>
   );
}

export default Header;
