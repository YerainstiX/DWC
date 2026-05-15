import React, { useEffect, useState } from "react"
import useAnimu from "../hooks/useAnimu"
import Animu from "../components/Animu"

const Animus = () => {
    const { animus, loading } = useAnimu()

    const [filteredAnimus, setFilteredAnimus] = useState([])

    useEffect(() => {
        setFilteredAnimus(animus)
    }, [animus])

    const filterAnimus = (e) => {
        const text = e.target.value.toLowerCase()

        if (text.trim() === "") {
            setFilteredAnimus(animus)
            return
        }

        const filtered = animus.filter((animu) => animu.title.toLowerCase().includes(text))

        setFilteredAnimus(filtered)
    }

    if (loading) return <h1>LOADING</h1>

    return (
        <>
            <div className="animus_container">
                <div>
                    <p>Search:</p>
                    <input
                        type="search"
                        name="animus_search"
                        placeholder="Type a name"
                        onChange={(e) => {
                            filterAnimus(e)
                        }}
                    />
                </div>
                <div className="animus_list">
                    {animus.length === 0 ? (
                        <h1>Empty List</h1>
                    ) : (
                        filteredAnimus?.map((animu) => (
                            <Animu key={animu.id} id={animu.id} name={animu.title}></Animu>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default Animus
