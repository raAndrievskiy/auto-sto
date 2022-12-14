import React from 'react'

export enum typeButton {
    small = 'small',
    big = 'big'
}

export interface ButtonProps {
    children: JSX.Element | JSX.Element[] | string,
    className?: string,
    color: string,
    type?: string | undefined,
    onClick?: any
}

export interface InputProps {
    label?: string,
    value?: string | number;
    placeholder?: string,
    register?: any,
    fieldName?: string,
    className?: string,
    changeType?: boolean,
    icon?: React.ReactElement,
    error?: boolean | undefined,
    style?: object;
    handleChange?: (text: string | number | undefined) => void
}
