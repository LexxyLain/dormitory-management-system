'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, CheckCircle, Clock, AlertCircle } from 'lucide-react'

interface MaintenanceRequest {
  id: string
  room: string
  studentName: string
  issue: string
  priority: 'low' | 'medium' | 'high'
  status: 'open' | 'in-progress' | 'completed'
  submittedDate: string
}

const mockRequests: MaintenanceRequest[] = [
  { id: '1', room: '215', studentName: 'John Doe', issue: 'Broken window', priority: 'high', status: 'in-progress', submittedDate: '2024-06-01' },
  { id: '2', room: '318', studentName: 'Jane Smith', issue: 'AC not cooling', priority: 'high', status: 'open', submittedDate: '2024-06-05' },
  { id: '3', room: '201', studentName: 'Bob Johnson', issue: 'Leaky faucet', priority: 'medium', status: 'completed', submittedDate: '2024-05-28' },
  { id: '4', room: '402', studentName: 'Alice Williams', issue: 'Light bulb replacement', priority: 'low', status: 'completed', submittedDate: '2024-05-20' },
]

export default function MaintenanceTracking() {
  const [requests, setRequests] = useState<MaintenanceRequest[]>(mockRequests)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRequests = requests.filter(
    (request) =>
      request.room.includes(searchTerm) ||
      request.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.issue.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: MaintenanceRequest['status']) => {
    switch (status) {
      case 'open':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      default:
        return ''
    }
  }

  const getPriorityColor = (priority: MaintenanceRequest['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-600'
      case 'medium':
        return 'text-yellow-600'
      case 'low':
        return 'text-green-600'
      default:
        return ''
    }
  }

  const stats = {
    open: requests.filter(r => r.status === 'open').length,
    inProgress: requests.filter(r => r.status === 'in-progress').length,
    completed: requests.filter(r => r.status === 'completed').length,
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <AlertCircle className="text-red-600" size={24} />
              <div>
                <div className="text-2xl font-bold">{stats.open}</div>
                <p className="text-sm text-muted-foreground">Open Requests</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Clock className="text-yellow-600" size={24} />
              <div>
                <div className="text-2xl font-bold">{stats.inProgress}</div>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-green-600" size={24} />
              <div>
                <div className="text-2xl font-bold">{stats.completed}</div>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Requests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by room, student name, or issue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Room</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Student</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Issue</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Priority</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="border-b border-border hover:bg-accent/5 transition">
                    <td className="py-3 px-4 text-sm font-medium">{request.room}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{request.studentName}</td>
                    <td className="py-3 px-4 text-sm">{request.issue}</td>
                    <td className="py-3 px-4">
                      <span className={`text-sm font-medium capitalize ${getPriorityColor(request.priority)}`}>
                        {request.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{request.submittedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No maintenance requests found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
