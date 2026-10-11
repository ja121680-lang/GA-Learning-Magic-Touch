import { useState, useRef } from 'react'
import { useScan } from '../hooks/useScan'

export default function FaceScan({ setPage, user }) {
  const videoRef = useRef(null)
  const [angle, setAngle] = useState(0)
  const { saveScan } = useScan()

  const handleCapture = async () => {
    if (videoRef.current && angle < 3) {
      setAngle(angle + 1)
    } else if (angle === 3) {
      await saveScan(user.id)
      setPage('dashboard')
    }
  }

  return (
    
  )
}
