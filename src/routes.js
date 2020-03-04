import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Signup from './components/SignUp';
import Home from './components/Home';

export default [
    { path: '/', component: Landing },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: Signup },
    { path: '/home', component: Home }
];