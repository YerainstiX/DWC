import React, { useState } from "react"
import { supabaseConnection } from "../supabase/supabase"

const useSupaBase = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //I decided to only use the getData function, because I don't want to make petitions when I want to sort something 
    //or get a certain product info, but this function take a lot of hours and I don't want to delete it, it's my masterpiece.
    //(also I let this branch open if I want to use it on other section of the app later)
    const fetchTable = async (
        table,
        { column, ascending, filteredColumn, filteredValue } = {},
    ) => {
        setLoading(true)
        setError(null)
        try {
            let query = supabaseConnection.from(table).select("*")

            if (column) query = query.order(column, { ascending })
            if (filteredColumn && filteredValue !== undefined)
                query = query.eq(filteredColumn, filteredValue)

            const { data, error } = await query
            if (!data) throw error
            return data
        } catch (error) {
            throw error
        } finally {
            setLoading(false)
        }
    }

    const getData = async (table) => await fetchTable(table)

    const getItem = async (table, id) =>
        await fetchTable(table, { filteredColumn: "id", filteredValue: id })

    const getSortedData = async (table, { column, ascending = true }) =>
        await fetchTable(table, { column, ascending })

    return { getData, getSortedData, getItem, loading, error }
}

export default useSupaBase
