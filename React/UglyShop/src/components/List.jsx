import React from "react"
import useLists from "../hooks/useLists"

const List = ({ id, name, ownerId, created_at, cart }) => {
    const { getListWithProducts, currentList } = useLists()
    console.log(cart)
    const getTotalPrice = cart.map((item) => item.products.price)
    return (
        <>
            <div>
                <h1>{name}</h1>
                <p>Data: {created_at}</p>
                <button onClick={() => getListWithProducts(id)}>
                    VIEW PRODUCTS
                </button>
                {currentList?.id === id && (
                    <>
                        <div>
                            {cart.map((item) => (
                                <div key={item.products.id}>
                                    <p>{item.products.name}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button>+</button>
                                    <button>-</button>
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
