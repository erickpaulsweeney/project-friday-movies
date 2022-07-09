import { Link } from "react-router-dom";

function MovieCard(props) {
    return (
        <Link to={`/movies/${props.id}`}>
            <div className="movie-card">
                <img src={props.imgsrc} className="poster" alt="" />
                <div className="movie-details">
                    <p className="movie-title">{props.title}</p>
                    <p className="movie-description">{props.overview}</p>
                    <p className="movie-rating">{(props.rating.toFixed(1))}</p>
                </div>
            </div>
        </Link>

    )
}

export default MovieCard;