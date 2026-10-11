import { useState } from 'react'
import { supabase } from '../services/supabase'

export function useScan() {
  const [scan, setScan] = useState(null)

  const saveScan = async (userId) => {
    const { data, error } = await supabase
      .from('scans')
      .insert([{ user_id: userId, scan_date: new Date() }])
    if (!error) setScan(data[0])
    return data?.[0]
  }

  const getScan = async (userId) => {
    const { data } = await supabase
      .from('scans')
      .select('*')
      .eq('user_id', userId)
    return data
  }

  return { scan, saveScan, getScan }
}
