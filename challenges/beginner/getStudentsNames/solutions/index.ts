import { ListOfStudents, Student } from "../../../../services/getStudents.ts";

class Solution {
    static getStudentsNames(students: ListOfStudents): string[] {
        if (!students) {
            return [];
        }

        return students
            .map(({ name }: { name: string }) => name)
            .sort((previousName: string, currentName: string) =>
                previousName.localeCompare(currentName)
            );
    }

    /**
     * Made for the benchmark analysis.
     *
     * @param students
     * @returns
     */
    static imperativeSort(students: ListOfStudents) {
        interface N extends Pick<Student, "coursesTaken" | "id"> {
            order: number;
        }

        const studentsOrderByName = {} as Record<string, N>; // String -> Student name | Number -> Alphabetic order
        const collator: Intl.Collator = new Intl.Collator("es");

        for (const index in students) {
            const numericIndex: number = parseInt(index);
            const student: Student = students[numericIndex];

            // First element.
            if (numericIndex === 0) {
                studentsOrderByName[student.name] = {
                    order: 1,
                    ...student,
                };

                continue
            }

            for (
                const [name, { order, ...studentData }] of (Object.entries(studentsOrderByName) as [string, N][])
            ) {
                const isStudentNameEarlierAlphabetically: boolean =
                    (collator.compare(student.name, name)) > 0;

                if (isStudentNameEarlierAlphabetically) {
                    studentsOrderByName[student.name] = {
                        ...student,
                        order: order + 1,
                    };
                    break;
                }

                studentsOrderByName[student.name] = { ...student, order, };
                studentsOrderByName[name] = {
                    ...studentData,
                    order: order + 1,
                };
            }
        }

        return studentsOrderByName
    }

}

export { Solution };
