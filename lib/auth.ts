export type UserRole = 'user' | 'coach' | 'admin' | 'corporate'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
}

// Mock function - replace with your actual auth logic
export function getCurrentUser(): User | null {
  // This would typically come from your auth provider
  // For now, returning a mock user
  return {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'user' // Change this to test different roles
  }
}

export function getRoleBasePath(role: UserRole): string {
  switch (role) {
    case 'user':
      return '/'
    case 'coach':
      return '/'
    case 'admin':
      return '/'
    case 'corporate':
      return '/'
    default:
      return '/'
  }
}

export function getDefaultDashboard(role: UserRole): string {
  return getRoleBasePath(role)
}