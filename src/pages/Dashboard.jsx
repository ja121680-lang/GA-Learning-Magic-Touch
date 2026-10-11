import { useState, useEffect } from 'react'
import { useStyle } from '../hooks/useStyle'

export default function Dashboard({ setPage, user }) {
  const [recommendation, setRecommendation] = useState(null)
  const [loading, setLoading] = useState(true)
  const { getRecommendation } = useStyle()

  useEffect(() => {
    const loadRecommendation = async () => {
      const rec = await getRecommendation(user.id)
      setRecommendation(rec)
      setLoading(false)
    }
    loadRecommendation()
  }, [user.id])

  if (loading) return Cargando recomendación...

  return (
    
      )}
    
  )
}
