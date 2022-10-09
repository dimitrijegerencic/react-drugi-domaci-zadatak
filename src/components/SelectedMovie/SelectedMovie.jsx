import React from "react";
import {useAppData} from "../../context/AppContext";
import MovieCard from "../MovieCard/MovieCard";
import Table from "../Table/Table";

const SelectedMovie = () => {

    const {selectedMovie} = useAppData();

    return (
        <div className={'container'}>
            {selectedMovie?.id ?
                <>
                    <MovieCard
                        title={selectedMovie?.name}
                        genre={selectedMovie?.genre}
                        year={selectedMovie?.year}
                        image={selectedMovie?.image}
                        actors={selectedMovie?.actors}
                    />

                    <div className="card mt-5">
                        <div className="card-header">
                            People who watched this movie
                        </div>
                        <div className="card-body">
                            <Table header={[{firstName:"Name"}, {lastName:"Surname"}, {city:"City"}]} rows ={selectedMovie?.users}/>
                        </div>
                    </div>


                </>
                :
                <div className={'container'}></div>

            }
        </div>
    )
}

export default SelectedMovie;