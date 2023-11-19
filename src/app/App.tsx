import './styles/index.scss'

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/className";

import {AppRouter} from "app/providers";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";


const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App
