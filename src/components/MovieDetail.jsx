import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const endpoint = import.meta.env.VITE_ENDPOINT;

export default function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(`${endpoint}/movies/${id}`)
            .then(response => {
                setMovie(response.data)
            })
            .catch(err => {
                console.error(err, "Non è stato possibile eseguire la richiesta di dettaglio")
            })
    })

    return (
        // CARD FILM 
        <div className="container">
            <div className="card col-6">
                <figure>
                    <img src={`${import.meta.env.VITE_ENDPOINT}/imgs/${movie.image}`} alt={movie.title} />
                </figure>
                <figcaption>
                    <p>{movie.abstract}</p>
                </figcaption>
            </div>

            <div className="reviews mt-5">

                {movie.reviews.map(review => (
                    <div key={review.id}>
                        <h6>{review.name}</h6>
                        <strong>Vote:</strong><span> {review.vote}</span>
                        <p>{review.text}</p>

                    </div>
                ))}

            </div>
        </div>
    )
}