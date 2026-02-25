import { Link } from "react-router-dom"


export default function MovieCard({ movie }) {

    return (
        < div className="card border border-3 col-3 border-primary-subtle bg-secondary-subtle" >
            <figure className="my-figure">
                <img src={movie.image} alt={movie.title} />
            </figure>
            <figcaption>
                <h2>{movie.title}</h2>
                <h4>{movie.abstract}</h4>
            </figcaption>
            <Link to={`movies/${movie.id}`}>
                <button className="btn btn-primary">Vai al dettaglio</button>
            </Link>
        </div>
    )

}