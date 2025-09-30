"use strict"

export const createCourse = (course, year, description) => {
    return {
        course,
        year,
        description,
        students: [],
        //EX4
        matriculate: function (pupil) {
            this.students = [...this.students, pupil]
        },
    }
}
