"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
        this.courseNo = "";
        this.topicName = "";
        this.teacher = "";
        this.time = "";
    }
    Student.prototype.update = function (courseNo, topicName, teacher, time) {
        this.courseNo = courseNo;
        this.topicName = topicName;
        this.teacher = teacher;
        this.time = time;
        this.show();
    };
    //private formattedDate = (moment(this.time)).format('DD-MMM-YYYY HH:mm');
    Student.prototype.show = function () {
        console.log("Student Display:");
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher : " + this.teacher);
        console.log("Date: " + this.time);
    };
    return Student;
}());
exports.Student = Student;