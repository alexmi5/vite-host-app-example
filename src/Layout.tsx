import {NavLink, Outlet} from 'react-router';

interface IMenuItem {
    name: string;
    path: string;
}

const menu: IMenuItem[] = [
    {
        name: 'Главная',
        path: '/'
    },
    {
        name: 'Инфо',
        path: '/info'
    },
    {
        name: 'Микрофронт-1',
        path: '/micro-1'
    },
    {
        name: 'Микрофронт-2',
        path: '/micro-2'
    },
];

const Layout = () => {
    return (
        <div className={'host'}>
            <nav>
                {menu.map((item) => {
                    return (
                        <NavLink to={item.path} key={item.path} className={({isActive}) => (isActive ? 'active' : '')}>
                            {item.name}
                        </NavLink>
                    );
                })}
            </nav>
            <h1>HOST APP</h1>
            <Outlet />
        </div>
    );
}

export default Layout;
