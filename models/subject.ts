import Equipment from './equipment';
import List from './list';

export default class Subject {
    private readonly _id: string;
    private _name: string;
    private _equipment: List<Equipment>;
    private _difficulty: number;

    constructor(id: string, name: string, difficulty: number, equipment?: Equipment[]) {
        this._id = id;
        this._name = name;
        this._difficulty = difficulty;
        this._equipment = new List<Equipment>(equipment);
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

    get equipment() {
        return this._equipment.list;
    }

    get difficulty() {
        return this._difficulty;
    }

    set difficulty(difficulty: number) {
        this._difficulty = difficulty;
    }
}