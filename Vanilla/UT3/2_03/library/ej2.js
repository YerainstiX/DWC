"use strict"

export const showCourse = (course) => {
    return `The course ${course.name} of ${course.year} with description: ${course.description} and with the pupils ${course.students.join()}.`
}

const hasName = (course) => {
    if (typeof course.name != "undefined") return true
    return false
}

const hasYear = (course) => {
    if (typeof course.year != "undefined") return true
    return false
}

const hasDescription = (course)
