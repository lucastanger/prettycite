import Head from 'next/head'
import Footer from './footer'
import Search from './search'

export default function Home() {
  return (
    <div className="bg-primarybg h-screen">
        <header className="flex flex-col justify-center items-center">
        {/* <img src={logo} className="w-1/3 max-w-40 md:max-w-xs mt-12" alt="logo" /> */}
        <h3 className="text-secondarybg font-light text-xl md:text-3xl mt-10">
          citation. made easy.
        </h3>
        <Search />
      </header>

      <Footer />
    </div>
  )
}
