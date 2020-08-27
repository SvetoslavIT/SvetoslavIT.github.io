import home from './controllers/home.js';
import { getRegister, postRegister, getLogin, postLogin, getLogout } from './controllers/user.js';
import { getCreate, postCreate, getDetails, getDelete, getEdit, postEdit, getLike, postSearch } from './controllers/movie.js';

window.addEventListener('load', () => {
    const app = Sammy('body', function () {
        this.use('Handlebars', 'hbs');

        this.userData = {
            email: sessionStorage.getItem('email') || '',
            userId: sessionStorage.getItem('userId') || ''
        };

        this.get('/', home);
        this.get('#/home', home);
        this.get('index.html', home);

        this.get('#/register', getRegister);
        this.post('#/register', context => { postRegister.call(context) });
        this.get('#/login', getLogin);
        this.post('#/login', context => { postLogin.call(context) });
        this.get('#/logout', getLogout);

        this.get('#/create', getCreate);
        this.post('#/create', context => { postCreate.call(context) });
        this.get('#/details/:id', getDetails);
        this.get('#/delete/:id', getDelete);
        this.get('#/edit/:id', getEdit);
        this.post('#/edit/:id', context => { postEdit.call(context) });
        this.get('#/like/:id', getLike);
        this.post('#/search', context => { postSearch.call(context) });
    });

    app.run();
});