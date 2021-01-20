export default class List<T> {
    private _list: T[];

    constructor(array?: T[]) {
        this._list = array ? [...array] : [];
    }

    get list() {
        return this._list;
    }

    public addItem(item: T): void {
        this._list.push(item);
    }

    public removeItem(removedItem: T): void {
        this._list = this._list.filter((item) => JSON.stringify(item) === JSON.stringify(removedItem));
    }

    public editItem(newItem: T): void {
        this._list.forEach((subject) => {
            if (JSON.stringify(newItem) === JSON.stringify(newItem)) {
                Object.assign(subject, newItem);
            }
        });
    }

    public hasItem(item: string): boolean {
        return this._list.some((currentItem) => JSON.stringify(item) === JSON.stringify(currentItem));
    }
}