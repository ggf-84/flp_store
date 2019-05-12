import React from 'react'
import Login from '../components/Login/Login'
import Hero from '../components/Hero'
import loginBcg from '../images/loginBcg.png'

export default function LoginPage() {
  return (
    <>
      <Hero img={loginBcg} />
      <Login/>
    </>
  )
}