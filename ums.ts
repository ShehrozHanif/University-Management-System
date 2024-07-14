class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    getName(){}
}

class Student extends Person{
    rollNumber:number;
    course:Course[] =[]

    constructor(name:string,age:number,rollNumber:number){
        super(name,age)
        this.rollNumber = rollNumber
    }

    registerForCourses(course:Course){
        this.course.push(course)


    }
}


class Instructor extends Person{
    salary:number;
    course:Course[] =[]

    constructor(name:string,age:number,salary:number){
        super(name,age)
        this.salary = salary
    }

    assignCourse(course:Course){
        this.course.push(course)
    }
}




class Course {
    id:number;
    name:string;
    students:Student[]=[]
    instructor:Instructor[]=[]

    constructor(id:number, name:string){
        this.id = id;
        this.name = name

    }

    addStudent(std:Student){
        this.students.push(std)
        
    }


    setInstructor(ins:Instructor){
        this.instructor.push(ins)
    }
}



class Department{
    name:string;
    course:Course[]=[]

    constructor(name:string){
        this.name = name
    }

    addCourse(course:Course){
        this.course.push(course)
    }
}


// let std1 = new Student("Shehroz",25,2666741)
// // console.log(std1)

// let std2 = new Student("Hasnain",22,2666741)
// // console.log(std2)



// let instructor1 = new Instructor("Hamza Alvi",27,100000)
// // console.log(instructor1)

// let instructor2 = new Instructor("Okasha",26,150000)
// // console.log(instructor2)


// let course1 = new Course(1,"BCC")
// // console.log(course1)
// console.log(course1.addStudent(std1))
// console.log(course1.addStudent(std2))

// console.log(course1)


// let course2 = new Course(2,"IOT")
// console.log(course2.addStudent(std1))
// console.log(course2.addStudent(std2))
// console.log(course2.setInstructor(instructor1))
// console.log(course2.setInstructor(instructor2))

// console.log(course2)

// let dep1 = new Department("Computer Science")
// dep1.addCourse(course2)
// dep1.addCourse(course1)
// // console.log(dep1.course[0])
// console.log(dep1)
// console.log(dep1.course[0])

// console.log(std1.course)
// std1.registerForCourses(course1)



// Creating instances and registering the student for courses
let std1 = new Student("Shehroz", 25, 1234);
let course1 = new Course(1, "IOT");
let course2 = new Course(2, "BCC");
let course3 = new Course(3,"AI")
std1.registerForCourses(course1);
std1.registerForCourses(course2);

console.log(course1);
console.log(course2);

console.log(std1.course); // This should now show the courses the student is registered for
console.log(std1)

