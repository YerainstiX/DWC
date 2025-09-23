"use strict"

export const createCourse = (course, year, description) => {
    return { course, year, description, students: [] }
}
