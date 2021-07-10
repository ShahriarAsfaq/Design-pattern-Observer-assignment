"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.courseNo = "";
        this.topicName = "";
        this.teacher = "";
        this.time = "";
    }
    Teacher.prototype.update = function (courseNo, topicName, teacher, time) {
        this.courseNo = courseNo;
        this.topicName = topicName;
        this.teacher = teacher;
        this.time = time;
        this.show();
    };
    Teacher.prototype.show = function () {
        console.log("Teacher Display:");
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher Name: " + this.teacher);
        console.log("Date: " + this.time);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
