import CorporateNavbar from '@/components/corporate/navbar'

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CorporateNavbar />
      {children}
    </>
  )
}