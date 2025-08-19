import { Student } from "../../../../services/getStudents.ts";


function getCoursesNames(students: Student[]): Array<string> {
    const courses: string[] = students.map(({ coursesTaken }) => coursesTaken).flat()
    return courses
}

function getMostTakenCourse(students: Student[]): Array<string> | [] {
    if (students.length === 0) return []

    const courses: Array<string> = getCoursesNames(students)

    const courseByAppeareances: Map<typeof courses[number], number> = new Map()
    let mostTimes = 0
    let mostTimesCourses: Array<string> = []

    courses.forEach((course: string) => {
        const courseExists: boolean = courseByAppeareances.has(course)

        if (!courseExists) {
            courseByAppeareances.set(course, 1)
        }
        else {
            courseByAppeareances.set(
                course, (courseByAppeareances.get(course) ?? 0) + 1
            )
        }

        const courseCount: number | undefined = courseByAppeareances.get(course) as number



        if (mostTimes === courseCount) {
            mostTimesCourses.push(course)
        }

        if (mostTimes < courseCount) {
            mostTimes = courseCount ?? mostTimes
            mostTimesCourses = [course]
        }

    }
    )

    return mostTimesCourses
}


export { getMostTakenCourse }