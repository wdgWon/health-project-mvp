import { ReactNode } from "react"
import styled from "styled-components"

const RootLayout = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`

type RootProps = {
    children: ReactNode;
}

const Root = ({children}:RootProps) => {
    return ( 
        <RootLayout>
            {children}
        </RootLayout>
     );
}

export default Root ;