import CoachNavbar from '@/components/coach/navbar'

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CoachNavbar />
      {children}
    </>
  )
}