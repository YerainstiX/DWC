import React, { createContext, useEffect, useState } from "react"
import useSupaBase from "../hooks/useSupaBase"

const ListsContext = createContext()

const ProviderLists = ({ children }) => {
    const {
        insertIntoTable,
        destroyTable,
        getItem,
        getMultiData,
        upsertTable,
        loading,
        error,
    } = useSupaBase()

    const TABLE_LIST = "shopping_lists"
    const TABLE_CART = "cart"
    const [lists, setLists] = useState([])
    const [currentList, setCurrentList] = useState(null)

    const getUserLists = async (field = "owner_id", id) => {
        setLists(await getItem(TABLE_LIST, field, id))
    }

    const insertList = async (data) => {
        const list = await insertIntoTable(TABLE_LIST, data)
        setLists([...lists, list])
    }

    const destroyList = async (id) => {
        const deletedList = await destroyTable(TABLE_LIST, id)
        setLists(lists.filter((list) => list.id !== id))
    }

    const getListWithProducts = async (column = "id", listId) => {
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
    }

    const addProductToList = async (data) => {
        const list = await upsertTable(TABLE_CART, data, {
            onConflict: "shopping_list_id,product_id",
        })

        setCurrentList(await getListWithProducts("id", list.shopping_list_id))
    }

    const box = {
        getUserLists,
        insertList,
        destroyList,
        getListWithProducts,
        addProductToList,
        lists,
        currentList,
        loading,
        error,
    }

    return <ListsContext.Provider value={box}>{children}</ListsContext.Provider>
}

export default ProviderLists

export { ListsContext }
