function Search() {
    return (
        <div className="w-full flex justify-center">
            <input 
                type="text" 
                name="search" 
                id="search" 
                autoComplete="off" 
                className="px-3 mt-10 w-4/5 h-12 rounded-xl bg-lightgray shadow-lg text-primarybg placeholder-primarybg placeholder-opacity-50" 
                placeholder="ISBN, Book or something else.." 
            />
        </div>
        
    )
}

export default Search;