import React, { useState } from "react"
import useLists from "../hooks/useLists"
import { changeFormat } from "../lib/utils"
import "./List.css"

const List = ({
    id,
    name,
    ownerId,
    created_at,
    setEditingList,
    editingList,
}) => {
    const {
        getListWithProducts,
        getAllListsWithProducts,
        currentList,
        lists,
        setCurrentList,
        destroyList,
        addProductToList,
        destroyProductFromList,
    } = useLists()

    const [confirmDelete, setConfirmDelete] = useState(false)
    //To know if the list is open or not, with this if the list if changed the old one is closed
    const isOpen = currentList?.id === id

    const activeList =
        currentList?.id === id
            ? currentList
            : lists.find((l) => l.id === id) || { cart: [] }

    //I use reduce with a acc with the structure I want to calculate all the stats of the list
    const summary = activeList.cart?.reduce(
        (acc, item) => {
            acc.totalQuantity += item.quantity
            acc.totalPrice += item.products.price * item.quantity
            acc.totalWeight += item.products.weight * item.quantity
            return acc
        },
        { totalQuantity: 0, totalPrice: 0, totalWeight: 0 },
    )

    //To prevent that the list moves after adding or removing a product I've decided to sort it before doing anything
    const sortedCart = [...(currentList?.cart || [])].sort((a, b) =>
        a.products.name.localeCompare(b.products.name),
    )

    //This method is to enter the edit mode of the list and if the user is editing another list it first close that list
    const handleViewList = async () => {
        if (currentList?.id === id) {
            setCurrentList(null)
            setEditingList(false)
            return
        }

        const list = await getListWithProducts(id)
        setCurrentList(list)
        setEditingList(true)
    }

    return (
        <>
            {confirmDelete && (
                <div className="list_confirmDelete">
                    <h1>Are you sure you want to delete that List?</h1>
                    <div className="list_confirmDelete_btn">
                        <button onClick={() => destroyList(id)}>Yes</button>
                        <button onClick={() => setConfirmDelete(false)}>
                            No
                        </button>
                    </div>
                </div>
            )}

            <div className="list_info">
                <h1 className="list_name">{name}</h1>
                <p>
                    CREATED: {new Date(created_at).toLocaleDateString("es-ES")}
                </p>
                <p className="list_summary">
                    Products: {summary?.totalQuantity || 0} | Price:{" "}
                    {changeFormat(summary?.totalPrice || 0)}€ | Weight:{" "}
                    {changeFormat(summary?.totalWeight || 0)}Kg
                </p>
                {summary?.totalWeight > 15 && <p>Car needed</p>} <br />
                <button
                    className="list_deleteList"
                    onClick={() => setConfirmDelete(true)}
                >
                    DELETE
                </button>
                {isOpen ? (
                    <button
                        className="list_closeList"
                        onClick={() => {
                            setCurrentList(null)
                            setEditingList(false)
                        }}
                    >
                        CLOSE LIST
                    </button>
                ) : (
                    <button className="list_openList" onClick={handleViewList}>
                        EDIT LIST
                    </button>
                )}
                {currentList?.id === id && (
                    <>
                        <div className="list_productList">
                            {sortedCart.map((item) => (
                                <div key={item.products.id}>
                                    <img
                                        className="list_productList_img"
                                        src={item.products.image_url}
                                        alt="image"
                                    />
                                    <p>{item.products.name}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button
                                        className="list_productList_add"
                                        onClick={() => {
                                            addProductToList({
                                                shopping_list_id:
                                                    currentList.id,
                                                product_id: item.products.id,
                                                quantity: item.quantity + 1,
                                            })
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="list_productList_remove"
                                        onClick={() => {
                                            if (item.quantity !== 1) {
                                                addProductToList({
                                                    shopping_list_id:
                                                        currentList.id,
                                                    product_id:
                                                        item.products.id,
                                                    quantity: item.quantity - 1,
                                                })
                                            } else {
                                                destroyProductFromList(
                                                    currentList.id,
                                                    item.products.id,
                                                )
                                            }
                                        }}
                                    >
                                        -
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default List
