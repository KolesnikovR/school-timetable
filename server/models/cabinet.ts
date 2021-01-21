import Equipment from './equipment';
import List from './list';

export default class Cabinet {
    private _num: string;
    private _equipments: List<Equipment>;

    constructor(num: string, equipments?: Equipment[]) {
        this._num = num;
        this._equipments = new List<Equipment>(equipments);
    }

    get num() {
        return this._num;
    }

    set num(num: string) {
        this._num = num;
    }

    get equipments() {
        return this._equipments.list;
    }
}