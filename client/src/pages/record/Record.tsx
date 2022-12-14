import React from "react";
import {MainLayout} from "../../layouts";
import {Container} from "../../sharedComponent";
import {
    ChooseSelection,
    ChooseApplication,
    ChooseService,
} from "./components";
import styles from './styles.module.scss'

export const Record = () => {
    return (
        <MainLayout>
            <Container>
                <div className={styles.inner}>
                    <h1 className="title">запись на сто</h1>
                    <ChooseSelection/>
                    <ChooseService/>
                    <ChooseApplication/>
                </div>
            </Container>
        </MainLayout>
    );
};
