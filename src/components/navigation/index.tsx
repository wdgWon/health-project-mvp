import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Navigation = styled.nav`
    position: relative;
    flex
    display: flex;
    height: fit-content;
    padding: 0.5rem;
    align-items: center;
    justify-content: space-between;
`

interface TestComProps {
    color?: string;
    background?: string;
}

const TestCom = styled(Link)<TestComProps>`
    display: inline-block;
    color: ${(props) => props.color || 'black'};
    background: ${(props) => props.background || 'white'};
    text-decoration: none;
    padding: 0.5rem 5rem;
    border: 1px double solid burlywood;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: cyan;
        color: white;
    }
`

function MainNavigation () {
    return ( 
        <Navigation>
            <TestCom to={"/"}>
                Home
            </TestCom>
            <TestCom to={"/community"}>
                Community
            </TestCom>
            <TestCom to={"/products"}>
                Products
            </TestCom>
        </Navigation>
     );
}

export default MainNavigation;