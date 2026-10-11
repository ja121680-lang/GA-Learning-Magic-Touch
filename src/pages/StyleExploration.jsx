import { useState, useEffect } from 'react'
import { useStyle } from '../hooks/useStyle'

export default function StyleExploration({ setPage, user }) {
  const [styles, setStyles] = useState([])
  const [favorites, setFavorites] = useState([])
  const { getAllStyles } = useStyle()

  useEffect(() => {
    const loadStyles = async () => {
      const allStyles = await getAllStyles()
      setStyles(allStyles)
    }
    loadStyles()
  }, [])

  const toggleFavorite = (styleId) => {
    if (favorites.includes(styleId)) {
      setFavorites(favorites.filter(id => id !== styleId))
    } else {
      setFavorites([...favorites, styleId])
    }
  }

  return (
    
        ))}
      
    
  )
}
