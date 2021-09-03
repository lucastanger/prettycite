export default function APIArticle(props) {
    return (
        <article className={`p-4 space-x-4 ${(props.first) ? "flex" : "hidden sm:flex"}`}>
            <img 
                src={props.img} 
                loading="lazy" alt="example book" width="144" height="144" className="flex-none w-16 h-16 rounded-lg object-cover bg-gray-100 dark:bg-gray-900" />
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                    <h2 className="text-base sm:text-lg lg:text-base xl:text-lg font-semibold text-black dark:text-indigo-50 mb-0.5 truncate">
                        {props.title}
                    </h2>
                    <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                        <div className="absolute top-0 right-0 rounded-full bg-indigo-50 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                            <dt className="text-indigo-500 dark:text-indigo-100">
                                <span className="sr-only">Rating</span>
                                <svg width="16" height="20" fill="currentColor"><path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path></svg>
                            </dt>
                            <dd>{props.rating}</dd>
                        </div>
                        <div className="dark:text-indigo-300">
                            <dt className="sr-only">Publisher</dt>
                            <dd>
                                <abbr title={props.publisher}>
                                    {props.publisher}
                                </abbr>
                            </dd>
                        </div>
                        <div className="space-x-2 dark:text-indigo-300">
                            <dt className="sr-only">ISBN</dt>
                            <dd>
                                {props.ISBN}
                            </dd>
                        </div>
                        <div className="flex-none w-full mt-0.5 font-normal space-x-1 dark:text-indigo-300">
                            <dt className="inline">By</dt>
                            <dd className="inline text-black dark:text-indigo-50">{props.author}</dd>
                        </div>
                    </dl>
                </div>
        </article>
    )
}