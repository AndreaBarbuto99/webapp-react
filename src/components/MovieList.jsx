import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "./MovieCard";

const endpoint = import.meta.env.VITE_ENDPOINT

export default function MovieList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`${endpoint}/movies`)
            .then(response => {
                setMovies(response.data)
            })
            .catch(err => {
                console.error(err, "Non è stato possibile eseguire la richiesta");
            })
    }, [])


    return (
        <>
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </>
    )
}