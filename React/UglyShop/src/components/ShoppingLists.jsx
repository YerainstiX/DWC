import React, { useEffect, useState } from "react"
import useLists from "../hooks/useLists"
import useSession from "../hooks/useSession"
import List from "./List"
import { validateListForm } from "../lib/validations"

const ShoppingLists = ({ setEditingList }) => {
    const { sessionData } = useSession()

    const {
        getUserLists,
        insertList,
        getAllListsWithProducts,
        addProductToList,
        lists,
        currentList,
        loading,
        error,
    } = useLists()

    const [showList, setShowList] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        owner_id: sessionData.user.id,
    })

    const [errors, setErrors] = useState({
        name: "",
        status: "",
    })

    const [showCreate, setShowCreate] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        const { newErrors, valid } = validateListForm(formData)

        if (!valid) {
            setErrors(newErrors)
            setErrors((prev) => ({
                ...prev,
                status: "Cannot add the list fix the errors above",
            }))
            return
        }

        const newList = formData
        insertList(formData)
        setErrors({ name: "", status: "" })
        setFormData({ name: "", owner_id: sessionData.user.id })
        setErrors((prev) => ({ ...prev, status: "List added successfully" }))
        setTimeout(() => {
            setShowCreate(false)
        }, 1500)
    }

    useEffect(() => {
        getAllListsWithProducts()
    }, [])

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
                            <button onClick={handleSubmit}>CREATE</button>
                        </>
                    )}
                </div>
                <h1>Lists of {sessionData.user.user_metadata.display_name}</h1>
                {lists.map((list) => (
                    <List
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        ownerId={list.ownerId}
                        created_at={list.created_at}
                        cart={list.cart}
                        setEditingList={setEditingList}
                        showList={showList}
                        setShowList={setShowList}
                    ></List>
                ))}
                <button onClick={() => setShowCreate(true)}>
                    CREATE NEW LIST
                </button>
            </div>
        </>
    )
}

export default ShoppingLists
