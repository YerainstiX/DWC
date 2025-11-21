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
        name : "",
        singer: "",
    })

    //All the logic of the validations is here

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
            return "The gender must be one of the giving types, skill issue I guess\n"
    }

    const validateLocalization = (localization) => {
        const re = /^ES-[0-9]{3}[A-Z]{2}$/

        if (!localization)
            return "The localization can't be empty, as me after finishing Expeditions 33\n"

        if (!re.test(localization.trim())) 
            return "The localization must have ES- followed by 3 numbers and 2 capital letters, brain lag I guess\n"
        
    }

    const clearErrors = () => {
        document.querySelectorAll(".msg_error").forEach((element) => {
            element.innerText = ""
        })
        document.querySelectorAll(".validation_error").forEach((element) => {
            element.classList.remove("validation_error")
        })
    }

    const validateForm = () => {
       const validateForm = (formData) => {
    const newErrors = {
        name: validateName(formData.name),
        singer: validateSinger(formData.singer_group),
        year: validateYear(formData.year),
        gender: validateGender(formData.gender),
        localization: validateLocalization(formData.localization_code)
    };

    setErrors(newErrors);
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
                        />
                        <p id="name_error" className="msg_error"></p>
                    </div>
                    <div id="cover_container">
                        <label htmlFor="cover">Cover(URL)</label>
                        <input
                            type="URL"
                            name="cover"
                            id="cover"
                            placeholder="url"
                        />
                    </div>
                    <div id="singer_container">
                        <label htmlFor="singer_group">Singer/Group</label>
                        <input
                            type="text"
                            name="singer_group"
                            id="singer_group"
                            placeholder="The Strokes"
                        />
                        <p id="singer_error" className="msg_error"></p>
                    </div>
                    <div id="year_container">
                        <label htmlFor="year">Year of publication</label>
                        <input
                            type="number"
                            name="year"
                            id="year"
                            placeholder="2020"
                        />
                        <p id="year_error" className="msg_error"></p>
                    </div>
                    <div id="gender_container">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender">
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="Indie">Indie</option>
                            <option value="Jazz">Jazz</option>
                        </select>
                        <p id="gender_error" className="msg_error"></p>
                    </div>
                    <div id="localization_container">
                        <label htmlFor="localization_code">Localization</label>
                        <input
                            type="text"
                            name="localization_code"
                            id="localization_code"
                            placeholder="ES-001AA"
                        />
                        <p id="localization_error" className="msg_error"></p>
                    </div>
                    <div id="borrowed_container">
                        <label htmlFor="borrowed">Borrowed</label>
                        <div className="radio_container">
                            <input
                                type="radio"
                                name="borrowed"
                                id="borrowed_yes"
                                value="true"
                            />
                            <label htmlFor="borrowed_yes">Yes</label>
                            <input
                                type="radio"
                                name="borrowed"
                                id="borrowed_no"
                                value="false"
                            />
                            <label htmlFor="borrowed_no">No</label>
                        </div>
                    </div>
                    <button
                        type="button"
                        id="save"
                        onClick={() => {
                            saveData()
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
