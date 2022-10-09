import React from "react";
import {listOfMovies} from "../../constants/constants";
import Table from "../Table/Table";
import {useAppData} from "../../context/AppContext";

const MoviesTable = () => {

    const header = [{name:"Name"}, {year:"Year"}, {genre:"Genre"}]

    const {setSelectedMovie} = useAppData();

    return (
        <div>
            <Table
                header={header}
                rows={listOfMovies}
                onRowClick={(e) => setSelectedMovie(e)}
            />
        </div>)
}

export default MoviesTable;
