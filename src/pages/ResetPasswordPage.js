import React from 'react'
import ResetPassword from '../components/Login/ResetPassword'
import Hero from '../components/Hero'
import loginBcg from '../images/loginBcg.png'

export default function ResetPasswordPage() {
  return (
    <>
      <Hero img={loginBcg} />
      <ResetPassword/>
    </>
  )
}