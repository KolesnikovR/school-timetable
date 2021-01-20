import { Day } from '../enums';

export default class Lesson {
    private _startTime: string;
    private _endTime: string;
    private _day: Day;

    constructor(startTime: string, endTime: string, day: Day) {
        this._startTime = startTime;
        this._endTime = endTime;
        this._day = day;
    }

    get startTime() {
        return this._startTime;
    }

    set startTime(time: string) {
        this._startTime = time;
    }

    get endTime() {
        return this._endTime;
    }

    set endTime(time: string) {
        this._endTime = time;
    }

    get day() {
        return this._day;
    }

    set day(day: Day) {
        this._day = day;
    }
}