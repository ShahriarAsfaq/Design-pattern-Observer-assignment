//import * as moment from 'moment';
import {Observer} from "./observer";


export class Student implements Observer {
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

    //private formattedDate = (moment(this.time)).format('DD-MMM-YYYY HH:mm');

    show(): void {
        console.log("Student Display:")
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher : " + this.teacher);
        console.log("Date: " + this.time);
    }
}