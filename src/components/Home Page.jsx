import MovieCard from "./Movie Card";
import { useEffect, useState } from "react";

function HomePage(props) {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    let imgBase = 'http://image.tmdb.org/t/p/w342';

    async function getData() {
        let response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=59b9a72d10ad92f2da1880fa1f6d7571`);
        let data = await response.json();
        setData(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        getData();
    }, [loading]);

    return (
        <div className="container-all">
            {data.length === 0 && <h1 className="loading">Loading...</h1>}
            {data.length !== 0 &&
                <div className="home">
                    <h1 className="header">Trending Movies</h1>
                    <div className="container-movies">
                        {data.map((el, idx) => <MovieCard key={el.id} imgsrc={imgBase + el.poster_path} overview={el.overview} title={el.title} id={el.id} rating={el.vote_average} />)}
                    </div>
                </div>
            }
        </div>
    )
}

export default HomePage;