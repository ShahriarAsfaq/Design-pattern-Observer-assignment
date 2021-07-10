import {Observer} from "./observer";

export class Teacher implements Observer {
    courseNo: string=""
    topicName: string=""
    teacher: string=""
    time: string=""
 
    update(courseNo: string, topicName: string, teacher: string, time: string): void {
        this.courseNo = courseNo
        this.topicName = topicName
        this.teacher = teacher
        this.time = time
        this.show()
    }
     show(): void {
        console.log("Teacher Display:")
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher Name: " + this.teacher);
        console.log("Date: " + this.time);
    }
}