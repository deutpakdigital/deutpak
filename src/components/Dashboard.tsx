"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar, ChartColumn, FileText, House, LogOut, Settings, TrendingUp, User, Users } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { icon: House, label: "Dashboard", active: true },
  { icon: User, label: "Profile", active: false },
  { icon: Calendar, label: "Bookings", active: false },
  { icon: Calendar, label: "Contracts", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const stats = [
  { icon: Users, label: "Total Users", value: "2,543", change: "+12%", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
  { icon: FileText, label: "Documents", value: "1,234", change: "+8%", iconBg: "bg-green-50", iconColor: "text-green-600" },
  { icon: ChartColumn, label: "Analytics", value: "98.5%", change: "+2.1%", iconBg: "bg-purple-50", iconColor: "text-purple-600" },
  { icon: TrendingUp, label: "Growth", value: "24.8%", change: "+5.2%", iconBg: "bg-orange-50", iconColor: "text-orange-600" },
];

const quickActions = [
  { title: "Upload New Document", description: "Add a new document to your profile", className: "bg-blue-50 hover:bg-blue-100", titleColor: "text-blue-900", textColor: "text-blue-600" },
  { title: "Update Profile", description: "Modify your personal information", className: "bg-green-50 hover:bg-green-100", titleColor: "text-green-900", textColor: "text-green-600" },
  { title: "View Analytics", description: "Check your account statistics", className: "bg-purple-50 hover:bg-purple-100", titleColor: "text-purple-900", textColor: "text-purple-600" },
];

function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <div className="h-screen w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
              active ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Icon className="h-5 w-5 mr-3" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="w-full flex items-center px-4 py-3 text-left rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { isAuthenticated, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !isAuthenticated) router.replace("/login");
  }, [ready, isAuthenticated, router]);

  if (!ready || !isAuthenticated) return null;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your account.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map(({ icon: Icon, ...stat }) => (
              <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                    <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Document uploaded</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <button key={action.title} className={`w-full text-left p-3 rounded-lg transition-colors ${action.className}`}>
                    <p className={`font-medium ${action.titleColor}`}>{action.title}</p>
                    <p className={`text-sm ${action.textColor}`}>{action.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
