'use client'

import Link from 'next/link'
import { LayoutDashboard, Users, Home, DollarSign, Wrench, Users2 } from 'lucide-react'

interface AdminNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function AdminNav({ activeTab, onTabChange }: AdminNavProps) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'rooms', label: 'Rooms', icon: Home },
    { id: 'billing', label: 'Billing', icon: DollarSign },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'visitors', label: 'Visitors', icon: Users2 },
  ]

  return (
    <aside className="w-64 bg-primary text-primary-foreground border-r border-primary/20 flex flex-col">
      <div className="p-6 border-b border-primary/20">
        <h2 className="text-2xl font-bold">Dorm Admin</h2>
        <p className="text-sm text-primary-foreground/70 mt-1">Management System</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-primary-foreground/20'
                  : 'hover:bg-primary-foreground/10'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-primary/20 text-xs text-primary-foreground/70">
        <p>Dormitory Management v1.0</p>
      </div>
    </aside>
  )
}
