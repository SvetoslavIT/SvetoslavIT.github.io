import { showInfo, showError } from '../notification.js';
import { register, login, logout, checkResult } from '../data.js';

export async function getRegister() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
		footer: await this.load('./templates/common/footer.hbs'),
    }

    this.partial('./templates/user/register.hbs', this.app.userData);
}

export async function postRegister() {
    try {
        const { email, password, repeatPassword } = this.params;
        
        if (!email) { throw new Error('The email input must be filled!'); }
        if (password.length < 6) { throw new Error('Password must be at least 6 characters'); }
        if (password !== repeatPassword) { throw new Error('Password must be the same'); }

        const result = await register(email, password);
        checkResult(result);
        const loginResult = await login(email, password);
        checkResult(loginResult);
        this.app.userData.email = result.email;
        this.app.userData.userId = result.objectId;

        showInfo('Successful registration!');
        this.redirect('#/home');
    } catch (err) {
        showError(err.message);
    }
}

export async function getLogin() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
		footer: await this.load('./templates/common/footer.hbs'),
    }

    this.partial('./templates/user/login.hbs', this.app.userData);
}

export async function postLogin() {
    try {
        const { email, password } = this.params;

        const result = await login(email, password);

        checkResult(result);
        
        this.app.userData.email = result.email;
        this.app.userData.userId = result.objectId;

        showInfo('Login successful.');
        this.redirect('#/home');
    } catch (err) {
        showError(err.message);
    }
}

export async function getLogout() {
    try {
        await logout();
        
        this.app.userData.email = '';
        this.app.userData.userId = '';

        showInfo('Successful logout');
        this.redirect('#/home');
    } catch (err) {
        showError(err.message);
    }
}