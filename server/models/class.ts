import List from './list';
import Subject from './subject';

export default class Class {
    private readonly _id: string;
    private _name: string;
    private _subjects: List<Subject>;

    constructor(id: string, name: string, subjects?: Subject[]) {
        this._id = id;
        this._name = name;
        this._subjects = new List<Subject>(subjects);
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