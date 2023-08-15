import { Outlet } from "react-router-dom";
import * as S from "./profilePage.style";

function ProfilePage() {
    return ( 
        <S.Wrapper>
            <S.Span>
                Profile
            </S.Span>
            <Outlet />
        </S.Wrapper>
     );
}

export default ProfilePage;