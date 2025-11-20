import React from "react"
import "./AddDisc.css"

const AddDisc = () => {
    return (
        <>
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
                <br />
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
                <br />
            </form>
            <button id="save">Save</button>
        </>
    )
}

export default AddDisc
