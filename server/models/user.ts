import Configuration from '../configuration';

export default abstract class User {
    private readonly _id: string;
    private _name: string;
    private _surname: string;
    private _photo: string;
    private _patronymic: string;

    constructor(id: string, name: string, surname: string, patronymic: string = '', photo?: string) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._photo = photo || Configuration.getUserDefaultPhoto();
    }

    get id() {
        return this._id;
    }

    set name(name: string) {
        this._name = name;
    }

    set surname(surname: string) {
        this._surname = surname;
    }

    set patronymic(patronymic: string) {
        this._patronymic = patronymic;
    }

    get photo() {
        return this._photo;
    }

    public getFullName() {
        return [this._name, this._patronymic, this._surname].join(' ');
    }
}
