import {getAll} from '../data.js';

export default async function home() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
		footer: await this.load('./templates/common/footer.hbs')
    }

    const movies = await getAll();
    const obj = {movies};
    Object.assign(obj, this.app.userData);
	
    this.partial('./templates/home/home.hbs', obj);
}