export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Admin-specific content will go here */}
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">User Management</h2>
          <p className="text-muted-foreground">Manage all platform users</p>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Content Management</h2>
          <p className="text-muted-foreground">Manage platform content</p>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <p className="text-muted-foreground">Platform-wide analytics</p>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Settings</h2>
          <p className="text-muted-foreground">Platform configuration</p>
        </div>
      </div>
    </div>
  )
}