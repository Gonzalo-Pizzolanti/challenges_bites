import { assertEquals } from "@std/assert";

import { Solution } from "../solutions/index.ts";
import { getStudents } from "../../../../services/getStudents.ts";



Deno.test(function studentsNamesTest() {
  assertEquals(
    Solution.getStudentsNames(getStudents()),
    ["Alice Smith", "Bob Johnson", "Charlie Lee"],
  );
});

Deno.test(function emptyStudentsList() {
  assertEquals(
    Solution.getStudentsNames([]),
    [],
  );
});

Deno.test(function emptyStudentsList() {
  assertEquals(
    Solution.getStudentsNames([
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
