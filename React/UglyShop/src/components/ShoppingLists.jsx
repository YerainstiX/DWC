import React, { useEffect, useState } from "react"
import useLists from "../hooks/useLists"
import useSession from "../hooks/useSession"
import List from "./List"

const ShoppingLists = () => {
    const { sessionData } = useSession()

    const {
        getUserLists,
        insertList,
        destroyList,
        getListWithProducts,
        addProductToList,
        lists,
        currentList,
        loading,
        error,
    } = useLists()

    const [formData, setFormData] = useState({
        name: "",
        ownerId: sessionData.user.id,
    })

    const [showCreate, setShowCreate] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    useEffect(() => {
        getUserLists((id = sessionData.user.id))
    }, [])

    //TODO: Do the insertList thing and all the other stuff I have headache
    return (
        <>
            <div>
                <div className="ShoppingList_popups">
                    {showCreate && (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <button>CREATE</button>
                        </>
                    )}
                </div>
                <h1>Lists of {sessionData.user.user_metadata.display_name}</h1>
                {currentList.map((list) => (
                    <List
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        ownerId={list.ownerId}
                        createdAt={list.createdAt}
                    ></List>
                ))}
                <button onClick={setShowCreate(true)}>CREATE NEW LIST</button>
            </div>
        </>
    )
}

export default ShoppingLists
