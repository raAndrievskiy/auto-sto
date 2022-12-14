import React from "react";

import {useWindowResize} from "../hooks/useWindowResize";
import Container from "../sharedComponent/container/Container";
import {Footer} from "../sharedComponent/footer";
import {HeaderDesktop, HeaderMobile} from "../sharedComponent";

export const MainLayout = ({children}: any) => {
    const {size} = useWindowResize();

    return (
        <div>
            {size > 1024 ? (
                <Container>
                    <HeaderDesktop/>
                </Container>
            ) : (
                <HeaderMobile/>
            )}
            {children}
            <Footer/>
        </div>
    );
};
