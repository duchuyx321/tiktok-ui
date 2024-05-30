import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import Friends from '~/pages/friends';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';
import HeaderOnly from '~/layouts/HeaderOnly';
// Public Router
const PublicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.nickname, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.live, component: Live },
    { path: config.routes.explore, component: Explore },
];

// Private Router
const PrivateRouters = [];

export { PublicRouters, PrivateRouters };
