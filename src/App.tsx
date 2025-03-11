import {BrowserRouter, Routes} from 'react-router';
import {getRoutes} from './app/routes.tsx';

export const App = () => {
    return (
        <BrowserRouter basename="/vite-host-app-example">
            <Routes>{getRoutes()}</Routes>
        </BrowserRouter>
    );
}
