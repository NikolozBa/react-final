import React from 'react'
import './Movie.css'

function Movie(props) {
    return (
        <div className="Movie">
            <div>
                <img src={props.img} />
            </div>
            <div>
                <p>{props.title}</p>
                <p>{props.rating}/10</p>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}

export default Movie
