class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() { }
}
class Student extends Person {
    rollNumber;
    courses = []; // renamed to 'courses' for consistency
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        if (!this.courses.includes(course)) { // To avoid duplicate courses
            this.courses.push(course);
            course.addStudent(this, false); // Ensure it won't call addStudent recursively
        }
    }
}
class Instructor extends Person {
    salary;
    courses = []; // renamed to 'courses' for consistency
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        if (!this.courses.includes(course)) { // To avoid duplicate courses
            this.courses.push(course);
            course.setInstructor(this); // This ensures the course's instructor array is updated
        }
    }
}
class Course {
    id;
    name;
    students = [];
    instructors = []; // renamed to 'instructors' for consistency
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std, updateStudent = true) {
        if (!this.students.includes(std)) { // To avoid duplicate students
            this.students.push(std);
            if (updateStudent) {
                std.registerForCourses(this); // Update the student's courses array
            }
        }
    }
    setInstructor(ins) {
        if (!this.instructors.includes(ins)) { // To avoid duplicate instructors
            this.instructors.push(ins);
        }
    }
}
class Department {
    name;
    courses = []; // renamed to 'courses' for consistency
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
// Creating instances and registering the student for courses
let std1 = new Student("Shehroz", 25, 1234);
let course1 = new Course(1, "IOT");
let course2 = new Course(2, "BCC");
let course3 = new Course(3, "AI");
// Registering using Student's method
std1.registerForCourses(course1);
std1.registerForCourses(course2);
// Registering using Course's method
course3.addStudent(std1);
console.log(course1);
console.log(course2);
console.log(course3);
console.log(std1.courses); // This should now show all courses the student is registered for
export {};
