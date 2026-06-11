'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AdminNav from '@/components/admin-nav'
import StudentManagement from '@/components/admin/student-management'
import RoomManagement from '@/components/admin/room-management'
import BillingManagement from '@/components/admin/billing-management'
import MaintenanceTracking from '@/components/admin/maintenance-tracking'
import VisitorManagement from '@/components/admin/visitor-management'
import DashboardOverview from '@/components/admin/dashboard-overview'

export default function AdminPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/login')
    }
  }, [user, router])

  if (!user || user.role !== 'admin') {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      <AdminNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back, {user.name}</p>
            </div>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full max-w-3xl grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <DashboardOverview />
            </TabsContent>

            <TabsContent value="students">
              <StudentManagement />
            </TabsContent>

            <TabsContent value="rooms">
              <RoomManagement />
            </TabsContent>

            <TabsContent value="billing">
              <BillingManagement />
            </TabsContent>

            <TabsContent value="maintenance">
              <MaintenanceTracking />
            </TabsContent>

            <TabsContent value="visitors">
              <VisitorManagement />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
