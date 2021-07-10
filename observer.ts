export interface Observer {
    update(courseNo: string, topicName: string, teacher: string, time: string): void
}