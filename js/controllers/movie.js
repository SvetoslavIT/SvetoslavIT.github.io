import { showInfo, showError } from '../notification.js';
import { create, getById, deleteMovie, edit, getAll, checkResult } from '../data.js';

export async function getCreate() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    this.partial('./templates/movie/create.hbs', this.app.userData);
}

export async function postCreate() {
    try {
        const { title, description, imageUrl } = this.params;

        if (!title || !description || !imageUrl) { throw new Error('Invalid input'); }

        const movie = {
            title,
            description,
            imageUrl,
            creator: this.app.userData.email,
            likes: []
        };

        const result = await create(movie);
        checkResult(result);

        showInfo('Created successfully!');
        this.redirect('#/home');
    } catch (err) {
        showError(err.message);
    }
}

export async function getDetails() {
    try {
        this.partials = {
            header: await this.load('./templates/common/header.hbs'),
            footer: await this.load('./templates/common/footer.hbs')
        };

        const movie = await getById(this.params.id);
        checkResult(movie);
        movie.isCreator = movie.creator === this.app.userData.email;
        movie.isLiked = movie.likes.includes(this.app.userData.email);
        movie.likes = movie.likes.length;
        Object.assign(movie, this.app.userData);

        this.partial('./templates/movie/details.hbs', movie);
    } catch (err) {
        showError(err.message);
    }
}

export async function getDelete() {
    try {
        this.partials = {
            header: await this.load('./templates/common/header.hbs'),
            footer: await this.load('./templates/common/footer.hbs')
        };

        const movie = await deleteMovie(this.params.id);
        checkResult(movie);

        showInfo('Deleted successfully');
        this.redirect('#/home');
    } catch (err) {
        showError(err.message);
    }
}

export async function getEdit() {
    try {
        this.partials = {
            header: await this.load('./templates/common/header.hbs'),
            footer: await this.load('./templates/common/footer.hbs')
        };

        const movie = await getById(this.params.id);
        checkResult(movie);
        Object.assign(movie, this.app.userData);

        this.partial('./templates/movie/edit.hbs', movie);
    } catch (err) {
        showError(err.message);
    }
}

export async function postEdit() {
    try {
        const { title, description, imageUrl } = this.params;

        if (!title || !description || !imageUrl) { throw new Error('Invalid input'); }

        const movie = {
            title,
            description,
            imageUrl
        };

        const result = await edit(this.params.id, movie);
        checkResult(result);

        showInfo('Eddited successfully');
        this.redirect(`#/details/${result.objectId}`);
    } catch (err) {
        showError(err.message);
    }
}

export async function getLike() {
    try {
        const movie = await getById(this.params.id);
        checkResult(movie);
        movie.likes.push(this.app.userData.email);
        const result = await edit(this.params.id, movie);
        checkResult(result);

        showInfo('Liked successfully');
        this.redirect(`#/details/${movie.objectId}`);
    } catch (err) {
        showError(err.message);
    }
}

export async function postSearch() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
		footer: await this.load('./templates/common/footer.hbs')
    }

    const movies = (await getAll()).filter(m => m.title.includes(this.params.search));
    const obj = {movies};
    Object.assign(obj, this.app.userData);
	
    this.partial('./templates/home/home.hbs', obj);
}