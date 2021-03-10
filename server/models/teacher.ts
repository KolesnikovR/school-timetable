import Subject from './subject';
import Lesson from './lesson';
import User from './user';
import List from './list';

export default class Teacher extends User {
    private _subjects: List<Subject>;
    private _wishes: List<Lesson>;

    constructor(id: string, name: string, surname: string, patronymic?: string, photo?: string, subjects?: Subject[], wishes?: Lesson[]) {
        super(id, name, surname, patronymic, photo);
        this._subjects = new List<Subject>(subjects);
        this._wishes = new List<Lesson>(wishes);
    }

    get subjects() {
        return this._subjects.list;
    }

    get wishes() {
        return this._wishes.list;
    }
}