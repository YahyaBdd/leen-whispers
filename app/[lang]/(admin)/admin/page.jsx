import { UserAuthForm } from "./components/user-auth-form"

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                To access the admin dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your admin credentials below 
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  )
}