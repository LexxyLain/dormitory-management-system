'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit2, Trash2, Plus, Search } from 'lucide-react'

interface Room {
  id: string
  number: string
  floor: number
  capacity: number
  occupied: number
  status: 'available' | 'occupied' | 'maintenance'
  resident: string | null
}

const mockRooms: Room[] = [
  { id: '1', number: '201', floor: 2, capacity: 2, occupied: 2, status: 'occupied', resident: 'John Doe, Jane Smith' },
  { id: '2', number: '202', floor: 2, capacity: 2, occupied: 1, status: 'occupied', resident: 'Bob Johnson' },
  { id: '3', number: '203', floor: 2, capacity: 2, occupied: 0, status: 'available', resident: null },
  { id: '4', number: '204', floor: 2, capacity: 2, occupied: 0, status: 'maintenance', resident: null },
  { id: '5', number: '205', floor: 2, capacity: 2, occupied: 2, status: 'occupied', resident: 'Alice Williams, Tom Brown' },
]

export default function RoomManagement() {
  const [rooms, setRooms] = useState<Room[]>(mockRooms)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRooms = rooms.filter(
    (room) =>
      room.number.includes(searchTerm) ||
      room.status.includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: Room['status']) => {
    switch (status) {
      case 'occupied':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
      case 'available':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'maintenance':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
      default:
        return ''
    }
  }

  const occupancyStats = {
    total: rooms.length,
    occupied: rooms.filter(r => r.status === 'occupied').length,
    available: rooms.filter(r => r.status === 'available').length,
    maintenance: rooms.filter(r => r.status === 'maintenance').length,
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{occupancyStats.total}</div>
            <p className="text-sm text-muted-foreground">Total Rooms</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">{occupancyStats.occupied}</div>
            <p className="text-sm text-muted-foreground">Occupied</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">{occupancyStats.available}</div>
            <p className="text-sm text-muted-foreground">Available</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">{occupancyStats.maintenance}</div>
            <p className="text-sm text-muted-foreground">Maintenance</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Room Inventory</CardTitle>
            <Button className="gap-2">
              <Plus size={18} />
              Add Room
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by room number or status..."
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
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Floor</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Capacity</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Occupied</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Resident(s)</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRooms.map((room) => (
                  <tr key={room.id} className="border-b border-border hover:bg-accent/5 transition">
                    <td className="py-3 px-4 text-sm font-medium">{room.number}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{room.floor}</td>
                    <td className="py-3 px-4 text-sm">{room.capacity}</td>
                    <td className="py-3 px-4 text-sm">{room.occupied}/{room.capacity}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground max-w-xs truncate">
                      {room.resident || '-'}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-accent/20 rounded-lg transition">
                          <Edit2 size={16} className="text-muted-foreground" />
                        </button>
                        <button className="p-2 hover:bg-destructive/20 rounded-lg transition">
                          <Trash2 size={16} className="text-destructive" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredRooms.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No rooms found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
