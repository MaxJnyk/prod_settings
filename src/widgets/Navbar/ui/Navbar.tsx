import {classNames} from "shared/lib/classNames/className";

import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>Главня</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О нас</AppLink>
            </div>

        </div>
    );
};
