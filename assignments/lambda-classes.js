// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }

    speak() {
        console.log("Hello my name is " + this.name + ", I am from " + this.location)
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log("Today we are learning about " + subject);
    }

    grade(student, subject) {
        console.log(student.name + " receives a perfect score on " + subject);
    }

    changeGrade(student) {
        let randomNumber = Math.random() * 200;
        if (randomNumber > 100) {
            student.grade = Math.round(student.grade + randomNumber - 100);
            if (student.grade > 100) {
                student.grade = 100;
            }
        }
        else {
            student.grade = Math.round(student.grade - randomNumber);
            if (student.grade < 0) {
                student.grade = 0;
            }
        }
        console.log("the grade has been changed to " + student.grade);
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }

    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(student.name + "has submitted a PR for " + subject);
    }

    sprintChallenge(subject) {
        console.log(student.name + " has begun sprint challenge on " + subject);
    }

    graduate(){
        if (this.grade >= 70) {
            console.log("Congratulations! You are eligible to graduate!")
        }
        else {
            console.log("Go back to grading assignments to increase grade.")
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(channel) {
        console.log(this.name + " announces to " + channel + ", @channel standy times!")
    }

    debugsCode(student, subject) {
        console.log(this.name + " debugs " + student.name + "'s code on " + subject);
    }

}

const john = new Instructor({
    name: "John",
    age: 40,
    location: "Arizona",
    specialty: "Classes",
    favLanguage: "Javascript",
    catchPhrase: "What's up yo!",
    gradClassName: "CS1",
    favInstructor: "johnny"
})

const ali = new Student({
    name: "Ali",
    age: 32,
    location: "MTV",
    previousBackground: "Masters Degree",
    className: "WebPT8",
    favSubjects: ["Javascript", "CSS", "HTML"],
    grade: 50
})

const mary = new ProjectManager({
    name: "Mary",
    age: 45,
    location: "San Francisco",
    specialty: "React",
    favLanguage: "HTML",
    catchPhrase: "It is a good day to die"
})

john.speak();
john.demo("Nesting");
john.grade(ali, "constructors");

ali.listsSubjects();

mary.debugsCode(ali, "nesting");
mary.standUp("Channel 5");

john.changeGrade(ali);

ali.graduate();