'use client'

import { LayoutDashboard, DollarSign, Wrench, Users2 } from 'lucide-react'

interface StudentNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function StudentNav({ activeTab, onTabChange }: StudentNavProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'billing', label: 'Billing', icon: DollarSign },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'visitors', label: 'Visitors', icon: Users2 },
  ]

  return (
    <aside className="w-64 bg-accent text-accent-foreground border-r border-accent/20 flex flex-col">
      <div className="p-6 border-b border-accent/20">
        <h2 className="text-2xl font-bold">Student Portal</h2>
        <p className="text-sm text-accent-foreground/70 mt-1">Dormitory System</p>
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
                  ? 'bg-accent-foreground/20'
                  : 'hover:bg-accent-foreground/10'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-accent/20 text-xs text-accent-foreground/70">
        <p>Dormitory System v1.0</p>
      </div>
    </aside>
  )
}
