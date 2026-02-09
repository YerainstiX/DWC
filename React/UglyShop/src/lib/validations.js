"use strict"

const validateName = (name) => {
    if (!name)
        return "The name can't be empty, as me after finishing Expeditions 33"

    if (name.trim().length < 5)
        return "The name must have over 5 chars, reboot your brain"
}

const validateWeight = (weight) => {
    const w = Number(weight)
    if (!w)
        return "The weight can't be empty, as me after finishing Expeditions 33"

    if (w < 0) return "The weight must be over 0 we don't sell void"

    if (isNaN(w)) return "The weight must be a number, you good?"
}

const validatePrice = (price) => {
    const p = Number(price)
    if (!p)
        return "The price can't be empty, as me after finishing Expeditions 33"

    if (p < 0) return "The price must be over 0 nothing is free"

    if (isNaN(p)) return "The price must be a number, you good?"
}

export const validateProductForm = (data) => {
    const newErrors = {
        name: validateName(data.name),
        weight: validateWeight(data.weight),
        price: validatePrice(data.price),
        status: "",
    }

    if (!newErrors.name && !newErrors.weight && !newErrors.price) {
        return { newErrors, valid: true }
    } else {
        return { newErrors, valid: false }
    }
}

export const validateListForm = (data) => {
    const newErrors = {
        name: validateName(data.name),
    }
    if (!newErrors.name) {
        return { newErrors, valid: true }
    } else {
        return { newErrors, valid: false }
    }
}
