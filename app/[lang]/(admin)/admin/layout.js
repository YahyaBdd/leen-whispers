import '../../globals.css'
export default async function RootLayout({ children, params }) {
  return (
    <div className="flex h-screen flex-col ">
      {/* {children} */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
