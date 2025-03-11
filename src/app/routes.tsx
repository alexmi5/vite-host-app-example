import {Route} from 'react-router';
import Layout from '../Layout.tsx';
import {lazy, Suspense} from 'react';

const LazyMicroFront1Page = lazy(() => import('../pages/MicroFront1Page.tsx'));

export const getRoutes = () => {
    return (
        <Route path="/" element={<Layout />}>
            <Route index element={<div>HOME PAGE</div>} />
            <Route path="info" element={<div>INFO PAGE</div>} />
            <Route path="micro-1/*" element={<Suspense fallback={<>Loading...</>}>
                <LazyMicroFront1Page />
            </Suspense>} />
            <Route path="micro-2" element={<div>MICRO-2 TBD...</div>} />
        </Route>
    );
};
