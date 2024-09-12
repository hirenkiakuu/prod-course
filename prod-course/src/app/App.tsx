import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const {theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
           
        </div>
    )
};


export default App;