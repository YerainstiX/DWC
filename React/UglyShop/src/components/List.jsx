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
    showList,
    setShowList,
}) => {
    const {
        getListWithProducts,
        getAllListsWithProducts,
        currentList,
        setCurrentList,
        destroyList,
        addProductToList,
    } = useLists()

    const [confirmDelete, setConfirmDelete] = useState(false)

    const activeCart = showList ? currentList?.cart : cart

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
        // Si hay otra lista abierta, ciérrala
        if (currentList !== null && editingList) {
            setCurrentList(null)
            setShowList(false)
            setEditingList(false)
        }

        const list = await getListWithProducts(id)
        setCurrentList(list)
        setShowList(true)
        setEditingList(true)
        cart = currentList
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
                <p className="list_date">Data: {created_at}</p>
                {showList ? (
                    <p className="list_summary">
                        Products: {summary?.totalQuantity} | Price:{" "}
                        {changeFormat(summary?.totalPrice)}€ | Weight:{" "}
                        {changeFormat(summary?.totalWeight)}Kg
                    </p>
                ) : (
                    <p className="list_summary">
                        Products: {summary?.totalQuantity} | Price:{" "}
                        {changeFormat(summary?.totalPrice)}€ | Weight:{" "}
                        {changeFormat(summary?.totalWeight)}Kg
                    </p>
                )}
                <button
                    className="list_deleteList"
                    onClick={() => setConfirmDelete(true)}
                >
                    DELETE
                </button>
                {!showList || currentList?.id === id ? (
                    <button
                        className="list_openList"
                        onClick={() => handleViewList()}
                    >
                        VIEW LIST
                    </button>
                ) : (
                    <button
                        className="list_closeList"
                        onClick={() => {
                            setShowList(false)
                            setCurrentList(null)
                            setEditingList(false)
                        }}
                    >
                        CLOSE LIST
                    </button>
                )}
                {currentList?.id === id && showList && (
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
                                            addProductToList({
                                                shopping_list_id:
                                                    currentList.id,
                                                product_id: item.products.id,
                                                quantity: item.quantity - 1,
                                            })
                                            getAllListsWithProducts()
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
