import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function MoviePage(props) {
    let { id } = useParams();
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=59b9a72d10ad92f2da1880fa1f6d7571&language=en-US&append_to_response=videos`;
    let bgBase = 'https://image.tmdb.org/t/p/w1280';
    let imgBase = 'https://image.tmdb.org/t/p/w342';
    let [movie, setMovie] = useState([]);
    let [loading, setLoading] = useState(true);

    async function getData() {
        let response = await fetch(url);
        let data = await response.json();
        setMovie(data);
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, [loading]);

    return (
        <div className="movie-page">
            {movie.length === 0 && <div className="loading">Loading...</div>}
            {movie.length !== 0 &&
                <div className="container-movie">
                    <img src={bgBase + movie.backdrop_path} className="movie-backdrop" alt="Backdrop" />
                    <div className="container-poster">
                        <img src={imgBase + movie.poster_path} className="movie-poster" alt="Poster" />
                    </div>
                    <div className="container-details">
                        <p className="movie-title-page">{movie.title}</p>
                        <p className="tagline">{movie.tagline}</p>
                        <p className="overview">{movie.overview}</p>
                        <div className="container-genres">
                            {movie.genres.map((el) => <p key={movie.title + el.name} className="genres">{el.name}</p>)}
                        </div>
                        <a href={'https://www.youtube.com/watch?v=' + movie.videos.results[0].key}><button className="button-trailer">▶ &nbsp; Watch Trailer</button></a>
                    </div>
                </div>}
        </div>

    )
}

export default MoviePage;