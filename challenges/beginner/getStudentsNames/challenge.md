
# Beginner Challenges

A set of programming excersises base on **JS/TS**, focus on data managment and manipulation.

List of begginer friendly exercises to _warm up_ and have fun in the process!

## 1. Get students names

Please write a function named `getStudentsNames(students: Student[]) : string[]`, which obtain from the _JSON_ just the students names.

You can use the function `getStudents()` for getting all the students.
Or directly access to `students.json`.

 >**Spicy it Up!🔥** - You __MUST__ sort names in _ascendent_ way.

### Example

#### Input

``` JSON
"students": [
        {
            "id": 1,
            "name": "Bob Johnson",
        },
        {
            "id": 2,
            "name": "Alice Smith",
        },
        {
            "id": 3,
            "name": "Charlie Lee",
        }
    ]
```

#### Output

``` TS
["Alice Smith", "Bob Johnson", "Charlie Lee"]
```

---

### Tasks

- [ ] Get all students names
- [ ] Order names ascendently
