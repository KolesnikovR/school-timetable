import List from './list';
import Subject, { ISubject } from './subject';

export default class Class {
    private readonly _id: string;
    private _name: string;
    private _subjects: List<ISubject>;

    constructor(id: string, name: string, subjects?: ISubject[]) {
        this._id = id;
        this._name = name;
        this._subjects = new List<ISubject>(subjects);
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(num: string) {
        this._name = num;
    }

    get subjects() {
        return this._subjects.list;
    }
}