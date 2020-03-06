import Vue from 'vue';
import firebase from 'firebase';
import VueRouter from 'vue-router';
import Landing from '../components/Landing';
import SignIn from '../components/SignIn';
import Signup from '../components/SignUp';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

const paths = [
    { path: '/', component: Landing },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: Signup },
    { path: '/home', component: Home, meta: { requiresAuth: true } },
    { path: '*', component: NotFound }
];

const router = new VueRouter({
    mode: 'history',
    routes: paths
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;
    if (requiresAuth && !isAuthenticated) {
        next('/signin');
        return;
    }
    next();
});

export default router;