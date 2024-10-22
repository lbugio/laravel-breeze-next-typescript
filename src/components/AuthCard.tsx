import React, { ReactNode } from 'react'

type Props = {
  logo: ReactNode
  children: ReactNode
}

const AuthCard = ({ logo, children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div>{logo}</div>

      <div>
        {children}
      </div>
    </div>
  )
}

export default AuthCard
