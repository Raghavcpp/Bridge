import React from 'react'
import star from "../../../Images/star.png"
import "./Team.css"


const Team = () => {

    return (
        <div className="profile_page">
            <div className="col-left">
                <div className="profile_image profile_team">
                    <div><img src={star} /></div>
                    <div className="team_details">
                        <h2>manas</h2>
                        <h6>Dronacharya Group of Institutions</h6>
                        <h6>BTech 2020-2024</h6>
                        <div className="social_account">
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-right">
                <div className="profile_image profile_team">
                    <div><img src={star} /></div>
                    <div className="team_details">
                        <h2>Raghav Verma</h2>
                        <h6>Dronacharya Group of Institutions</h6>
                        <h6>BTech 2020-2024</h6>
                        <div className="social_account">
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="col-left">
                <div className="profile_image profile_team">
                    <div><img src={star} /></div>
                    <div className="team_details">
                        <h2>Jayshree Upadhyay</h2>
                        <h6>Dronacharya Group of Institutions</h6>
                        <h6>BTech 2020-2024</h6>
                        <div className="social_account">
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-right">
                <div className="profile_image profile_team">
                    <div><img src={star} /></div>
                    <div className="team_details">
                        <h2>Prince Raj</h2>
                        <h6>Dronacharya Group of Institutions</h6>
                        <h6>BTech 2020-2024</h6>
                        <div className="social_account">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Team