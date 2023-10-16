import React, { FC } from 'react';
interface INotificationsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: string;
    quantity?: number | string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const NotificationsButton: FC<INotificationsButton>;
export default NotificationsButton;
