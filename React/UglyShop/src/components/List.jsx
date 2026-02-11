import React, { useState } from "react"
import useLists from "../hooks/useLists"
import { changeFormat } from "../lib/utils"
import "./List.css"

const List = ({
    id,
    name,
    ownerId,
    created_at,
    cart,
    setEditingList,
    editingList,
}) => {
    const {
        getListWithProducts,
        getAllListsWithProducts,
        currentList,
        setCurrentList,
        destroyList,
        addProductToList,
        destroyProductFromList,
    } = useLists()

    const [confirmDelete, setConfirmDelete] = useState(false)

    const isOpen = currentList?.id === id
    const activeCart = isOpen ? currentList?.cart : cart

    const summary = activeCart?.reduce(
        (accumulator, item) => {
            accumulator.totalQuantity += item.quantity
            accumulator.totalPrice += item.products.price * item.quantity
            accumulator.totalWeight += item.products.weight * item.quantity
            return accumulator
        },
        {
            totalQuantity: 0,
            totalPrice: 0,
            totalWeight: 0,
        },
    )

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
                            {currentList?.cart?.map((item) => (
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
                                            getAllListsWithProducts()
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
