import {FC, useState} from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/className";
import {ThemeSwitch} from "shared/ui/ThemeSwitch";

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => setCollapsed((prev) => !prev)


    return <div className={classNames(cls.Sidebar, {[cls.collapse]: collapsed}, [className])}

    >
        <button onClick={onToggle} >toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitch />
        </div>
    </div>
}
