import { Outlet } from "react-router-dom";
import * as S from "./communityPage.style";

function CommunityPage() {
    return ( 
        <S.Wrapper>
            <S.Span>
                Community
            </S.Span>
            <Outlet />
        </S.Wrapper>
     );
}

export default CommunityPage;