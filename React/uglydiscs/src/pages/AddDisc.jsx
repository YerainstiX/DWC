import React, { useState } from "react"
import "./AddDisc.css"
import { saveData } from "../lib/localStorage.js"

const AddDisc = () => {
    const [errors, setErrors] = useState({
        name: "",
        singer: "",
        year: "",
        gender: "",
        localization: "",
    })

    const [formData, setFormData] = useState({
        name: "",
        cover: "",
        singer: "",
        year: "",
        gender: "Pop",
        localization: "",
        borrowed: "",
    })

    const [discs, setDiscs] = useState(
        JSON.parse(localStorage.getItem("discs")) || []
    )

    const validateName = (name) => {
        if (!name)
            return "The name can't be empty, as me after finishing Expeditions 33"

        if (name.trim().length < 5)
            return "The name must have over 5 chars, reboot your brain"
    }

    const validateSinger = (singer) => {
        if (!singer)
            return "The singer/group can't be empty, as me after finishing Expeditions 33"

        if (singer.trim().length < 5)
            return "The singer/group must have over 5 chars, you can do it I trust you"
    }

    const validateYear = (year) => {
        if (!year) return ""

        if (year.length !== 4)
            return "The year length must be 4 numbers, you good?"

        if (isNaN(Number(year)))
            return "The year must be a number, you must be an NPC"
    }

    const validateGender = (gender) => {
        const validOptions = ["Pop", "Rock", "Indie", "Jazz"]
        if (!validOptions.includes(gender))
            return "The gender must be one of the giving types, skill issue I guess"
    }

    const validateLocalization = (localization) => {
        const re = /^ES-[0-9]{3}[A-Z]{2}$/

        if (!localization)
            return "The localization can't be empty, as me after finishing Expeditions 33"

        if (!re.test(localization.trim()))
            return "The localization must have ES- followed by 3 numbers and 2 capital letters, brain lag I guess"
    }

    const validateForm = () => {
        const newErrors = {
            name: validateName(formData.name),
            singer: validateSinger(formData.singer),
            year: validateYear(formData.year),
            gender: validateGender(formData.gender),
            localization: validateLocalization(formData.localization),
        }

        setErrors(newErrors)

        if (
            !newErrors.name  &&
            !newErrors.singer  &&
            !newErrors.gender  &&
            !newErrors.year  &&
            !newErrors.localization
        ) {
             return true
        } else {
            return false
        }
           
    }

    const save = () => {
        if (!validateForm()) return

        const updated = saveData(discs, formData)
        setDiscs(updated)

        setFormData({
            name: "",
            cover: "",
            singer_group: "",
            year: "",
            gender: "Pop",
            localization_code: "",
            borrowed: ""
        })
    }

    return (
        <>
            <div id="form_container">
                <form id="form">
                    <div id="name_container">
                        <label htmlFor="name">Disc Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="The new Abnormal"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }}
                        />
                        {errors.name && (
                            <p id="name_error" className="msg_error">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div id="cover_container">
                        <label htmlFor="cover">Cover(URL)</label>
                        <input
                            type="URL"
                            name="cover"
                            id="cover"
                            placeholder="url"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    cover: e.target.value,
                                })
                            }}
                        />
                    </div>
                    <div id="singer_container">
                        <label htmlFor="singer_group">Singer/Group</label>
                        <input
                            type="text"
                            name="singer_group"
                            id="singer_group"
                            placeholder="The Strokes"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    singer: e.target.value,
                                })
                            }}
                        />
                        {errors.singer && (
                            <p id="singer_error" className="msg_error">
                                {errors.singer}
                            </p>
                        )}
                    </div>
                    <div id="year_container">
                        <label htmlFor="year">Year of publication</label>
                        <input
                            type="number"
                            name="year"
                            id="year"
                            placeholder="2020"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    year: e.target.value,
                                })
                            }}
                        />
                        {errors.year && (
                            <p id="year_error" className="msg_error">
                                {errors.year}
                            </p>
                        )}
                    </div>
                    <div id="gender_container">
                        <label htmlFor="gender">Gender</label>
                        <select
                            name="gender"
                            id="gender"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    gender: e.target.value,
                                })
                            }}
                        >
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="Indie">Indie</option>
                            <option value="Jazz">Jazz</option>
                        </select>
                        {errors.gender && (
                            <p id="gender_error" className="msg_error">
                                {errors.gender}
                            </p>
                        )}
                    </div>
                    <div id="localization_container">
                        <label htmlFor="localization_code">Localization</label>
                        <input
                            type="text"
                            name="localization_code"
                            id="localization_code"
                            placeholder="ES-001AA"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    localization: e.target.value,
                                })
                            }}
                        />
                        {errors.localization && (
                            <p id="localization_error" className="msg_error">
                                {errors.localization}
                            </p>
                        )}
                    </div>
                    <div id="borrowed_container">
                        <label htmlFor="borrowed">Borrowed</label>
                        <div className="radio_container">
                            <input
                                type="radio"
                                name="borrowed"
                                id="borrowed_yes"
                                value="true"
                                checked={formData.borrowed === "true"}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        borrowed: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="borrowed_yes">Yes</label>
                            <input
                                type="radio"
                                name="borrowed"
                                id="borrowed_no"
                                value="false"
                                checked={formData.borrowed === "false"}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        borrowed: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="borrowed_no">No</label>
                        </div>
                    </div>
                    <button
                        type="button"
                        id="save"
                        onClick={() => {
                            save()
                        }}
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddDisc
