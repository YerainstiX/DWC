import React, { useContext, useEffect, useState } from "react"
import Disc from "../components/Disc"
import "./Discs.css"

import { ContextDisc } from "../context/ProviderDiscs"

const Discs = () => {
    const { discs, deleteDisc, loadDiscs } = useContext(ContextDisc)

    //const [discs, setDiscs] = useState([])
    const [filteredDiscs, setFilteredDiscs] = useState([])

    useEffect(() => {
        setFilteredDiscs(discs)
    }, [discs])

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

    
    //Function to delete a disc
    const deleteDiscById = async (id) => {
        if (confirm("Delete Disc?")) {
            await deleteDisc(id)
            await loadDiscs()
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
                ) : filteredDiscs.length === 0 ? ( //This two conditions if the list or the filtered list is empty
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
                            deleteDisc={deleteDiscById} //I send the function through the props, so I can use it on Disc
                        ></Disc>
                    ))
                )}
            </div>
        </div>
    )
}

export default Discs
