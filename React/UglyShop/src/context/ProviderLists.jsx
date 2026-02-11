import React, { createContext, useEffect, useState } from "react"
import useSupaBase from "../hooks/useSupaBase"

const ListsContext = createContext()

const ProviderLists = ({ children }) => {
    const {
        insertIntoTable,
        destroyTable,
        getData,
        getMultiData,
        upsertTable,
        loading,
        error,
    } = useSupaBase()

    const TABLE_LIST = "shopping_lists"
    const TABLE_CART = "cart"
    const [lists, setLists] = useState([])
    const [currentList, setCurrentList] = useState(null)

    const getUserLists = async () => {
        setLists(await getData(TABLE_LIST))
    }

    const insertList = async (data) => {
        const list = await insertIntoTable(TABLE_LIST, data)
        setLists([...lists, list])
    }

    const destroyList = async (id) => {
        const deletedList = await destroyTable(TABLE_LIST, { id: id })
        setLists(lists.filter((list) => list.id !== id))
    }

    const getListWithProducts = async (listId, column = "id") => {
        const list = await getMultiData(
            TABLE_LIST,
            `*,
                cart (
                    quantity,
                    products (*)
                ) `,
            column,
            listId,
        )
        setCurrentList(list[0])
        return list[0]
    }

    const getAllListsWithProducts = async () => {
        const allLists = await getMultiData(
            TABLE_LIST,
            `*,
        cart (
            quantity,
            products (*)
        )`,
        )
        setLists(allLists)
        return allLists
    }

    const addProductToList = async (data) => {
        const list = await upsertTable(TABLE_CART, data, {
            onConflict: "shopping_list_id,product_id",
        })

        setCurrentList(await getListWithProducts(list.shopping_list_id, "id"))
    }

    const destroyProductFromList = async (shoppingListId, productId) => {
        await destroyTable(TABLE_CART, {
            shopping_list_id: shoppingListId,
            product_id: productId,
        })

        await getListWithProducts(shoppingListId)
        await getAllListsWithProducts()
    }

    const box = {
        getUserLists,
        insertList,
        destroyList,
        getListWithProducts,
        getAllListsWithProducts,
        addProductToList,
        destroyProductFromList,
        lists,
        currentList,
        setCurrentList,
        loading,
        error,
    }

    return <ListsContext.Provider value={box}>{children}</ListsContext.Provider>
}

export default ProviderLists

export { ListsContext }
