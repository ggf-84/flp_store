import React from 'react'
import SignUp from '../components/Login/SignUp'
import Hero from '../components/Hero'
import loginBcg from '../images/loginBcg.png'

export default function SignUpPage() {
  return (
    <>
    <Hero img={loginBcg}/>
      <SignUp/>
    </>
  )
}