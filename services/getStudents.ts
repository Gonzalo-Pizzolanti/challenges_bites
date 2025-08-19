import file from '../data/students.json' with { type: "json" };
import { Unpacked } from '../types/helpers/Unpacked.ts';


type ListOfStudents = typeof file.students
type Student = Unpacked<ListOfStudents>

function getStudents(): Student[] {
    const { students }: { students: Student[] } = file

    return students
}

export type {
    ListOfStudents, Student
}

export {
    getStudents
}