'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Plus, Eye } from 'lucide-react'

interface BillingRecord {
  id: string
  studentName: string
  amount: number
  dueDate: string
  status: 'paid' | 'pending' | 'overdue'
  description: string
}

const mockBillings: BillingRecord[] = [
  { id: '1', studentName: 'John Doe', amount: 5000, dueDate: '2024-06-30', status: 'paid', description: 'June 2024 Rent' },
  { id: '2', studentName: 'Jane Smith', amount: 5000, dueDate: '2024-06-30', status: 'pending', description: 'June 2024 Rent' },
  { id: '3', studentName: 'Bob Johnson', amount: 5000, dueDate: '2024-05-30', status: 'overdue', description: 'May 2024 Rent' },
  { id: '4', studentName: 'Alice Williams', amount: 500, dueDate: '2024-06-15', status: 'pending', description: 'Utility Charges' },
]

export default function BillingManagement() {
  const [billings, setBillings] = useState<BillingRecord[]>(mockBillings)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBillings = billings.filter(
    (billing) =>
      billing.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      billing.status.includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: BillingRecord['status']) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      default:
        return ''
    }
  }

  const stats = {
    totalOutstanding: billings.filter(b => b.status === 'pending' || b.status === 'overdue').reduce((sum, b) => sum + b.amount, 0),
    totalOverdue: billings.filter(b => b.status === 'overdue').reduce((sum, b) => sum + b.amount, 0),
    monthlyRevenue: billings.filter(b => b.status === 'paid').reduce((sum, b) => sum + b.amount, 0),
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">${stats.totalOutstanding}</div>
            <p className="text-sm text-muted-foreground">Outstanding Amount</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-600">${stats.totalOverdue}</div>
            <p className="text-sm text-muted-foreground">Overdue Amount</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">${stats.monthlyRevenue}</div>
            <p className="text-sm text-muted-foreground">Monthly Revenue</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Billing Records</CardTitle>
            <Button className="gap-2">
              <Plus size={18} />
              New Bill
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by student name or status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Student Name</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Description</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Due Date</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBillings.map((billing) => (
                  <tr key={billing.id} className="border-b border-border hover:bg-accent/5 transition">
                    <td className="py-3 px-4 text-sm font-medium">{billing.studentName}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{billing.description}</td>
                    <td className="py-3 px-4 text-sm font-medium">${billing.amount}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{billing.dueDate}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(billing.status)}`}>
                        {billing.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="p-2 hover:bg-accent/20 rounded-lg transition">
                        <Eye size={16} className="text-muted-foreground" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBillings.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No billing records found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
