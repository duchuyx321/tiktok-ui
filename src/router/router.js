import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import HeaderOnly from '~/layouts/HeaderOnly';
// Public Router
const PublicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.nickname, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// Private Router
const PrivateRouters = [];

export { PublicRouters, PrivateRouters };
