import React from 'react'
import '../college_login_registration/college_registration.css';

export default function CollegeRegistration() {
    return (

        <div className="container-college-registration">
            <div className="title">Registration form</div>
            <form method="post" action="P_college_registration_form.php">
                <div className="user-details">
                <div className="input-box">
                        <span className="details">College Name</span>
                        <input type="text" name="COLLEGE_NAME" placeholder="college name" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Applyer Full Name</span>
                        <input type="text" name="FULL_NAME" placeholder="full name" required />
                    </div>
                    {/* <div className="input-box">
                        <span className="details">Last Name</span>
                        <input type="text" name="LAST_NAME" placeholder="last name" required />
                    </div> */}
                    <div className="input-box">
                        <span className="details">Applyer Age</span>
                        <input type="text" name="AGE" placeholder="age" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Applyer Gender</span>
                        <input type="text" name="GENDER" placeholder="gender" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Applyer Phone Number</span>
                        <input type="text" name="PHONE_NO" placeholder="number" required />
                    </div>
                    <div className="input-box">
                        <span className="details">College Address</span>
                        <input type="text" name="CLG_ADD" placeholder="College Address" required />
                    </div>
                    {/* <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" name="USER_NAME" placeholder="username" required />
                    </div> */}
                    <div className="input-box">
                        <span className="details">College Email</span>
                        <input type="text" name="EMAIL_ID" placeholder="email@gmail.com" required />
                    </div>
                    <div className="input-box">
                        <span className="details">College Password</span>
                        <input type="text" name="PASSWORD" placeholder="password" required />
                    </div>
                </div>
                <div className="button">
                    <input type="submit" name="SUBMIT" />
                </div>
            </form>
        </div>

    )
}