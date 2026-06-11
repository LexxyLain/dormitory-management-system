'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export default function Page() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      // If user is logged in, redirect to their dashboard
      if (user.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/student')
      }
    } else {
      // If not logged in, redirect to login
      router.push('/login')
    }
  }, [user, router])

  return null
}
