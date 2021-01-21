import Equipment from './equipment';
import List from './list';

export interface ISubject {
    subject: Subject,
    hoursPerWeek: number
}

export default class Subject {
    private readonly _id: string;
    private _name: string;
    private _equipments: List<Equipment>;
    private _difficulty: number;

    constructor(id: string, name: string, difficulty: number, equipments?: Equipment[]) {
        this._id = id;
        this._name = name;
        this._difficulty = difficulty;
        this._equipments = new List<Equipment>(equipments);
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get equipments() {
        return this._equipments.list;
    }

    get difficulty() {
        return this._difficulty;
    }

    set difficulty(difficulty: number) {
        this._difficulty = difficulty;
    }
}