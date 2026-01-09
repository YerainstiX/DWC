import React, { useState } from "react"
import "./AddDisc.css"
import { saveData } from "../lib/localStorage.js"

const AddDisc = () => {
    //The states for all the logic in the page
    const [errors, setErrors] = useState({
        name: "",
        singer: "",
        year: "",
        gender: "",
        localization: "",
        status: "",
    })

    const [formData, setFormData] = useState({
        name: "",
        cover: "",
        singer: "",
        year: "",
        gender: "",
        localization: "",
        borrowed: false,
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

        if (year.toString().length !== 4)
            return "The year length must be 4 numbers, you good?"

        if (isNaN(Number(year)))
            return "The year must be a number, you must be an NPC"
    }

    const validateGender = (gender) => {
        const validOptions = ["Pop", "Rock", "Indie", "Jazz"]
        if (!gender) return ""
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

    //The logic of the validation
    const validateForm = () => {
        const newErrors = {
            name: validateName(formData.name),
            singer: validateSinger(formData.singer),
            year: validateYear(formData.year),
            gender: validateGender(formData.gender),
            localization: validateLocalization(formData.localization),
            status: "",
        }

        setErrors(newErrors)

        if (
            !newErrors.name &&
            !newErrors.singer &&
            !newErrors.gender &&
            !newErrors.year &&
            !newErrors.localization
        ) {
            return true
        } else {
            return false
        }
    }

    //The logic to save the data into the localStorage, and show
    const save = () => {
        if (!validateForm()) {
            setErrors((previous) => ({
                ...previous,
                status: "Cannot add disc, fix the errors above",
            }))
            return
        }

        const updated = saveData(discs, formData)
        setDiscs(updated)

        setFormData({
            name: "",
            cover: "",
            singer: "",
            year: "",
            gender: "",
            localization: "",
            borrowed: false,
        })
        setErrors((previous) => ({
            ...previous,
            status: "Disc added successfully!",
        }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
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
                            value={formData.name}
                            id="name"
                            placeholder="The new Abnormal"
                            onChange={handleChange}
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
                            value={formData.cover}
                            id="cover"
                            placeholder="url"
                            onChange={handleChange}
                        />
                    </div>
                    <div id="singer_container">
                        <label htmlFor="singer_group">Singer/Group</label>
                        <input
                            type="text"
                            name="singer"
                            value={formData.singer}
                            id="singer_group"
                            placeholder="The Strokes"
                            onChange={handleChange}
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
                            value={formData.year}
                            id="year"
                            placeholder="2020"
                            onChange={handleChange}
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
                            value={formData.gender}
                            id="gender"
                            onChange={handleChange}
                        >
                            <option value=""></option>
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
                        <label htmlFor="localization">Localization</label>
                        <input
                            type="text"
                            name="localization"
                            value={formData.localization}
                            id="localization_code"
                            placeholder="ES-001AA"
                            onChange={handleChange}
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
                                checked={formData.borrowed === true}
                                onChange={() =>
                                    setFormData({
                                        ...formData,
                                        borrowed: true,
                                    })
                                }
                            />
                            <label htmlFor="borrowed_yes">Yes</label>
                            <input
                                type="radio"
                                name="borrowed"
                                id="borrowed_no"
                                checked={formData.borrowed === false}
                                onChange={() =>
                                    setFormData({
                                        ...formData,
                                        borrowed: false,
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
                    {errors.status && (
                        <p id="status_error" className="msg_status_ok">
                            {errors.status}
                        </p>
                    )}
                </form>
            </div>
        </>
    )
}

export default AddDisc
