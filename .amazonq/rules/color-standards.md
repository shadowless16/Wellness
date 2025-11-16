# Color Standards - Wellness Platform

## Primary Color Palette

### Orange/Warm Colors (Primary Brand)
- **Primary Orange**: `oklch(0.70 0.15 50)` - Main brand color
- **Orange Light**: `oklch(0.75 0.12 50)` - Lighter variant
- **Orange Dark**: `oklch(0.65 0.18 50)` - Darker variant

### Teal/Green Colors (Secondary Brand)
- **Primary Teal**: `oklch(0.65 0.15 130)` - Secondary brand color
- **Teal Light**: `oklch(0.70 0.12 130)` - Lighter variant
- **Teal Dark**: `oklch(0.60 0.18 130)` - Darker variant

## Standardized Usage Rules

### 1. Primary Actions & CTAs
**ALWAYS use Primary Orange for:**
- Main action buttons (Submit, Save, Continue)
- Primary navigation active states
- Important notifications
- Progress indicators at completion

```tsx
// ✅ Correct
<button className="bg-[oklch(0.70_0.15_50)] text-white">
  Primary Action
</button>

// ❌ Avoid
<button className="bg-orange-500 text-white">
  Primary Action
</button>
```

### 2. Secondary Actions & Accents
**Use Primary Teal for:**
- Secondary buttons (Cancel, Back, Edit)
- Icons and decorative elements
- Secondary navigation
- Complementary UI elements

### 3. Background Integration Levels

#### Level 1: Subtle (5-10% opacity)
For large background areas and cards:
```tsx
className="bg-[oklch(0.70_0.15_50)]/5"  // Very subtle
className="bg-[oklch(0.70_0.15_50)]/10" // Light background
```

#### Level 2: Moderate (15-20% opacity)
For highlighted sections and hover states:
```tsx
className="bg-[oklch(0.70_0.15_50)]/15" // Highlighted sections
className="bg-[oklch(0.70_0.15_50)]/20" // Hover states
```

#### Level 3: Strong (30-40% opacity)
For badges, tags, and emphasis:
```tsx
className="bg-[oklch(0.70_0.15_50)]/30" // Badges
className="bg-[oklch(0.70_0.15_50)]/40" // Strong emphasis
```

#### Level 4: Solid (100% opacity)
For buttons and primary elements:
```tsx
className="bg-[oklch(0.70_0.15_50)]" // Solid buttons
className="text-[oklch(0.70_0.15_50)]" // Text emphasis
```

### 4. Gradient Standards

#### Primary Gradient (Orange to Teal)
```tsx
className="bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)]"
```

#### Subtle Background Gradient
```tsx
className="bg-gradient-to-br from-[oklch(0.70_0.15_50)]/10 to-[oklch(0.65_0.15_130)]/5"
```

### 5. Page-Specific Integration

#### Dashboard Pages
- Hero sections: Level 1 backgrounds
- Action cards: Level 2 backgrounds
- Primary CTAs: Level 4 solid

#### Detail Pages (Mood, Programs, etc.)
- Main content cards: Level 1-2 backgrounds
- Progress bars: Primary gradient
- Action buttons: Level 4 solid

#### List/Grid Pages
- Item cards: Level 1 backgrounds
- Hover states: Level 2 backgrounds
- Active states: Level 3 backgrounds

### 6. Component-Specific Rules

#### Buttons
```tsx
// Primary
className="bg-[oklch(0.70_0.15_50)] text-white hover:bg-[oklch(0.65_0.18_50)]"

// Secondary
className="bg-[oklch(0.70_0.15_50)]/10 text-[oklch(0.70_0.15_50)] hover:bg-[oklch(0.70_0.15_50)]/20"

// Ghost
className="text-[oklch(0.70_0.15_50)] hover:bg-[oklch(0.70_0.15_50)]/10"
```

#### Cards
```tsx
// Standard card
className="bg-white border border-[oklch(0.70_0.15_50)]/20"

// Highlighted card
className="bg-gradient-to-br from-[oklch(0.70_0.15_50)]/10 to-[oklch(0.70_0.15_50)]/5"

// Active card
className="bg-[oklch(0.70_0.15_50)]/15 border-[oklch(0.70_0.15_50)]/30"
```

#### Navigation
```tsx
// Active nav item
className="bg-gradient-to-r from-[oklch(0.70_0.15_50)]/15 to-[oklch(0.65_0.15_130)]/10 text-[oklch(0.70_0.15_50)]"

// Hover nav item
className="hover:bg-[oklch(0.70_0.15_50)]/10"
```

#### Progress & Status
```tsx
// Progress bar
className="bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)]"

// Success state
className="text-[oklch(0.65_0.15_130)]"

// Warning state
className="text-[oklch(0.70_0.15_50)]"
```

### 7. Accessibility Standards

#### Contrast Requirements
- Text on orange backgrounds: Use white or very dark text
- Orange text: Only on white or very light backgrounds
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text

#### Focus States
```tsx
className="focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
```

### 8. Forbidden Practices

❌ **Never use:**
- Random orange values (orange-500, #ff6b35, etc.)
- Inconsistent opacity levels
- Orange on orange combinations
- Orange text on colored backgrounds without contrast check

✅ **Always use:**
- Defined oklch values
- Consistent opacity levels (5%, 10%, 15%, 20%, 30%, 40%, 100%)
- Proper contrast ratios
- Semantic color usage

### 9. Quick Reference

#### Most Common Classes
```tsx
// Backgrounds
"bg-[oklch(0.70_0.15_50)]/5"   // Subtle
"bg-[oklch(0.70_0.15_50)]/15"  // Moderate
"bg-[oklch(0.70_0.15_50)]"     // Solid

// Text
"text-[oklch(0.70_0.15_50)]"   // Orange text
"text-[oklch(0.65_0.15_130)]"  // Teal text

// Borders
"border-[oklch(0.70_0.15_50)]/20"  // Subtle border
"border-[oklch(0.70_0.15_50)]"     // Solid border

// Gradients
"bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)]"
```

## Implementation Checklist

- [ ] Use only defined oklch color values
- [ ] Follow opacity level standards (5%, 10%, 15%, 20%, 30%, 40%, 100%)
- [ ] Ensure proper contrast ratios
- [ ] Use semantic color application
- [ ] Test in both light and dark modes
- [ ] Validate accessibility compliance

**Remember: Consistency creates trust. Every orange element should feel intentional and part of the cohesive brand experience.**