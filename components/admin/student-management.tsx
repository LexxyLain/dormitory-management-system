'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit2, Trash2, Plus, Search } from 'lucide-react'

interface Student {
  id: string
  name: string
  email: string
  phone: string
  room: string
  status: 'active' | 'checked-out' | 'pending'
  dues: number
}

const mockStudents: Student[] = [
  { id: '1', name: 'John Doe', email: 'john@dorm.edu', phone: '+1-555-0101', room: '215', status: 'active', dues: 0 },
  { id: '2', name: 'Jane Smith', email: 'jane@dorm.edu', phone: '+1-555-0102', room: '216', status: 'active', dues: 500 },
  { id: '3', name: 'Bob Johnson', email: 'bob@dorm.edu', phone: '+1-555-0103', room: '217', status: 'active', dues: 1200 },
  { id: '4', name: 'Alice Williams', email: 'alice@dorm.edu', phone: '+1-555-0104', room: '218', status: 'pending', dues: 0 },
]

export default function StudentManagement() {
  const [students, setStudents] = useState<Student[]>(mockStudents)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.room.includes(searchTerm)
  )

  const getStatusColor = (status: Student['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'checked-out':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
      default:
        return ''
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Student Management</CardTitle>
          <Button className="gap-2">
            <Plus size={18} />
            Add Student
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by name, email, or room number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Email</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Phone</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Room</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Dues</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-border hover:bg-accent/5 transition">
                  <td className="py-3 px-4 text-sm font-medium">{student.name}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{student.email}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{student.phone}</td>
                  <td className="py-3 px-4 text-sm font-medium">{student.room}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">
                    {student.dues > 0 ? (
                      <span className="text-red-600 dark:text-red-400">${student.dues}</span>
                    ) : (
                      <span className="text-green-600 dark:text-green-400">Paid</span>
                    )}
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

        {filteredStudents.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No students found matching your search.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
