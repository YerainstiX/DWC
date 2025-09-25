"use strict"

export const pupil = {
    id: 14,
    name: "Yeray",
    lastName: "Caturla Navarro",
    hobbies: ["Basketball", "Gym", "Videogames"],
    marks: {
        first: 9,
        second: 10,
        third: 10,
    },
    calculateAverage: function () {
        let result =
            (this.marks.first + this.marks.second + this.marks.third) / 3
        return result.toFixed(2)
    },
    showHobbies: function () {
        return `The pupil ${this.name} has this hobbies: ${this.hobbies.join()}`
    },
    printReport: function () {
        return `The pupil ${this.id} named ${this.name} ${
            this.lastName
        } with the hobbies: ${this.hobbies.join()}. And the marks: first semester = ${
            this.marks.first
        }, second semester = ${this.marks.second}, third semester = ${
            this.marks.third
        } that makes ${this.calculateAverage()}`
    },
}
