import React, { useState } from "react"
import useAnimu from "../hooks/useAnimu"

const SaveAnimu = () => {
    const { saveAnimu, getAnimu } = useAnimu()

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        studio: "",
        episodes: "",
        image: "",
        isFinished: false,
        genre: [],
    })

    const handleSubmit = () => {}

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div>
            <h1>SaveAnimu</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor="studio">Studio</label>
                <input type="text" name="studio" onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor="episodes">Episodes</label>
                <input type="number" name="episodes" onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    placeholder="URL"
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <label htmlFor="isFinished">Finished?</label>
                <br />
                <label htmlFor="">Yes</label>
                <input
                    type="radio"
                    name="isFinished"
                    value={true}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor=""> | No</label>
                <input
                    type="radio"
                    name="isFinished"
                    value={false}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <input type="checkbox" name="genre" />
            </form>
        </div>
    )
}

export default SaveAnimu
