
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() { }
}

class Student extends Person {
    rollNumber: number;
    course: Course[] = [];

    constructor(name: string, age: number, rollNumber: number) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    registerForCourses(course: Course) {
        this.course.push(course);
        course.addStudent(this); // This ensures the course's students array is updated
    }
}

class Instructor extends Person {
    salary: number;
    course: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    assignCourse(course: Course) {
        this.course.push(course);
        course.setInstructor(this); // This ensures the course's instructor array is updated
    }
}

class Course {
    id: number;
    name: string;
    students: Student[] = [];
    instructor: Instructor[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(std: Student) {
        this.students.push(std);
    }

    setInstructor(ins: Instructor) {
        this.instructor.push(ins);
    }
}

class Department {
    name: string;
    course: Course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course) {
        this.course.push(course);
    }
}

// Creating instances and registering the student for courses
let std1 = new Student("Shehroz", 25, 1234);
let course1 = new Course(1, "IOT");
let course2 = new Course(2, "BCC");

std1.registerForCourses(course1);
std1.registerForCourses(course2);

// console.log(course1);
// console.log(course2);

console.log(std1.course); // This should now show the courses the student is registered for
// console.log(std1)


let instructor1 = new Instructor("Zain",28,500000)
console.log(instructor1.assignCourse(course1))
console.log(instructor1)

let instructor2 = new Instructor("Okasha",26,600000)
console.log(instructor2.assignCourse(course2))
console.log(instructor2)
console.log(course1);
console.log(course2);
console.log(std1)


let dep1 = new Department("Computer Science")
console.log(dep1.addCourse(course1))
console.log(dep1)



// let course3 = new Course(3,"AI")

// course3.addStudent(std1)
// console.log(course3)
// console.log(std1.course)
