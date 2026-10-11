import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function Onboarding({ setPage, setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { register, login } = useAuth()

  const handleLogin = async () => {
    setLoading(true)
    const user = await login(email, password)
    if (user) {
      setUser(user)
      setPage('facescan')
    }
    setLoading(false)
  }

  return (
    
  )
}
