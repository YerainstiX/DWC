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
        { select = "*", column, ascending, filteredColumn, filteredValue } = {},
    ) => {
        setLoading(true)
        setError(null)
        try {
            let query = supabaseConnection.from(table).select(select)

            if (column) query = query.order(column, { ascending })
            if (filteredColumn && filteredValue !== undefined)
                query = query.eq(filteredColumn, filteredValue)

            const { data, error } = await query
            if (error) throw error
            return data
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    const insertIntoTable = async (table, input) => {
        try {
            const { data, error } = await supabaseConnection
                .from(table)
                .insert([input])
                .select()
                .single()

            if (error) throw error

            return data
        } catch (error) {
            setError(error.message)
        }
    }

    const editTable = async (table, input, id) => {
        try {
            const { data, error } = await supabaseConnection
                .from(table)
                .update(input)
                .eq("id", id)
                .select()
                .single()

            if (error) throw error
            return data
        } catch (error) {
            setError(error.message)
        }
    }

    const upsertTable = async (table, input, conflict) => {
        try {
            const { data, error } = await supabaseConnection
                .from(table)
                .upsert(input, conflict)
                .select()
                .single()

            if (error) throw error
            return data
        } catch (error) {
            setError(error.message)
        }
    }

    const destroyTable = async (table, id) => {
        try {
            const { data, error } = await supabaseConnection
                .from(table)
                .delete()
                .eq("id", id)
                .select()
                .single()

            if (error) throw error

            return data
        } catch (error) {
            setError(error.message)
        }
    }

    const getData = async (table) => await fetchTable(table)

    const getMultiData = async (table, select, column, row) =>
        await fetchTable(table, {
            select: select,
            filteredColumn: column,
            filteredValue: row,
        })

    const getItem = async (table, column, row) =>
        await fetchTable(table, { filteredColumn: column, filteredValue: row })

    const getSortedData = async (table, { column, ascending = true }) =>
        await fetchTable(table, { column, ascending })

    return {
        getData,
        getMultiData,
        getSortedData,
        getItem,
        insertIntoTable,
        editTable,
        destroyTable,
        upsertTable,
        loading,
        error,
    }
}

export default useSupaBase
