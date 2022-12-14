import React from 'react'; 

interface Title {
    children: React.ReactChildren | string
}

export const TitleH2 = ({children}: Title) => <h2 className={'titleH2'}>{children}</h2>
