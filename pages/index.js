import Nav from './nav'
import Landing from './landing' 
import Search from './search'

export default function Home() {
  return (
    <div className="h-screen w-screen dark:bg-gray-800">
      <Nav />
      <Landing />
      <Search />
    </div>
  )
}
