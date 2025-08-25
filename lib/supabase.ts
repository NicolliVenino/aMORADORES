import { createClient } from "@supabase/supabase-js"

// Fallback values to prevent runtime errors when env vars are not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key"

// Check if we have real Supabase credentials
const hasSupabaseConfig =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder.supabase.co"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export a flag to check if Supabase is properly configured
export const isSupabaseConfigured = hasSupabaseConfig

// Helper function to show configuration status
export const getSupabaseStatus = () => {
  if (!hasSupabaseConfig) {
    return {
      configured: false,
      message: "Supabase não está configurado. Configure a integração Supabase nas configurações do projeto.",
    }
  }
  return {
    configured: true,
    message: "Supabase configurado com sucesso.",
  }
}
