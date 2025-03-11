import {BrowserRouter, Routes} from 'react-router';
import {getRoutes} from './app/routes.tsx';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>{getRoutes()}</Routes>
        </BrowserRouter>
    );
}
