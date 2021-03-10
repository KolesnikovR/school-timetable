import Configuration from '../configuration';
import { Day } from '../enums';
import Class, { ISubjectData } from '../models/class';
import Lesson from '../models/lesson';
import List from '../models/list';
import Subject from '../models/subject';
import Teacher from '../models/teacher';
import Timetable, { ILesson } from '../models/timetable';

// TEMP CONSTS
const lessonsList: ILesson[] = [];

const difficultDays = [
    Day.Tuesday,
    Day.Wednesday,
    Day.Friday 
];

const generateRandomNumber = (start: number, end: number) => Math.floor(Math.random() * (end - start + 1) + start);

export const getMiddleDifficulty = (classData: Class): number => {
    const sumDifficulty = classData.subjects.reduce((sum: number, subj) => sum + subj.subject.difficulty * subj.countPerWeek, 0);
    const middleDifficulty = sumDifficulty / Configuration.getWorkingDaysCount();
    return middleDifficulty;
}

const getLaboriousnessQuality = (timetable: Timetable, classes: Class[]) => {
    const lessonsData = classes.map((classData) => ({
        class: classData,
        lessonsDifficultyPerDay: timetable.lessons.list
            .filter((item) => item.classData.id === classData.id)
            // .map(() => 1)
            .reduce((sum: number, subj) => sum + subj.subject.subject.difficulty, 0)
    }));

    // console.log(lessonsData);
}

const getQuality = (timetable: Timetable, classes: Class[]) => getLaboriousnessQuality(timetable, classes)

export const algo = (classes: Class[], teachers: Teacher[], lessons: Lesson[]) => {
    // TEMP CODE
    classes.forEach((cls) => {
        let lessonsCopy = [...lessons];

        cls.subjects.forEach((subj) => {
            for (let i = 0; i < subj.countPerWeek; i++) {
                const random = generateRandomNumber(0, lessonsCopy.length - 1);
                const lesson = lessonsCopy[random];

                lessonsList.push({
                    teacher: teachers[0],
                    subject: subj,
                    classData: cls,
                    lesson
                });
                
                lessonsCopy = lessonsCopy.filter((item) => lesson.id !== item.id);
            }
        });
    });

    console.log(lessonsList.filter((less) => less.classData.id === "0").sort((lesson1, lesson2) => +lesson1.lesson.id - +lesson2.lesson.id).map((less) => ({
        // teacher: less.teacher.getFullName(),
        subject: less.subject.subject.name,
        lesson: `${less.lesson.day}: ${less.lesson.startTime}-${less.lesson.endTime}`
    })));
    // END TEMP CODE

    const timetable = new Timetable(lessonsList);
    const quality = getQuality(timetable, classes);
}