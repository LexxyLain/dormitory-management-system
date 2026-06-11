'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'

interface MaintenanceRequest {
  id: string
  issue: string
  description: string
  priority: 'low' | 'medium' | 'high'
  status: 'open' | 'in-progress' | 'completed'
  submittedDate: string
  completedDate?: string
}

const mockRequests: MaintenanceRequest[] = [
  {
    id: '1',
    issue: 'Leaky faucet',
    description: 'Water dripping from bathroom faucet',
    priority: 'medium',
    status: 'completed',
    submittedDate: '2024-05-15',
    completedDate: '2024-05-20',
  },
  {
    id: '2',
    issue: 'AC not cooling',
    description: 'AC is not producing cold air',
    priority: 'high',
    status: 'in-progress',
    submittedDate: '2024-06-01',
  },
  {
    id: '3',
    issue: 'Light bulb replacement',
    description: 'Ceiling light is not working',
    priority: 'low',
    status: 'open',
    submittedDate: '2024-06-04',
  },
]

export default function MaintenanceRequests() {
  const [requests, setRequests] = useState<MaintenanceRequest[]>(mockRequests)
  const [isAddingRequest, setIsAddingRequest] = useState(false)
  const [newRequest, setNewRequest] = useState({ issue: '', description: '', priority: 'medium' as const })

  const handleAddRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (newRequest.issue && newRequest.description) {
      const request: MaintenanceRequest = {
        id: String(requests.length + 1),
        ...newRequest,
        status: 'open',
        submittedDate: new Date().toISOString().split('T')[0],
      }
      setRequests([request, ...requests])
      setNewRequest({ issue: '', description: '', priority: 'medium' })
      setIsAddingRequest(false)
    }
  }

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

  const pendingRequests = requests.filter(r => r.status === 'open' || r.status === 'in-progress')

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">{pendingRequests.length}</div>
            <p className="text-sm text-muted-foreground mt-1">Pending Requests</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">
              {requests.filter(r => r.status === 'completed').length}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">{requests.length}</div>
            <p className="text-sm text-muted-foreground mt-1">Total Requests</p>
          </CardContent>
        </Card>
      </div>

      {!isAddingRequest && (
        <Button onClick={() => setIsAddingRequest(true)} className="gap-2">
          <Plus size={18} />
          Submit Maintenance Request
        </Button>
      )}

      {isAddingRequest && (
        <Card>
          <CardHeader>
            <CardTitle>New Maintenance Request</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddRequest} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Issue Title</label>
                <Input
                  placeholder="e.g., Broken window"
                  value={newRequest.issue}
                  onChange={(e) => setNewRequest({ ...newRequest, issue: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <textarea
                  placeholder="Describe the issue in detail..."
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                  className="w-full mt-1 p-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Priority</label>
                <select
                  value={newRequest.priority}
                  onChange={(e) => setNewRequest({ ...newRequest, priority: e.target.value as 'low' | 'medium' | 'high' })}
                  className="w-full mt-1 p-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="flex gap-3">
                <Button type="submit">Submit Request</Button>
                <Button variant="outline" onClick={() => setIsAddingRequest(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Your Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {requests.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No maintenance requests yet.</p>
            ) : (
              requests.map((request) => (
                <div key={request.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-foreground">{request.issue}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{request.description}</p>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex gap-4">
                      <span>Submitted: {request.submittedDate}</span>
                      <span className={`font-medium capitalize ${getPriorityColor(request.priority)}`}>
                        Priority: {request.priority}
                      </span>
                    </div>
                    {request.completedDate && (
                      <span>Completed: {request.completedDate}</span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
