import React, { createContext, useState } from "react"
import useSupaBase from "../hooks/useSupaBase"

const SupaBaseContext = createContext()

const ProviderSupaBase = ({ Children }) => {
    const supabase = useSupaBase()

    return <SupaBaseContext value={supabase}>{Children}</SupaBaseContext>
}

export default ProviderSupaBase

export { SupaBaseContext }
