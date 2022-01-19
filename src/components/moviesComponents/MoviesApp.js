import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from "./movie/Movie";
import Navbar from "./navbar/Navbar";
import Paginator from './paginator/Paginator';
import './MoviesApp.css'

function MoviesApp() {
    const [Movies, setMovies] = useState([]);

    const getPage = async (page) => {
        const batch = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=" + page + "&fbclid=IwAR3I44DSstLqakp4_H5O6ZxkKBs2NcZ6KybWd7yfDkj4X4TlhWhNflfwRK8");
        setMovies(batch.data.results);
    }

    useEffect(() => {
        getPage(1)
    }, [])

    const handleClick = (page) => {
        console.log(page.selected + 1);
        getPage(page.selected + 1);
    }

    return (
        <div className="MoviesApp">
            <Navbar />
            <div>
                <Paginator
                    changePage={getPage}
                />
                <div>
                    {Movies.map((element, index) => {
                        return (
                            <Movie
                                key={index}
                                title={element.title}
                                rating={element.vote_average}
                                overview={element.overview}
                                img={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + element.poster_path}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default MoviesApp
