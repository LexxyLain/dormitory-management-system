'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Clock, LogOut } from 'lucide-react'

interface VisitorRecord {
  id: string
  name: string
  phone: string
  purpose: string
  checkInTime: string
  checkOutTime?: string
  status: 'checked-in' | 'checked-out'
}

const mockVisitors: VisitorRecord[] = [
  {
    id: '1',
    name: 'Mark Smith',
    phone: '+1-555-0201',
    purpose: 'Friend visit',
    checkInTime: '2024-06-05 14:30',
    checkOutTime: undefined,
    status: 'checked-in',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    phone: '+1-555-0202',
    purpose: 'Family visit',
    checkInTime: '2024-06-04 10:00',
    checkOutTime: '2024-06-04 18:00',
    status: 'checked-out',
  },
]

export default function VisitorRegistration() {
  const [visitors, setVisitors] = useState<VisitorRecord[]>(mockVisitors)
  const [isAddingVisitor, setIsAddingVisitor] = useState(false)
  const [newVisitor, setNewVisitor] = useState({ name: '', phone: '', purpose: '' })

  const handleAddVisitor = (e: React.FormEvent) => {
    e.preventDefault()
    if (newVisitor.name && newVisitor.phone && newVisitor.purpose) {
      const visitor: VisitorRecord = {
        id: String(visitors.length + 1),
        ...newVisitor,
        checkInTime: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
        status: 'checked-in',
      }
      setVisitors([visitor, ...visitors])
      setNewVisitor({ name: '', phone: '', purpose: '' })
      setIsAddingVisitor(false)
    }
  }

  const handleCheckOut = (id: string) => {
    setVisitors(
      visitors.map((v) =>
        v.id === id
          ? {
              ...v,
              status: 'checked-out' as const,
              checkOutTime: new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              }),
            }
          : v
      )
    )
  }

  const currentGuests = visitors.filter((v) => v.status === 'checked-in')

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Clock className="text-blue-600" size={24} />
              <div>
                <div className="text-2xl font-bold">{currentGuests.length}</div>
                <p className="text-sm text-muted-foreground">Currently Checked In</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{visitors.length}</div>
            <p className="text-sm text-muted-foreground">Total Visits</p>
          </CardContent>
        </Card>
      </div>

      {!isAddingVisitor && (
        <Button onClick={() => setIsAddingVisitor(true)} className="gap-2">
          <Plus size={18} />
          Register New Visitor
        </Button>
      )}

      {isAddingVisitor && (
        <Card>
          <CardHeader>
            <CardTitle>Register Visitor</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddVisitor} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Visitor Name</label>
                <Input
                  placeholder="Full name"
                  value={newVisitor.name}
                  onChange={(e) => setNewVisitor({ ...newVisitor, name: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  placeholder="+1-555-0000"
                  value={newVisitor.phone}
                  onChange={(e) => setNewVisitor({ ...newVisitor, phone: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Purpose of Visit</label>
                <select
                  value={newVisitor.purpose}
                  onChange={(e) => setNewVisitor({ ...newVisitor, purpose: e.target.value })}
                  className="w-full mt-1 p-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select a purpose...</option>
                  <option value="Friend visit">Friend visit</option>
                  <option value="Family visit">Family visit</option>
                  <option value="Study partner">Study partner</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex gap-3">
                <Button type="submit">Register Visitor</Button>
                <Button variant="outline" onClick={() => setIsAddingVisitor(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <h3 className="font-medium text-foreground">Visitor History</h3>
        {visitors.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">No visitors registered yet.</p>
            </CardContent>
          </Card>
        ) : (
          visitors.map((visitor) => (
            <Card key={visitor.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{visitor.name}</h4>
                    <div className="space-y-1 mt-2 text-sm text-muted-foreground">
                      <p>Phone: {visitor.phone}</p>
                      <p>Purpose: {visitor.purpose}</p>
                      <p>Check-in: {visitor.checkInTime}</p>
                      {visitor.checkOutTime && <p>Check-out: {visitor.checkOutTime}</p>}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        visitor.status === 'checked-in'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                      }`}
                    >
                      {visitor.status}
                    </span>
                    {visitor.status === 'checked-in' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCheckOut(visitor.id)}
                        className="gap-2"
                      >
                        <LogOut size={14} />
                        Check Out
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
