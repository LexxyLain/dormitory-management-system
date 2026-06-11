'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface Bill {
  id: string
  description: string
  amount: number
  dueDate: string
  status: 'paid' | 'pending' | 'overdue'
  billDate: string
}

const mockBills: Bill[] = [
  { id: '1', description: 'June 2024 Rent', amount: 5000, dueDate: '2024-06-30', status: 'paid', billDate: '2024-06-01' },
  { id: '2', description: 'May 2024 Rent', amount: 5000, dueDate: '2024-05-30', status: 'paid', billDate: '2024-05-01' },
  { id: '3', description: 'Utility Charges - June', amount: 500, dueDate: '2024-06-15', status: 'pending', billDate: '2024-06-01' },
  { id: '4', description: 'April 2024 Rent', amount: 5000, dueDate: '2024-04-30', status: 'paid', billDate: '2024-04-01' },
]

export default function StudentBilling() {
  const totalDues = mockBills.filter(b => b.status === 'pending' || b.status === 'overdue').reduce((sum, b) => sum + b.amount, 0)
  const totalPaid = mockBills.filter(b => b.status === 'paid').reduce((sum, b) => sum + b.amount, 0)

  const getStatusColor = (status: Bill['status']) => {
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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">${totalPaid}</div>
            <p className="text-sm text-muted-foreground mt-1">Total Paid</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">${totalDues}</div>
            <p className="text-sm text-muted-foreground mt-1">Outstanding Dues</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">{mockBills.length}</div>
            <p className="text-sm text-muted-foreground mt-1">Total Bills</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockBills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/5 transition">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{bill.description}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Bill Date: {bill.billDate} | Due: {bill.dueDate}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-lg font-bold">${bill.amount}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(bill.status)}`}>
                      {bill.status}
                    </span>
                  </div>
                  {bill.status === 'paid' && (
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Download size={16} />
                      Receipt
                    </Button>
                  )}
                  {(bill.status === 'pending' || bill.status === 'overdue') && (
                    <Button size="sm">Pay Now</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
              <div>
                <p className="text-sm font-medium">Credit/Debit Card</p>
                <p className="text-xs text-muted-foreground">Online payment via card</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
              <div className="w-12 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                BANK
              </div>
              <div>
                <p className="text-sm font-medium">Bank Transfer</p>
                <p className="text-xs text-muted-foreground">Direct transfer to dorm account</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
              <div className="w-12 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                CASH
              </div>
              <div>
                <p className="text-sm font-medium">Cash Payment</p>
                <p className="text-xs text-muted-foreground">At the administrative office</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
