import '../../globals.css'
export default async function RootLayout({ children, params }) {
  return (
    // <div className="flex h-screen flex-col ">
    <div className='bg-gradient-to-r from-slate-50 to-slate-200 min-h-screen' >
      <main >{children}</main>
    {/* // </div> */}
    </div>
  )
}
