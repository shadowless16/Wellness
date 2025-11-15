export default function CorporateDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Corporate Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Corporate-specific content will go here */}
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Employee Wellness</h2>
          <p className="text-muted-foreground">Track organization wellness metrics</p>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Program Management</h2>
          <p className="text-muted-foreground">Manage corporate wellness programs</p>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Reports</h2>
          <p className="text-muted-foreground">Generate wellness reports</p>
        </div>
      </div>
    </div>
  )
}