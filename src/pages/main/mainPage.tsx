import { Outlet } from "react-router-dom";
import * as S from "./mainPage.style";

function MainPage() {
    return ( 
        <S.Wrapper>
            <S.Span>
                Main
            </S.Span>
            <Outlet />
        </S.Wrapper>
     );
}

export default MainPage;