import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewSection from "./ReviewSection";

const endpoint = import.meta.env.VITE_ENDPOINT;

export default function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios.get(`${endpoint}/movies/${id}`)
            .then(response => {
                setMovie(response.data)
            })
            .catch(err => {
                console.error(err, "Non è stato possibile eseguire la richiesta di dettaglio")
            })
    }, [id])

    return (
        // CARD FILM 
        <>
            <div className="container d-flex justify-content-center">
                <div className="card col-6 align-self-start">
                    <figure>
                        <img src={movie.image} className="w-100" alt={movie.title} />
                    </figure>
                    <figcaption>
                        <p className="fs-2">{movie.abstract}</p>
                    </figcaption>
                </div>
            </div>

            <div className="reviews card border-primary ps-4 mt-5">
                <ReviewSection key={movie.id} reviews={movie.reviews} />
            </div>
        </>
    )
}