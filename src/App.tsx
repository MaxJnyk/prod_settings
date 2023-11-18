import './styles/index.scss'
import {Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/className";


const App = () => {
const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>Тема</button>
      <Link to={'/'}>Главня</Link>
      <Link to={'/about'}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync/>}/>
          <Route path="/" element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App
