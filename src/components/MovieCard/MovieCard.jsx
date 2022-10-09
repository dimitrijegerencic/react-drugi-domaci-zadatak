import React from "react";
import './MovieCard.css';

const MovieCard = ({
                       title,
                       genre,
                       year,
                       image,
                       actors
}) => {

    return (
        <div className={'movie-card'}>
            <div className={'card'} id={'user-card'}>
                <div className={'card-img'}>
                    <img className={'card-img-top'} src={image}
                         alt="Movie poster" height="400px" width="50px"/>
                </div>
                <div className={'card-body'}>
                    <div>
                        <div className={'row'}>
                            <div className={'col-7'}>
                                <h5 className={'movie-title'}>{title}</h5>
                            </div>
                            <div className={'col-5'}>
                                <p className={'genre-year'}>{genre} | {year}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className={'cast-box'}>
                            <span>Starring:</span> {actors.join(", ")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;


