import UserNavbar from '@/components/user/wellness/navbar-new'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <UserNavbar />
      {children}
    </>
  )
}