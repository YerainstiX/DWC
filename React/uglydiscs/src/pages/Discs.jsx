import React, { useEffect, useState } from "react"
import Disc from "../components/Disc"
import "./Discs.css"

const Discs = () => {
    const [discs, setDiscs] = useState([])
    const [filteredDiscs, setFilteredDiscs] = useState([])

    useEffect(() => {
        const storedDiscs = JSON.parse(localStorage.getItem("discs")) || []
        setDiscs(storedDiscs)
        setFilteredDiscs(storedDiscs)
    }, [])

    const filterDisc = (e) => {
        const text = e.target.value.toLowerCase()

        if (text.trim() === "") {
            setFilteredDiscs(discs)
            return
        }

        const filtered = discs.filter(
            (disc) =>
                disc.name.toLowerCase().includes(text) ||
                disc.singer.toLowerCase().includes(text) ||
                disc.gender.toLowerCase().includes(text)
        )

        setFilteredDiscs(filtered)
    }

    const deleteDisc = (id) => {
        if (confirm("Delete Disc?")) {
            const updated = discs.filter((disc) => disc.id !== id)
            setDiscs(updated)
            setFilteredDiscs(updated)
            localStorage.setItem("discs", JSON.stringify(updated))
        }
    }

    return (
        <div className="discs_container">
            <div className="disc_search_container">
                <p>Search:</p>
                {
                    <input
                        type="search"
                        className="discs_search"
                        placeholder="Search by name, singer/group or gender"
                        onChange={(e) => {
                            filterDisc(e)
                        }}
                    />
                }
            </div>
            <div className="discs_list">
                {discs.length === 0 ? (
                    <h1 className="discs_noDiscs">No disc Registered</h1>
                ) : filteredDiscs.length === 0 ? (
                    <h1 className="discs_notFound">No Results Found</h1>
                ) : (
                    filteredDiscs.map((disc) => (
                        <Disc
                            key={disc.id}
                            id={disc.id}
                            name={disc.name}
                            cover={disc.cover}
                            singer={disc.singer}
                            gender={disc.gender}
                            deleteDisc={deleteDisc}
                        ></Disc>
                    ))
                )}
            </div>
        </div>
    )
}

export default Discs
