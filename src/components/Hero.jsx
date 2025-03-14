export function Hero() {
    return (
        <div className="flex h-screen bg-black items-center p-20">
            <div className="flex flex-col w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl text-white mb-10">The Rental Store</h1>
                <p className="text-2xl text-gray-600 font-mono mb-20">Welcome and feel free to browse the shelves that houses the macabre.</p>
                <a className="hover:bg-white text-3xl text-white hover:text-black w-fit border-2 border-white py-2 px-10" href="#movies">Browse Movies</a>
            </div>
        </div>
    )
}