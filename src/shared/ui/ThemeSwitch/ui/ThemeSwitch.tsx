import {FC} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/className";
import cls from './ThemeSwtitch.module.scss';
import On from 'shared/assets/icons/On.svg';
import Off from 'shared/assets/icons/Off.svg';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {Button, ThemeButton} from "shared/ui/Button/ui/Button";

interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({className}: ThemeSwitchProps): JSX.Element => {
    const {theme, toggleTheme} = useTheme()

    return <Button
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitch, {}, [className])}
        onClick={toggleTheme}
    >

        {theme === Theme.DARK ? <On /> : <Off/>}
    </Button>
}
