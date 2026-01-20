import { createClient } from "@supabase/supabase-js"

const supabaseConnection = createClient(
    "https://dzgulemnhblhlzmcevzk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6Z3VsZW1uaGJsaGx6bWNldnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MzQ3MDYsImV4cCI6MjA4NDQxMDcwNn0.F149ZodZYxICHfMRwqJ_didlUrNfGR0CVv0v5eZfECM",
)

export { supabaseConnection }
