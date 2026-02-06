import React, { useContext } from "react"
import { ListsContext } from "../context/ProviderLists"

const useLists = () => {
    const ctx = useContext(ListsContext)
    if (!ctx) throw new Error("Error")
    return ctx
}

export default useLists
