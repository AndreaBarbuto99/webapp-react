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
            <div className="container">
                <div className="card col-6">
                    <figure>
                        <img src={movie.image} alt={movie.title} />
                    </figure>
                    <figcaption>
                        <p>{movie.abstract}</p>
                    </figcaption>
                </div>
            </div>

            <div className="reviews">
                <ReviewSection key={movie.id} reviews={movie.reviews} />
            </div>
        </>
    )
}