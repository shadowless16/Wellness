export default function CoachDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Coach Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Coach-specific content will go here */}
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">My Clients</h2>
          <p className="text-muted-foreground">Manage your client roster</p>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Programs</h2>
          <p className="text-muted-foreground">Create and manage wellness programs</p>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <p className="text-muted-foreground">Track client progress and outcomes</p>
        </div>
      </div>
    </div>
  )
}