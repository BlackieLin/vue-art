// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import Home from './views/index.vue';

const Home = resolve => {
    require.ensure(['./views/index.vue'], () => {
        resolve(require('./views/index.vue'));
    });
};

const List = resolve => {
    require.ensure(['./views/list.vue'], () => {
        resolve(require('./views/list.vue'));
    });
};

const routers = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/list',
    name: 'list',
    component: List
}, {
    path: '/topic/:id',
    name: 'topic',
    component(resolve) {
        require.ensure(['./views/topic.vue'], () => {
            resolve(require('./views/topic.vue'));
        });
    }
}, {
    path: '/add',
    name: 'add',
    component(resolve) {
        require.ensure(['./views/new.vue'], () => {
            resolve(require('./views/new.vue'));
        });
    },
    meta: { requiresAuth: true }
}, {
    path: '/list',
    name: 'message',
    component: List
}, {
    path: '/list',
    name: 'about',
    component: List
}, {
    path: '/login',
    name: 'login',
    component(resolve) {
        require.ensure(['./views/login.vue'], () => {
            resolve(require('./views/login.vue'));
        });
    }
}, {
    path: '*',
    name: 'home',
    component: Home
}];

export default routers;