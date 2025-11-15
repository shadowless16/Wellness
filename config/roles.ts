import { UserRole } from '@/lib/auth'

export interface RoleConfig {
  name: string
  displayName: string
  color: string
  routes: string[]
  features: string[]
}

export const roleConfigs: Record<UserRole, RoleConfig> = {
  user: {
    name: 'user',
    displayName: 'User',
    color: 'warm-teal',
    routes: [
      '/meditation',
      '/goals', 
      '/mood',
      '/community',
      '/insights',
      '/journal',
      '/resources',
      '/saved',
      '/profile'
    ],
    features: [
      'meditation_tracking',
      'mood_logging',
      'goal_setting',
      'community_access',
      'journal_writing'
    ]
  },
  coach: {
    name: 'coach',
    displayName: 'Coach/Trainer',
    color: 'warm-teal',
    routes: [
      '/clients',
      '/programs',
      '/analytics',
      '/resources',
      '/profile'
    ],
    features: [
      'client_management',
      'program_creation',
      'progress_tracking',
      'analytics_dashboard',
      'resource_library'
    ]
  },
  admin: {
    name: 'admin',
    displayName: 'Administrator',
    color: 'red-500',
    routes: [
      '/users',
      '/content',
      '/analytics',
      '/settings',
      '/reports'
    ],
    features: [
      'user_management',
      'content_moderation',
      'platform_analytics',
      'system_configuration',
      'audit_logs'
    ]
  },
  corporate: {
    name: 'corporate',
    displayName: 'Corporate Client',
    color: 'blue-500',
    routes: [
      '/employees',
      '/programs',
      '/reports',
      '/billing',
      '/settings'
    ],
    features: [
      'employee_management',
      'wellness_programs',
      'corporate_reporting',
      'billing_management',
      'organization_settings'
    ]
  }
}

export function getRoleConfig(role: UserRole): RoleConfig {
  return roleConfigs[role]
}