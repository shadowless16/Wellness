# Wellness Platform - Project Guardrails

## Technology Stack
- **Next.js**: 16.0.3 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.1.9
- **UI Components**: Radix UI + shadcn/ui

## Architecture Rules

### 1. Multi-Role Structure (MANDATORY)
```
app/
├── user/           # Individual wellness users
├── coach/          # Coaches/trainers  
├── admin/          # Platform administrators
├── corporate/      # Corporate clients
└── auth/             # Shared authentication
```

### 2. Component Organization (MANDATORY)
```
components/
├── user/             # User-specific components
├── coach/            # Coach-specific components
├── admin/            # Admin-specific components
├── corporate/        # Corporate-specific components
├── shared/           # Cross-role shared components
└── ui/               # Base UI components (shadcn/ui)
```

### 3. Code Standards (ENFORCE STRICTLY)

#### File Naming
- Use kebab-case for files: `user-dashboard.tsx`
- Use PascalCase for components: `UserDashboard`
- Use camelCase for functions: `getCurrentUser`

#### Component Structure
- Always use TypeScript interfaces
- Export default for main component
- Use 'use client' only when needed
- Minimal imports - only what's used

#### Styling
- Use Tailwind CSS classes only
- Custom CSS variables defined in globals.css
- Consistent color scheme: warm-teal, warm-beige
- Role-specific colors: red-500 (admin), blue-500 (corporate)

### 4. Role-Based Development (CRITICAL)

#### When adding features:
1. Identify which role(s) need the feature
2. Place in appropriate role directory
3. Use role-specific navigation
4. Respect role permissions

#### Shared Components Rules:
- Only create in `components/shared/` if used by 2+ roles
- Otherwise keep role-specific

### 5. Next.js 16 Best Practices

#### App Router Usage:
- Use route groups: `(role)`
- Server components by default
- Client components only when needed
- Proper loading.tsx and error.tsx files

#### Performance:
- Dynamic imports for heavy components
- Optimize images with next/image
- Use React 19 features appropriately

### 6. Development Workflow (MANDATORY)

#### Before any code changes:
1. Identify target role(s)
2. Check existing structure
3. Follow minimal code principle
4. Test across roles

#### File Creation Priority:
1. Check if component exists in shared/
2. If role-specific, place in role directory
3. If cross-role, place in shared/
4. Update relevant layouts/navbars

### 7. Forbidden Practices (NEVER DO)

- ❌ Mix role-specific code in shared components
- ❌ Create components outside the role structure
- ❌ Use inline styles instead of Tailwind
- ❌ Add unnecessary dependencies
- ❌ Create verbose implementations
- ❌ Ignore TypeScript errors
- ❌ Use outdated Next.js patterns

### 8. Required Patterns (ALWAYS USE)

#### Authentication:
```typescript
import { getCurrentUser, UserRole } from '@/lib/auth'
```

#### Role Configuration:
```typescript
import { getRoleConfig } from '@/config/roles'
```

#### Component Props:
```typescript
interface ComponentProps {
  // Always define interfaces
}
```

### 9. Testing Strategy
- Test each role independently
- Verify role-based routing works
- Check component isolation
- Validate permissions

### 10. Documentation Requirements
- Update ARCHITECTURE.md for major changes
- Comment complex role logic
- Document new role features
- Keep README current

## Emergency Contacts
- Architecture questions: Refer to ARCHITECTURE.md
- Role conflicts: Check config/roles.ts
- Component placement: Follow component organization rules

**REMEMBER: This is a MULTI-ROLE platform. Every decision must consider all 4 user journeys.**