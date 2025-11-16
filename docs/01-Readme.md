# Wellness Platform - Project Documentation

## Conversation Summary

- **Project Setup**: Established multi-role wellness platform architecture with 4 user journeys: User, Coach, Admin, Corporate
- **Brand Colors**: Updated entire platform to use Winbox logo colors (vibrant green and orange) with Naira currency
- **User Journey Implementation**: Built complete user onboarding flow including registration, personalization, course browsing, learning experience, and certification
- **Coach Registration System**: Created comprehensive coach registration and verification workflow with document upload and admin approval

## Files and Code Summary

### Architecture Structure
- **app/ structure**: Organized with role-based route groups - `user/`, `coach/`, `admin/`, `corporate/` and `auth/`
- **components/ structure**: Role-specific components in `user/`, `coach/`, `admin/`, `corporate/`, `shared/`, and `ui/` directories
- **.amazonq/rules/**: Project guardrails and coding standards for Next.js 16 + React 19 + TypeScript

### User Features
- **app/user/programs/**: Course library with CBT, Resilience, Trauma, Relationships categories, Naira pricing
- **app/user/programs/[id]/**: Learning experience with video/audio modules, reflection prompts, coach messaging
- **app/user/programs/[id]/completion/**: Quiz/reflection system with certificate generation

### Coach & Admin Features
- **app/auth/coach-register/**: 3-step coach registration with credentials upload
- **app/admin/coaches/**: Admin interface for coach verification and approval

## Key Insights

### Technical Architecture
- **Architecture**: Multi-role platform using Next.js 16 route groups for clean separation of user journeys
- **Brand Identity**: Winbox colors (`oklch(0.70_0.15_50)` orange, `oklch(0.65_0.15_130)` green) applied consistently
- **Currency**: All pricing converted to Nigerian Naira (₦15,000-₦45,000 for courses, ₦15,000-₦18,000 for coaching)

### User Experience
- **Learning Flow**: Complete educational journey from enrollment through certification with reflection prompts
- **Coach Onboarding**: Professional verification system with document upload and admin approval workflow
- **Navigation**: Fixed routing issues to use proper `/user/` prefixed paths throughout

## Most Recent Topic

**Topic**: Coach Registration & Verification System

**Progress**: Implemented complete coach onboarding workflow with registration, document verification, and admin approval

**Tools Used**:
- **executeBash**: Created directory structure for coach registration and admin verification pages
- **fsWrite**: Built 3-step coach registration form with personal info, professional details, and document upload sections
- **fsWrite**: Created verification pending page showing application status and timeline
- **fsWrite**: Built admin coach verification interface with application review, document viewing, and approve/reject functionality
- **fsReplace**: Added coach registration link to login page for easy access



Hello Sir, I have worked on everything  for the user. From the onboarding to the Personalization  screen so you can check and click and register and you see the whole onboarding process. 

And I have also done the sign up for the admin corporate and coach. So it is just the sign up and this is what I have done for now. So I want you to look at it and let me know if that is working before I continue the user experience. 

On the other three pages. Apart from that I have done the rest that are neeeded and I have also changed the color.It just remains the adding of the UI UX to it. So I just want you to take a look at it and see if this is working before I continue.