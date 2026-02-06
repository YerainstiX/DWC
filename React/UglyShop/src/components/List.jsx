import React from "react"
import useLists from "../hooks/useLists"

const List = ({ id, name, ownerId, createdAt }) => {
    const { getListWithProducts } = useLists()
    console.log(getListWithProducts((listId = id)))
    return (
        <>
            <div>
                <h1>{name}</h1>
                <p>Data: {createdAt}</p>
            </div>
        </>
    )
}

export default List
