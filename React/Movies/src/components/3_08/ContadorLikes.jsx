import React, { useState } from "react"
import "./contadorLikes.css"

const ContadorLikes = () => {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const incrementLikes = () => {
        return setLikes(likes + 1)
    }

    const incrementDislikes = () => {
        return setDislikes(dislikes + 1)
    }

    return (
        <>
            <div className="contadorlikes_container">
                <div className="contadorlikes_item">
                    <button
                        className="contadorlikes_likes"
                        onClick={incrementLikes}
                    ></button>
                    <p className="contadorlikes_text">{likes}</p>
                </div>

                <div className="contadorlikes_item">
                    <button
                        className="contadorlikes_dislikes"
                        onClick={incrementDislikes}
                    ></button>
                    <p className="contadorlikes_text">{dislikes}</p>
                </div>
            </div>
        </>
    )
}

export default ContadorLikes
