import APIArticle from "./api-article";
import Nav from "./nav";

export default function LetsBegin() {
    return (
        <div className=" dark:bg-gray-800 pb-20">
            <Nav />
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 mt-5 text-gray-500 dark:text-gray-300 overflow-hidden sm:overflow-visible">
                <section id="api">
                    <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
                        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-indigo-500 mb-3">state-of-the-art</h2>
                        <p className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 dark:text-gray-500 tracking-tight mb-8">Want to use our API?</p>
                        <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="grid GradientLockup_root__sBkgs">
                        <div className="col-start-2 col-end-3 lg:col-start-1 lg:col-end-5 row-start-1 row-end-4 lg:row-end-5 lg:py-10 xl:py-6 flex -mr-8 pl-4 sm:mr-0 sm:pl-0">
                            <div className="bg-gray-100 dark:bg-gray-500 w-full flex-none rounded-3xl"></div>
                            <div className="w-full flex -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-indigo-400 to-purple-500 -rotate-1 sm:-rotate-2"></div>
                        </div>
                        <div className="relative col-start-2 col-end-3 lg:col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center pl-8 sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0">
                            <div className="relative z-10 bg-white dark:bg-gray-700 rounded-tl-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 divide-y divide-gray-100 dark:divide-gray-900">
                                <nav className="p-4 text-sm font-medium">
                                    <input type="text" value="GET https://prettycite.vercel.app/api/v1/cite" readOnly className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 cursor-pointer py-2 px-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                                </nav>
                                <APIArticle first="true"
                                    img="https://books.google.com/books/publisher/content?id=uNDaDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71zTUOCiQAQrwcIUJcDIqvd32MeQrae_kGurpg0_yHtKJ4fJKAf3qKrbp5tEh9Q8ACphTPto9WbpLFrEe_GPzrWFLuL0F_ZvnzevUp92N9vbIqq_aJjedGGd6z9O92X0ihgge_A&source=gbs_api"
                                    title="Building React Apps with Server-Side Rendering"
                                    rating="3.9"
                                    publisher="Apress (New York)"
                                    ISBN="978-1-484-25869-9"
                                    author="Mohit Thakkar"
                                 />
                                <APIArticle img="https://books.google.com/books/publisher/content?id=5kZsDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70NZmGLcN7V7Fe_PtvfrR_URPaZ3ylJCJo5rakClB83_4Pbih7AeqHBqx45FnHQt3cCiVZu7U2rd9b0_JnVPttDXM1eSyzMgdrqDfx2HcGW3NeA3jLtHHVl9WqU_cAH2R2EwhDt&source=gbs_api"
                                    title="React Cookbook"
                                    rating="4.9"
                                    publisher="Packt Publishing Ltd (Birmingham)"
                                    ISBN="	978-1-785-28259-1"
                                    author="Carlos Santana Roldán"
                                />
                                <APIArticle img="https://books.google.com/books/publisher/content?id=0MTSDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72QTgCET3I3OHtQE2EIDVFh9IQdOWOSw-9Nc5KrvavPip4-ZgNBlgbXx6XqMVSSbMukuHHcL0-jRyP78q5fX9qRu8fodPFFkkGRuA8Gw3jlSJE1PsJ4mTUo_utl2zBN1nhUQtNB&source=gbs_api"
                                    title="Advanced Web Development with React"
                                    rating="3.2"
                                    publisher="BPB Publications"
                                    ISBN="978-9-389-42359-4"
                                    author="Mehul Mohan"
                                />
                            </div>
                        </div>
                        <div className="relative w-full lg:w-auto col-start-1 col-end-4 md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 row-start-3 row-end-4 lg:row-start-1 lg:row-end-5 self-center pb-8 lg:pb-0">
                            <div className="relative overflow-hidden md:rounded-xl shadow-2xl flex bg-indigo-500">
                                <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                                <div className="relative w-full flex flex-col">
                                    <div className="flex-none h-11 flex items-center px-4">
                                        <div className="flex space-x-1.5">
                                            <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                                            <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
                                            <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                                        </div>
                                    </div>
                                    <div className="relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col">
                                        <div className="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25" style={{width: "50px"}}></div>
                                        <div className="flex-none relative bg-indigo-100 overflow-auto whitespace-nowrap">
                                            <div aria-hidden="true" className="absolute top-0 left-0 flex text-sm font-medium text-transparent pointer-events-none select-none">
                                                <div className="flex-none relative py-2 px-4 border border-transparent" style={{transformOrigin: "50% 50% 0px"}}></div>"Recipes.js"
                                            </div>
                                        </div>
                                        <div className="w-full flex-auto flex min-h-0">
                                            <div className="w-full flex-auto flex min-h-0 overflow-auto">
                                                <div className="w-full relative flex-auto">
                                                    <pre className="flex min-h-full text-xs md:text-sm">
                                                        <div aria-hidden="true" className="hidden md:block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none" style={{width: "50px"}}>
                                                            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20<br />21<br />22
                                                        </div>
                                                        <code className="flex-auto relative block text-white pt-4 pb-4 px-4 overflow-auto">
                                                            <span className="block">{'{'}</span>
                                                            <span className="">&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"requestUUID"</span>:&nbsp;<span className="text-blue-400">"915c7b17-0f27-4047-8bb0-746732dcb968"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"books"</span>:<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;</span>{'['}<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{'{'}<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"title"</span>:&nbsp;<span className="text-blue-400">"Building React Apps with Server-Side Rendering"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"rating"</span>:&nbsp;<span className="text-blue-400">"3.9"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"publisher"</span>:&nbsp;<span className="text-blue-400">"Apress (New York)"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"ISBN"</span>:&nbsp;<span className="text-blue-400">"978-1-484-25869-9"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"author"</span>:&nbsp;<span className="text-blue-400">"Mohit Thakkar"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{'},'}<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{'{'}<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"title"</span>:&nbsp;<span className="text-blue-400">"React Cookbook"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"rating"</span>:&nbsp;<span className="text-blue-400">"4.9"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"publisher"</span>:&nbsp;<span className="text-blue-400">"Packt Publishing Ltd (Birmingham)"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"ISBN"</span>:&nbsp;<span className="text-blue-400">"978-1-785-28259-1"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-yellow-400">"author"</span>:&nbsp;<span className="text-blue-400">"Carlos Santana Roldán"</span>,<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{'}'}<br/>
                                                            <span className="">&nbsp;&nbsp;&nbsp;&nbsp;</span>{']'}<br/>
                                                            <span className="block">{'}'}</span>

                                                        </code>
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}