import React from 'react';
export interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    big?: boolean;
    placeholder?: string;
    label?: string;
    error?: string;
}
declare const MyInput: React.ForwardRefExoticComponent<MyInputProps & React.RefAttributes<HTMLInputElement>>;
export default MyInput;
