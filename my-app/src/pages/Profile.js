import React from 'react'

import profile from "../img/profile.png"
import "../styles/Patient.css";
import "../styles/Profile.css";
import Sidebar from '../components/Sidebar';


const Profile = () => {
  return (
    <div className='patient-container profile-container flex'>
      <Sidebar active="profile"></Sidebar>
      <div className="portal-main flex-between-start">
        <div className="card profile">
            <div className="card-header">
                <h3>Patient Profile</h3>
            </div>
            <div className="card-body">
                <div className="profile-public flex-center">
                    <img src={profile} alt="" />
                    <div className="profile-public-detail flex-between-center">
                        <div>
                            <h2>Ali Kumail</h2>
                            <p>alikumail@gmail.com</p>
                        </div>
                        <div>
                            <p>Age: 22</p>
                            <p>DOB: 2/2/2000</p>
                        </div>
                        <div>
                            <p>03330234324</p>
                            <p>Islamabad, PK</p>
                        </div>
                    </div>
                </div>
                <div className="profile-edit">
                    <h3>Edit Profile</h3>
                    <form className='flex-center' action="#">
                        <div className="form-col">
                            <div className="input-item flex-center">
                                <label htmlFor="name">Name: </label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="input-item flex-center">
                                <label htmlFor="age">Age: </label>
                                <input type="text" name="age" id="age" />
                            </div>
                            <div className="input-item flex-center">
                                <label htmlFor="name">DOB: </label>
                                <input type="date" name="name" id="name" />
                            </div>
                        </div>
                        <div className="form-col">
                            <div className="input-item flex-center">
                                <label htmlFor="age">Phone: </label>
                                <input type="text" name="age" id="age" />
                            </div>
                            <div className="input-item flex-center">
                                <label htmlFor="name">Location: </label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="input-item flex">
                                <button className='btn' type="submit">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile