'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, DollarSign, Wrench, Users, AlertCircle } from 'lucide-react'

export default function StudentDashboard() {
  const studentInfo = {
    name: 'John Doe',
    room: '215',
    floor: 2,
    checkInDate: '2024-01-15',
    roommate: 'Jane Smith',
  }

  const dueAmount = 500
  const pendingMaintenanceRequests = 1

  const infoCards = [
    {
      title: 'Room Number',
      value: studentInfo.room,
      icon: Home,
      color: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Outstanding Dues',
      value: `$${dueAmount}`,
      icon: DollarSign,
      color: dueAmount > 0 ? 'bg-red-100 dark:bg-red-900/30' : 'bg-green-100 dark:bg-green-900/30',
      iconColor: dueAmount > 0 ? 'text-red-600' : 'text-green-600',
    },
    {
      title: 'Maintenance Requests',
      value: pendingMaintenanceRequests,
      icon: Wrench,
      color: 'bg-yellow-100 dark:bg-yellow-900/30',
      iconColor: 'text-yellow-600',
    },
    {
      title: 'Roommate',
      value: studentInfo.roommate,
      icon: Users,
      color: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Welcome, {studentInfo.name}!</h2>
        <p className="text-muted-foreground">Checked in on {studentInfo.checkInDate}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {infoCards.map((card, index) => {
          const Icon = card.icon
          return (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${card.color}`}>
                    <Icon className={`${card.iconColor} h-5 w-5`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Room Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Room Number</p>
                <p className="text-lg font-bold text-foreground">{studentInfo.room}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Floor</p>
                <p className="text-lg font-bold text-foreground">{studentInfo.floor}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Roommate</p>
                <p className="text-lg font-bold text-foreground">{studentInfo.roommate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <a href="#billing" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/5 transition">
              <DollarSign size={20} className="text-accent" />
              <div>
                <p className="text-sm font-medium">View Billing</p>
                <p className="text-xs text-muted-foreground">Check dues and payments</p>
              </div>
            </a>
            <a href="#maintenance" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/5 transition">
              <Wrench size={20} className="text-accent" />
              <div>
                <p className="text-sm font-medium">Submit Request</p>
                <p className="text-xs text-muted-foreground">Report maintenance issues</p>
              </div>
            </a>
            <a href="#visitors" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/5 transition">
              <Users size={20} className="text-accent" />
              <div>
                <p className="text-sm font-medium">Register Visitor</p>
                <p className="text-xs text-muted-foreground">Add guest information</p>
              </div>
            </a>
          </CardContent>
        </Card>
      </div>

      {dueAmount > 0 && (
        <Card className="border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10">
          <CardContent className="pt-6 flex items-start gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-red-900 dark:text-red-100">Outstanding Dues</p>
              <p className="text-sm text-red-700 dark:text-red-200 mt-1">
                You have ${dueAmount} in outstanding dues. Please make payment at the earliest.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
