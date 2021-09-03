export default function Search() {

    let active = "url";

    return (
        <div className="w-3/4 mx-auto mt-20 max-w-lg space-y-5">
            <div className="flex items-center justify-center space-x-10 uppercase">
                <a className="underline text-indigo-800">url</a>
                <a className="">isbn</a>
                <a className="">title</a>
                <a className="">doi</a>
            </div>
            <div className="relative text-gray-700">
                <input 
                    className="w-full h-10 pl-3 pr-8 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-gray-300" 
                    type="text" placeholder="http://prettycite.vercel.app"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400 font-extralight">
                    ⌘ + V
                </div>
            </div>
        </div>
    )
}