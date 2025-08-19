import { assertArrayIncludes, assertEquals } from "@std/assert";

import { getMostTakenCourse } from "../solution/index.ts";
import { getStudents, Student } from "../../../../services/getStudents.ts";

Deno.test(function justOneCourse() {
    assertEquals(
        getMostTakenCourse(getStudents()),
        ["Math"],
    );
});

Deno.test(function emptyCoursesList() {
    assertEquals(
        getMostTakenCourse([]),
        [],
    );
});

Deno.test(async function twoOrMoreCourses() {
    const { default: { students } }: { default: { students: Student[] } } = await import('./../../../../data/moreStudents.json', {
        with: { type: 'json' }
    })

    assertArrayIncludes(
        getMostTakenCourse(students),
        ['Math', 'English'],
    );

    assertArrayIncludes(
        getMostTakenCourse(students),
        ['English', 'Math'],
    );
});