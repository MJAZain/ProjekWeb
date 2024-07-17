import './src/styles/documentation';
import './src/styles/main';
import './src/styles/user';
import './src/styles/footer';
import './src/styles/login-signup';
import './src/styles/navbar';
import './src/styles/profile';
import './src/styles/package';
import './src/styles/tour';
import './src/styles/insurance';

import router from './src/scripts/router.js';
import { initHomePage } from './src/pages/homePage.js';
import { initLoginPage } from './src/pages/loginPage.js';
import { initRegisterPage } from './src/pages/registerPage.js';
import { initTourPage } from './src/pages/tourPage.js';
import { initPackagePage } from './src/pages/packagePage.js';
import { initDocumentationPage } from './src/pages/documentationPage.js';
import { initForgotPage } from './src/pages/forgotPage.js';
import { initVerificationPage } from './src/pages/verificationPage.js';
import { initResetPage } from './src/pages/resetPage.js';
import { initProfilePage } from './src/pages/profilePage.js';

document.addEventListener('DOMContentLoaded', () => {
    router();

    const path = location.hash.slice(1).toLowerCase() || '/';
    switch (path) {
        case '/login':
            initLoginPage();
            break;
        case '/register':
            initRegisterPage();
            break;
        case '/tour':
            initTourPage();
            break;
        case '/package':
            initPackagePage();
            break;
        case '/documentation':
            initDocumentationPage();
            break;
        case '/forgot-password':
            initForgotPage();
            break;
        case '/verification':
            initVerificationPage();
            break;
        case '/reset-password':
            initResetPage();
            break;
        case '/profile':
            initProfilePage();
            break;
        default:
            initHomePage();
            break;
    }
});
