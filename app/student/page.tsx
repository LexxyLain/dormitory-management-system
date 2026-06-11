'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import StudentNav from '@/components/student-nav'
import StudentDashboard from '@/components/student/student-dashboard'
import StudentBilling from '@/components/student/student-billing'
import MaintenanceRequests from '@/components/student/maintenance-requests'
import VisitorRegistration from '@/components/student/visitor-registration'

export default function StudentPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    if (!user || user.role !== 'student') {
      router.push('/login')
    }
  }, [user, router])

  if (!user || user.role !== 'student') {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      <StudentNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Student Portal</h1>
              <p className="text-muted-foreground mt-1">Welcome, {user.name}</p>
            </div>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <StudentDashboard />
            </TabsContent>

            <TabsContent value="billing">
              <StudentBilling />
            </TabsContent>

            <TabsContent value="maintenance">
              <MaintenanceRequests />
            </TabsContent>

            <TabsContent value="visitors">
              <VisitorRegistration />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
