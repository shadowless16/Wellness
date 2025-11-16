# Coding Standards - Wellness Platform

## CRITICAL RULES (Never Break These)

### 1. Multi-Role Architecture
- ALWAYS respect the 4-role structure: user, coach, admin, corporate
- NEVER mix role-specific logic in shared components
- ALWAYS place components in correct role directory

### 2. Next.js 16 + React 19 Standards
- Use App Router route groups: `(user)`, `(coach)`, `(admin)`, `(corporate)`
- Server components by default, client only when needed
- **CRITICAL**: Dynamic routes must use async params: `params: Promise<{ id: string }>`
- Always `await params` before accessing properties
- Separate interactive logic into client components when using hooks
- Use React 19 features appropriately
- Follow Next.js 16 best practices

### 3. TypeScript Requirements
- ALWAYS define interfaces for props
- NEVER use `any` type
- ALWAYS export types when shared
- Use strict TypeScript configuration

### 4. Component Structure
```typescript
// Server Component (default)
export default async function PageName({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <div>Content</div>
}

// Client Component (when hooks needed)
'use client'

import { useState } from 'react'

interface Props {
  // Always define props interface
}

export default function ComponentName({ prop }: Props) {
  const [state, setState] = useState()
  return <div>Content</div>
}
```

### 5. File Organization Rules
- Role-specific: `components/{role}/feature-name.tsx`
- Shared (2+ roles): `components/shared/feature-name.tsx`
- UI primitives: `components/ui/component-name.tsx`
- Never create files outside this structure

### 6. Styling Standards
- Tailwind CSS ONLY - no custom CSS except in globals.css
- **PRIMARY COLORS**: `oklch(0.70_0.15_50)` (orange), `oklch(0.65_0.15_130)` (teal)
- Apply colors consistently across pages, not dynamically per item
- Use opacity levels: 5%, 10%, 15%, 20%, 30%, 40%, 100%
- Role colors: red-500 (admin), blue-500 (corporate)
- Consistent spacing and typography

### 7. Import Standards
```typescript
// 1. React/Next imports
import { useState } from 'react'
import Link from 'next/link'

// 2. Internal imports (absolute paths)
import { getCurrentUser } from '@/lib/auth'
import { Button } from '@/components/ui/button'

// 3. External library imports
import { Heart } from 'lucide-react'
```

### 8. Minimal Code Principle
- Write ONLY what's needed for the requirement
- No over-engineering or premature optimization
- Remove unused imports and code
- Keep components focused and single-purpose

## Quality Checklist (Before Any Commit)

- [ ] Component in correct role directory
- [ ] TypeScript interfaces defined
- [ ] Imports organized correctly
- [ ] Only Tailwind CSS used
- [ ] No unused code
- [ ] Follows Next.js 16 patterns
- [ ] Respects multi-role architecture
- [ ] Dynamic routes use `await params`
- [ ] Consistent orange/teal colors applied
- [ ] Server/client components properly separated