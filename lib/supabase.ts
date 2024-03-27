import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { AppState } from 'react-native'

const supabaseUrl = "https://iatovdxprmbeocqxewdu.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhdG92ZHhwcm1iZW9jcXhld2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0ODc0OTEsImV4cCI6MjAyNzA2MzQ5MX0.J3_uq70jYuMm-DyC3ySPW045SgRpGPdgpgv18vEiSpA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})


AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })