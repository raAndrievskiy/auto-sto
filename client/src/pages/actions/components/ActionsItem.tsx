import React from "react";
import {NavLink} from "react-router-dom";

import {TitleH2} from "../../../fields";
import styles from "../styles.module.scss";

export const ActionsItem = ({item}: any) => {
    return (
        <div className={styles.actionItem}>
            <NavLink to={`/action/${item.id}`} className={styles.actionItem__link}>
                <TitleH2>{item.title}</TitleH2>
                <span className="description">{item.description}</span>
            </NavLink>
        </div>
    );
};
