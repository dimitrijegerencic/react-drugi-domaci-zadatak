import React, {useEffect, useState} from "react";
import UserCard from "../UserCard/UserCard";
import './UserSearch.css';
import {listOfUsers} from "../../constants/constants";
const UserSearch = ({title, list = [], search}) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        if(query?.length > 1){
            search(query)
        }else{
            search('//')
        }
    }, [query])

    return (


        <div className="filter-list">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <div className={'d-flex align-items-center justify-content-center'}>
                            <input value={query} placeholder={'Search ' + title} type="text"
                                   className={'input-field'}
                                   onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

        <div>
            <div className={'container'}>
                <div className={'container'}>
                    <div className={'row pt-lg-0 align-items-center justify-content-center'}>
                        <div className={'col-lg-6 p-lg-5 pt-lg-0 col-md-1'}>
                            <div className={'container col-md-12'} id={'movies-section'}>
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        {list.map(
                                            (newUser)=>{
                                                return (
                                                    <div className={'container'}>
                                                        <div className={'container-fluid p-5'}>
                                                            <div className={'col-12'}>
                                                                <UserCard firstName={newUser.firstName}
                                                                          lastName={newUser.lastName}
                                                                          age={newUser.age}
                                                                          city={newUser.city}
                                                                          image={newUser.image}
                                                                          id={newUser.id}
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
        </div>
    </div>)
}

export default UserSearch;