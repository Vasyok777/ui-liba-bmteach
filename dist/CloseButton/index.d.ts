import React, { FC } from 'react';
interface ICloseButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const CloseButton: FC<ICloseButton>;
export default CloseButton;
