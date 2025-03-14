import { useEffect, useState } from "react";

export function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('/movies.json')
            .then(response => response.json())
            .then(data => setMovies(Object.values(data)))
            .catch(error => console.error('Error fetching movies:', error))
    }, [])

    return (
        <div className="h-fit bg-black p-20" id="movies">
            <h1 className="text-white text-5xl text-center mb-20">MOVIES</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {movies.map((movie, index) => (
                    <a key={index} className="flex flex-col border-2 border-white text-white p-8 gap-4 h-120 hover:scale-105 transition delay-100 overflow-hidden justify-center" href="#">
                        <h1 className="text-4xl text-center mt-auto">{movie.title}</h1>
                        <p className="text-2xl text-gray-600 font-mono text-center">{movie.synopsis}</p>
                        <p className="text-center mt-auto">Coming Soon</p>
                    </a>
                ))}
            </div>
        </div>
    );
}