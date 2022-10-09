import React, {useEffect, useState} from 'react';
import './Search.css';
import useDebounce from "../../hooks/useDebounce";
import {listOfMovies} from "../../constants/constants";
import MovieCard from "../MovieCard/MovieCard";

const Search = () => {

    const [searchInput, setSearchInput] = useState();
    const debouncedSearchInput = useDebounce(searchInput, 2000);

    useEffect(() => {
        setSearchInput(debouncedSearchInput);
    }, [debouncedSearchInput])

    return(
        <div className={'container'}>
            <div class="h-100 d-flex align-items-center justify-content-center">
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <div className={'d-flex align-items-center justify-content-center'}>
                            <input value = {searchInput} placeholder={'Type movie name...'} type="text" className={'input-field'}
                                   onChange={(e)=>setSearchInput(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {listOfMovies.some(movie => movie.name === searchInput) ?
                <div>
                    <div className={'container'}>
                            <div className={'row pt-lg-0 align-items-center justify-content-center'}>
                                <div className={'col-lg-5 col-sm-1 p-lg-5 col-md-12'}>
                                    <div className={'col-lg-12'}>
                                        <div className={'row'}>
                                            <div className={'col-lg-12 col-md-12 col-sm-12'}>
                                                {listOfMovies.filter(movie => movie.name === searchInput).map(
                                                    (newMovie)=>{
                                                        return (
                                                            <div className={''}>
                                                                <div className={'row p-5'}>
                                                                    <div className={'col-12'}>
                                                                        <MovieCard title={newMovie.name}
                                                                                   genre={newMovie.genre}
                                                                                   year={newMovie.year}
                                                                                   image={newMovie.image}
                                                                                   actors={newMovie.actors}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                <div> </div>
            }
        </div>
    )
}

export default Search;