import React, { FC } from 'react';
interface IRefreshButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const CloseButton: FC<IRefreshButton>;
export default CloseButton;
