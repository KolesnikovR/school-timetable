import express from 'express';

import Class from './models/class';
import Cabinet from './models/cabinet';
import Subject from './models/subject';
import Teacher from './models/teacher';
import Lesson from './models/lesson';
import Equipment from './models/equipment';
import Configuration from './configuration';

import data from './json/data.json';

const app = express();
const port = Configuration.getAppPort();

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Множество оборудования
let equipments: Equipment[] = data.equipments.map((equipment: any) => new Equipment(equipment.name, equipment.isRequired));

// Множество кабинетов
let cabinets: Cabinet[] = data.cabinets.map((cabinet: any) => new Cabinet(
    cabinet.num, equipments.filter((equipment: Equipment) => cabinet.equipments.includes(equipment.name))
));

// Множество предметов
let subjects: Subject[] = data.subjects.map((subject: any, id: number) => new Subject(
    id.toString(), subject.name, subject.difficulty,
    equipments.filter((equipment: Equipment) => subject.equipments.includes(equipment.name)),
));

// Множество классов
let classes: Class[] = data.classes.map((classData: any, id: number) => new Class(
    id.toString(), classData.name,
    subjects.filter((subject: Subject) => classData.subjects.includes(subject.id)),
));

// Множество уроков (временные интервалы проведения занятий)
let lessons: Lesson[] = data.lessons.map((lesson: any, id: number) => new Lesson(id.toString(), lesson.startTime, lesson.endTime, lesson.day));

// Множество преподавателей
let teachers: Teacher[] = data.teachers.map((teacher: any, id: number) => new Teacher(
    id.toString(), teacher.name, teacher.surname, teacher.patronymic, teacher.photo,
    subjects.filter((subject: Subject) => teacher.subjects.includes(subject.id)),
    lessons.filter((lesson: Lesson) => teacher.wishes.includes(lesson.id)),
    cabinets.filter((cabinet: Cabinet) => teacher.cabinets.includes(cabinet.num)),
));

console.log(equipments);
console.log(subjects);
console.log(teachers);
console.log(cabinets);
console.log(classes);
console.log(lessons);