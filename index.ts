import Class from './models/class';
import Cabinet from './models/cabinet';
import Subject from './models/subject';
import Teacher from './models/teacher';
import Lesson from './models/lesson';

import data from './json/data.json';

// Множество классов
let classes: Class[] = [];

// Множество кабинетов
let cabinets: Cabinet[] = data.cabinets.map((cabinet: any, id: number) => new Cabinet(cabinet.num));

// Множество предметов
let subjects: Subject[] = data.subjects.map((subject: any, id: number) => new Subject(id.toString(), subject.name, subject.difficulty));

// Множество преподавателей
let teachers: Teacher[] = data.teachers.map((teacher: any, id: number) => new Teacher(
    id.toString(), teacher.name, teacher.surname, teacher.patronymic, teacher.photo,
    subjects.filter((subject: Subject) => teacher.subjects.includes(subject.id)),
    undefined,
    cabinets.filter((cabinet: Cabinet) => teacher.cabinets.includes(cabinet.num)),
));

// Множество уроков (временные интервалы проведения занятий)
let lessons: Lesson[] = [];

console.log(subjects);
console.log(teachers);
console.log(cabinets);