import React, { useEffect, useState } from "react"
import useLists from "../hooks/useLists"
import useSession from "../hooks/useSession"
import List from "./List"
import { validateListForm } from "../lib/validations"
import "./ShoppingLists.css"

//The component to show all the list of the user
const ShoppingLists = ({ setEditingList }) => {
    const { sessionData } = useSession()

    const { insertList, getAllListsWithProducts, lists } = useLists()

    const { isAdmin } = useSession()

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
            <div className="ShoppingList_container">
                <div className="ShoppingList_lists">
                    <h1 className="ShoppingList_username">
                        Lists of {sessionData.user.user_metadata.display_name}
                    </h1>
                    {isAdmin && (
                        <div className="ShoppingList_disclaimer">
                            <h1>DISCLAIMER</h1>
                            <p>
                                You are an admin user, you can see all list but
                                only edit your own lists
                            </p>
                        </div>
                    )}
                    {lists.map((list) => (
                        <List
                            key={list.id}
                            id={list.id}
                            name={list.name}
                            owner_id={list.owner_id}
                            created_at={list.created_at}
                            setEditingList={setEditingList}
                        ></List>
                    ))}
                    <button
                        className="ShoppingList_newList"
                        onClick={() => {
                            showCreate
                                ? setShowCreate(false)
                                : setShowCreate(true)
                            setErrors({ name: "", status: "" })
                        }}
                    >
                        CREATE NEW LIST +
                    </button>
                    <div className="ShoppingList_popups">
                        {showCreate && (
                            <div className="ShoppingList_addList">
                                <label htmlFor="name">List Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <button onClick={handleSubmit}>CREATE</button>
                                {errors.name && (
                                    <p className="ShoppingList_errors">
                                        {errors.name}
                                    </p>
                                )}
                                {errors.status && (
                                    <p className="ShoppingList_errors">
                                        {errors.status}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingLists
