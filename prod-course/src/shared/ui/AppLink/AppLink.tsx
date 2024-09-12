import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode,
    theme?: AppLinkTheme
};

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link 
            to={to} 
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
};
