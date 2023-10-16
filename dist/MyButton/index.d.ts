import React, { FC } from 'react';
interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: string;
    img?: string;
    isImage?: boolean;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
