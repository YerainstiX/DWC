"use strict"

export const showCourse = (course) => {
    return `El curso ${course.course} del año ${course.year} con descripcion: ${course.description} y con los alumnos ${course.students}`
}
