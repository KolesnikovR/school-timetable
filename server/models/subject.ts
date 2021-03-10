export default class Subject {
    private readonly _id: string;
    private _name: string;
    private _difficulty: number;

    constructor(id: string, name: string, difficulty: number) {
        this._id = id;
        this._name = name;
        this._difficulty = difficulty;
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

    get difficulty() {
        return this._difficulty;
    }

    set difficulty(difficulty: number) {
        this._difficulty = difficulty;
    }
}