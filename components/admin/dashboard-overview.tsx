'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Home, AlertCircle, DollarSign } from 'lucide-react'

export default function DashboardOverview() {
  const stats = [
    {
      title: 'Total Students',
      value: '248',
      icon: Users,
      color: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Occupied Rooms',
      value: '156',
      icon: Home,
      color: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600',
    },
    {
      title: 'Vacancies',
      value: '44',
      icon: Home,
      color: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Outstanding Dues',
      value: '$12,540',
      icon: DollarSign,
      color: 'bg-red-100 dark:bg-red-900/30',
      iconColor: 'text-red-600',
    },
  ]

  const recentActivities = [
    { id: 1, type: 'New Student', description: 'John Doe checked in - Room 215', time: '2 hours ago' },
    { id: 2, type: 'Maintenance Request', description: 'Broken AC in Room 318', time: '4 hours ago' },
    { id: 3, type: 'Payment Received', description: '$1,200 from Alice Johnson', time: '6 hours ago' },
    { id: 4, type: 'Visitor Registration', description: 'Guest checked in - Room 215', time: '8 hours ago' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <Icon className={`${stat.iconColor} h-5 w-5`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.type}</p>
                    <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition text-sm font-medium">
              Add New Student
            </button>
            <button className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition text-sm font-medium">
              Assign Room
            </button>
            <button className="w-full px-4 py-2 border border-border rounded-lg hover:bg-accent/5 transition text-sm font-medium">
              View Reports
            </button>
            <button className="w-full px-4 py-2 border border-border rounded-lg hover:bg-accent/5 transition text-sm font-medium">
              Send Notice
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
