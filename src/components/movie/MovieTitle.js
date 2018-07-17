import  React from 'react'

import './css/MovieTitle.css'

export const MovieTitle = (props) => {
    return (
        <div className="movie-title">
            <h1>{props.title}
                <h2 className="year">
                {props.date}
                </h2>
            </h1>
        </div>
    )
}
 