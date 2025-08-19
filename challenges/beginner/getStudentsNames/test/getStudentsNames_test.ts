import { assertEquals } from "@std/assert";

import { getStudentsNames } from "../src/getStudentsNames.ts";
import { getStudents } from "../../../../services/getStudents.ts";



Deno.test(function studentsNamesTest() {
  assertEquals(
    getStudentsNames(getStudents()),
    ["Alice Smith", "Bob Johnson", "Charlie Lee"],
  );
});

Deno.test(function emptyStudentsList() {
  assertEquals(
    getStudentsNames([]),
    [],
  );
});

Deno.test(function emptyStudentsList() {
  assertEquals(
    getStudentsNames([
      {
        id: 1,
        name: "Titi",
        "coursesTaken": [
          "Biology",
          "Math",
          "Computer Science"
        ]
      },
      {
        id: 2,
        name: "Pepe",
        "coursesTaken": [
          "Biology",
          "Math",
          "Computer Science"
        ]
      },
      {
        id: 3,
        name: "Lolo",
        "coursesTaken": [
          "Biology",
          "Math",
          "Computer Science"
        ]
      },
    ]),
    ["Lolo", "Pepe", "Titi"],
  );
});
