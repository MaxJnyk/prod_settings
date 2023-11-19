import React, {FC} from 'react';
// eslint-disable-next-line import/named
import {Link, LinkProps,} from "react-router-dom";
import cls from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/className";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
  className?: string;
  children?: React.ReactNode;
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps} = props;
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

