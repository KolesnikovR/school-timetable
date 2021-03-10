import Class, { ISubjectData } from './class';
import Lesson from './lesson';
import List from './list';
import Teacher from './teacher'

export interface ILesson {
    teacher: Teacher,
    subject: ISubjectData,
    classData: Class,
    lesson: Lesson
} 

export default class Timetable {
    private _lessons: List<ILesson>;

    constructor(lessons?: ILesson[]) {
        this._lessons = new List<ILesson>(lessons);
    }

    get lessons() {
        return this._lessons;
    }
}