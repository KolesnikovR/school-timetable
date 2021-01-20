export default class Equipment {
    private _name: string;
    private _isRequired: boolean;

    constructor(name: string, isRequired: boolean) {
        this._name = name;
        this._isRequired = isRequired;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get isRequired() {
        return this._isRequired;
    }

    set isRequired(isRequired: boolean) {
        this._isRequired = isRequired;
    }
}