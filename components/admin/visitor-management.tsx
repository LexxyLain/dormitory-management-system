'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface VisitorRecord {
  id: string
  visitorName: string
  room: string
  studentName: string
  checkInTime: string
  checkOutTime: string | null
  purpose: string
  status: 'checked-in' | 'checked-out'
}

const mockVisitors: VisitorRecord[] = [
  { id: '1', visitorName: 'Mark Smith', room: '215', studentName: 'John Doe', checkInTime: '2024-06-05 14:30', checkOutTime: null, purpose: 'Friend visit', status: 'checked-in' },
  { id: '2', visitorName: 'Sarah Johnson', room: '216', studentName: 'Jane Smith', checkInTime: '2024-06-05 10:00', checkOutTime: '2024-06-05 12:00', purpose: 'Family visit', status: 'checked-out' },
  { id: '3', visitorName: 'Tom Brown', room: '217', studentName: 'Bob Johnson', checkInTime: '2024-06-04 18:30', checkOutTime: '2024-06-05 09:00', purpose: 'Study partner', status: 'checked-out' },
  { id: '4', visitorName: 'Emma Davis', room: '218', studentName: 'Alice Williams', checkInTime: '2024-06-05 15:45', checkOutTime: null, purpose: 'Friend visit', status: 'checked-in' },
]

export default function VisitorManagement() {
  const [visitors, setVisitors] = useState<VisitorRecord[]>(mockVisitors)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredVisitors = visitors.filter(
    (visitor) =>
      visitor.visitorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.room.includes(searchTerm)
  )

  const getStatusColor = (status: VisitorRecord['status']) => {
    switch (status) {
      case 'checked-in':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
      case 'checked-out':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
      default:
        return ''
    }
  }

  const stats = {
    currentGuests: visitors.filter(v => v.status === 'checked-in').length,
    totalVisits: visitors.length,
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <CheckIn className="text-blue-600" size={24} />
              <div>
                <div className="text-2xl font-bold">{stats.currentGuests}</div>
                <p className="text-sm text-muted-foreground">Currently Checked In</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-2xl font-bold">{stats.totalVisits}</div>
                <p className="text-sm text-muted-foreground">Total Visitor Records</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Visitor Log</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by visitor, student name, or room..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Visitor Name</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Room</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Student Name</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Purpose</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Check-in</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Check-out</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredVisitors.map((visitor) => (
                  <tr key={visitor.id} className="border-b border-border hover:bg-accent/5 transition">
                    <td className="py-3 px-4 text-sm font-medium">{visitor.visitorName}</td>
                    <td className="py-3 px-4 text-sm">{visitor.room}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{visitor.studentName}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{visitor.purpose}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{visitor.checkInTime}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{visitor.checkOutTime || '-'}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(visitor.status)}`}>
                        {visitor.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredVisitors.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No visitor records found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
