
export default function Landing() {
    return (
        <div className="relative h-1/5 sm:h-1/4 md:h-1/3 lg:h-1/2">
            <div className="absolute w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center text-gray-200 text-6xl md:text-8xl font-extrabold space-y-3">
                <h3 className="text-2xl font-medium">citation. made easy.</h3>
                <h1>PRETTYCITE</h1>
                <h6 className="text-sm font-light">
                    <a href="https://github.com/lucastanger/prettycite" target="_blank" rel="noreferrer" className="text-indigo-400">prettycite&nbsp;</a> 
                        created with&nbsp;<span className="text-indigo-900">&hearts;</span>&nbsp;by 
                    <a href="https://github.com/lucastanger" target="_blank" rel="noreferrer" className="text-indigo-400">&nbsp;lucastanger</a>
                </h6>
            </div>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520467795206-62e33627e6ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="image of a book"/>
            <div className="absolute right-0 bottom-0">
                <a className="text-gray-50 text-sm opacity-20" href="https://unsplash.com/photos/MiJTU6lqksg" target="_blank">&copy;</a>
            </div>
        </div>
    )
}