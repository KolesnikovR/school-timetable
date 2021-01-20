import Subject from './subject';
import Lesson from './lesson';
import Cabinet from './cabinet';
import User from './user';
import List from './list';

export default class Teacher extends User {
    private _subjects: List<Subject>;
    private _wishes: List<Lesson>;
    private _cabinets: List<Cabinet>;

    constructor(id: string, name: string, surname: string, patronymic?: string, photo?: string, subjects?: Subject[], wishes?: Lesson[], cabinets?: Cabinet[]) {
        super(id, name, surname, patronymic, photo);
        this._subjects = new List<Subject>(subjects);
        this._wishes = new List<Lesson>(wishes);
        this._cabinets = new List<Cabinet>(cabinets);
    }

    get subjects() {
        return this._subjects.list;
    }

    get wishes() {
        return this._wishes.list;
    }

    get cabinets() {
        return this._cabinets.list;
    }
}