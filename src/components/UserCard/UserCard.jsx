import React from "react";
import './UserCard.css';

const UserCard = (
    {
        id,
        firstName,
        lastName,
        age,
        city,
        image,
        movies
    }
) => {
    return (
        <div className={'row'}>
        <div className={'user-box col-md-8 col-lg-12 shadow-lg'}>
            <div className={'d-flex align-items-center justify-content-center'}>
                <div className={'container-fluid'}>
                    <div className={'left'}>
                        <img src={image} alt="Profile picture" className={'user-photo'}/>
                    </div>
                    <div className={'right'}>
                        <div className={'row'}>
                            <div className={'col-md-12 col-lg-12'}>
                                <p className={'full-name'}>{firstName} {lastName}</p>
                                <hr/>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <label htmlFor="age" className={'age-label'}>Age</label>
                                <p className={'age'}>{age}</p>
                            </div>
                            <div className={'col-6'}>
                                <label htmlFor="city" className={'city-label'}>City</label>
                                <p className={'city'}>{city}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserCard;