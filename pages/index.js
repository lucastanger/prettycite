import Head from 'next/head'
import Footer from './footer'
import Search from './search'
import Nav from './nav'
import Landing from './landing'

export default function Home() {
  return (
    <div className="h-screen w-screen ">
      <Nav />
      <Landing />
    </div>
  )
}
