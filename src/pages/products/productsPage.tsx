import { Outlet } from "react-router-dom";
import * as S from "./productsPage.style"

function ProductsPage() {
    return ( 
        <S.Wrapper>
            <S.Span>
                Products
            </S.Span>
            <Outlet />
        </S.Wrapper>
     );
}

export default ProductsPage;