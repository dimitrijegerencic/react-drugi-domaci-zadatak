import React, {useReducer, useState} from "react";
import MoviesTable from "../MoviesTable/MoviesTable";
import './MainLayout.css';
import Search from "../Search/Search";
import {listOfUsers} from "../../constants/constants";
import UserSearch from "../UserSearch/UserSearch";
import SelectedMovie from "../SelectedMovie/SelectedMovie";
const reducer = (state, action) => {

    switch(action.type){
        case 'search-name':
            return listOfUsers.filter(user => user.firstName.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-surname':
            return listOfUsers.filter(user => user.lastName.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-age':
            return listOfUsers.filter(user => user.age.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-city':
            return listOfUsers.filter(user => user.city.toString().toLowerCase().includes(action.data.toLowerCase()));
        default:
            return listOfUsers;
    }
}

const MainLayout = () => {

    const [tabInView, setTabInView] = useState("firstName");
    const [list, dispatch] = useReducer(reducer, [])

    return (
        <div className={'main mb-5'}>
            <div className="container px-4 py-5 my-5 text-center shadow-lg hero-banner">
                <h1 className="display-5 fw-bold mt-5 mb-5">Drugi domaći zadatak</h1>
                    <div className="col-lg-6 col-sm-12 mx-auto">
                        <p className="lead mb-5">Click below to browse.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href={'#start-position'} type="button" className="start-button px-4 gap-3">Start</a>
                        </div>
                    </div>
            </div>
            <div className={'container mt-5 shadow-lg user-search-section mb-5'} id="start-position">
                <div className={'row'}>
                    <div className={'col-lg-12 d-flex align-items-center justify-content-center mt-5'}>
                        <h1>Search users</h1>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-12 d-flex align-items-center justify-content-center mt-0'}>
                        <p className="lead mt-3">Select filter</p>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-12 col-md-12 col-sm-10 mt-3 mb-4'}>
                        <div className={'filter-buttons-section'}>
                            <div className={'buttons-section d-flex align-items-center justify-content-center'}>
                                <button className={tabInView === "firstName" ? "tab-active" : ""} onClick={() => setTabInView("firstName")}>First name</button>
                                <button className={tabInView === "lastName" ? "tab-active" : ""} onClick={() => setTabInView("lastName")}>Last name</button>
                                <button className={tabInView === "age" ? "tab-active" : ""} onClick={() => setTabInView("age")}>Age</button>
                                <button className={tabInView === "city" ? "tab-active" : ""} onClick={() => setTabInView("city")}>City</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        {tabInView === "firstName" && <UserSearch
                            title="by first name"
                            list={list}
                            search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-name', data: e})}/>}

                        {tabInView === "lastName" && <UserSearch
                            title="by last name"
                            list={list}
                            search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-surname', data: e})}/>}

                        {tabInView === "age" && <UserSearch
                            title="by age"
                            list={list}
                            search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-age', data: e})}/>}

                        {tabInView === "city" && <UserSearch
                            title="by city"
                            list={list} search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-city', data: e})}/>}
                    </div>
                </div>
            </div>

            <div className={'container mt-5 shadow-lg movie-search-section mb-5'}>
                <div className={'row'}>
                    <div className={'col-lg-12 d-flex align-items-center justify-content-center mt-5'}>
                        <h1>Search movies</h1>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-12 d-flex align-items-center justify-content-center mt-0'}>
                        <p className="lead mt-3">Find a movie by its name</p>
                    </div>
                </div>
                <Search />
            </div>

            <div className={'container main shadow-lg'}>
                <div className={'row'}>
                    <div className={'col-5 left-column'}>
                        <div className={'row d-flex align-items-center justify-content-center'}>
                            <div className={'col-lg-12 movies-table '}>
                                <div className="card mt-5">
                                    <div className="card-header">
                                        All movies
                                    </div>
                                    <div className="card-body">
                                        <MoviesTable/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-7'}>
                        <div className={'row d-flex align-items-center justify-content-center'}>
                            <div className={'d-flex align-items-center justify-content-center col-lg-6 mt-5'} >
                                <SelectedMovie />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainLayout;