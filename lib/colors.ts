/**
 * Standardized Color System for Wellness Platform
 * Use these constants for consistent color application
 */

// Primary Brand Colors
export const COLORS = {
  // Orange (Primary Brand)
  orange: {
    solid: 'oklch(0.70 0.15 50)',
    light: 'oklch(0.75 0.12 50)',
    dark: 'oklch(0.65 0.18 50)',
  },
  
  // Teal (Secondary Brand)
  teal: {
    solid: 'oklch(0.65 0.15 130)',
    light: 'oklch(0.70 0.12 130)',
    dark: 'oklch(0.60 0.18 130)',
  }
} as const

// Standardized Opacity Levels
export const OPACITY = {
  subtle: '5',      // Large backgrounds
  light: '10',      // Card backgrounds
  moderate: '15',   // Highlighted sections
  medium: '20',     // Hover states
  strong: '30',     // Badges, emphasis
  bold: '40',       // Strong emphasis
  solid: '100',     // Buttons, primary elements
} as const

// Pre-built Class Combinations
export const COLOR_CLASSES = {
  // Buttons
  button: {
    primary: `bg-[${COLORS.orange.solid}] text-white hover:bg-[${COLORS.orange.dark}]`,
    secondary: `bg-[${COLORS.orange.solid}]/${OPACITY.light} text-[${COLORS.orange.solid}] hover:bg-[${COLORS.orange.solid}]/${OPACITY.medium}`,
    ghost: `text-[${COLORS.orange.solid}] hover:bg-[${COLORS.orange.solid}]/${OPACITY.light}`,
  },
  
  // Backgrounds
  background: {
    subtle: `bg-[${COLORS.orange.solid}]/${OPACITY.subtle}`,
    light: `bg-[${COLORS.orange.solid}]/${OPACITY.light}`,
    moderate: `bg-[${COLORS.orange.solid}]/${OPACITY.moderate}`,
    gradient: `bg-gradient-to-r from-[${COLORS.orange.solid}] to-[${COLORS.teal.solid}]`,
    gradientSubtle: `bg-gradient-to-br from-[${COLORS.orange.solid}]/${OPACITY.light} to-[${COLORS.teal.solid}]/${OPACITY.subtle}`,
  },
  
  // Cards
  card: {
    standard: `bg-white border border-[${COLORS.orange.solid}]/${OPACITY.medium}`,
    highlighted: `bg-gradient-to-br from-[${COLORS.orange.solid}]/${OPACITY.light} to-[${COLORS.orange.solid}]/${OPACITY.subtle}`,
    active: `bg-[${COLORS.orange.solid}]/${OPACITY.moderate} border-[${COLORS.orange.solid}]/${OPACITY.strong}`,
  },
  
  // Navigation
  nav: {
    active: `bg-gradient-to-r from-[${COLORS.orange.solid}]/${OPACITY.moderate} to-[${COLORS.teal.solid}]/${OPACITY.light} text-[${COLORS.orange.solid}]`,
    hover: `hover:bg-[${COLORS.orange.solid}]/${OPACITY.light}`,
  },
  
  // Text
  text: {
    primary: `text-[${COLORS.orange.solid}]`,
    secondary: `text-[${COLORS.teal.solid}]`,
  },
  
  // Borders
  border: {
    subtle: `border-[${COLORS.orange.solid}]/${OPACITY.medium}`,
    solid: `border-[${COLORS.orange.solid}]`,
  },
  
  // Focus States
  focus: `focus:ring-2 focus:ring-[${COLORS.orange.solid}]/${OPACITY.strong} focus:border-[${COLORS.orange.solid}]`,
} as const

// Helper function to create custom opacity
export const withOpacity = (color: string, opacity: string) => `${color}/${opacity}`

// Helper function to create gradients
export const createGradient = (from: string, to: string, direction = 'to-r') => 
  `bg-gradient-${direction} from-[${from}] to-[${to}]`