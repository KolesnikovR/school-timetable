import express from 'express';

import Class from './models/class';
import Subject from './models/subject';
import Teacher from './models/teacher';
import Lesson from './models/lesson';
import Configuration from './configuration';

import { getMiddleDifficulty, algo } from './algo';

import data from './json/data.json';

const app = express();
const port = Configuration.getAppPort();

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Множество предметов
let subjects: Subject[] = data.subjects.map((subject: any, id: number) => new Subject(
    id.toString(), subject.name, subject.difficulty)
);

// Множество классов
let classes: Class[] = data.classes.map((classData: any, id: number) => new Class(
    id.toString(), classData.name,
    classData.subjects.map((subject: any) => ({
        subject: subjects.filter((subj) => subj.id === subject.id)[0],
        countPerWeek: subject.countPerWeek
    }))
));

// Множество уроков (временные интервалы проведения занятий)
let lessons: Lesson[] = data.lessons.map((lesson: any, id: number) => new Lesson(id.toString(), lesson.startTime, lesson.endTime, lesson.day));

// Множество преподавателей
let teachers: Teacher[] = data.teachers.map((teacher: any, id: number) => new Teacher(
    id.toString(), teacher.name, teacher.surname, teacher.patronymic, teacher.photo,
    subjects.filter((subject: Subject) => teacher.subjects.includes(subject.id)),
    lessons.filter((lesson: Lesson) => teacher.wishes.includes(lesson.id)),
));

// console.log(subjects);
// console.log(teachers);
// console.log(classes);
// console.log(lessons);
// console.log(getMiddleDifficulty(classes[classes.length - 1]));
algo(classes, teachers, lessons);