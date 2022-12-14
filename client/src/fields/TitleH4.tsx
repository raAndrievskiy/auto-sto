import React from 'react';

interface Title {
    children: React.ReactChildren | string
}

export const TitleH4 = ({children}: Title) => <h2 className={'titleH4'}>{children}</h2>
