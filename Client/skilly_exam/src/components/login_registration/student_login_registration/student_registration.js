import React from 'react'
import '../student_login_registration/student_registration.css';

export default function StudentRegistration() {
    return (

        <div className="container-student-registration">
            <div className="title">Registration form</div>
            <form method="post" action="P_student_registration_form.php">
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">First Name</span>
                        <input type="text" name="FIRST_NAME" placeholder="first name" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Last Name</span>
                        <input type="text" name="LAST_NAME" placeholder="last name" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Age</span>
                        <input type="text" name="AGE" placeholder="age" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Gender</span>
                        <input type="text" name="GENDER" placeholder="gender" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Blood Group</span>
                        <input type="text" name="BLOOD_GROUP" placeholder="blood group" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Plasma Donate</span>
                        <input type="text" name="PLASMA_DONATE" placeholder="plasma donate" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" name="EMAIL_ID" placeholder="email@gmail.com" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="text" name="PHONE_NO" placeholder="number" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" name="USER_NAME" placeholder="username" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
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




// import React from 'react'
// import '../student_login_registration/student_registration.css';
// export default function StudentRegistration() {
//     return (

//         <div className="container-std-reg">
//             <div className="title-std-reg">Registration form</div>
//             <form method="post" action="P_student_registration_form.php">
//                 <div className="user-details-std-reg">
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">First Name</span>
//                         <input type="text" name="FIRST_NAME" placeholder="first name" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Last Name</span>
//                         <input type="text" name="LAST_NAME" placeholder="last name" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Age</span>
//                         <input type="text" name="AGE" placeholder="age" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Gender</span>
//                         <input type="text" name="GENDER" placeholder="gender" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Blood Group</span>
//                         <input type="text" name="BLOOD_GROUP" placeholder="blood group" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Plasma Donate</span>
//                         <input type="text" name="PLASMA_DONATE" placeholder="plasma donate" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Email</span>
//                         <input type="text" name="EMAIL_ID" placeholder="email@gmail.com" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Phone Number</span>
//                         <input type="text" name="PHONE_NO" placeholder="number" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Username</span>
//                         <input type="text" name="USER_NAME" placeholder="username" required />
//                     </div>
//                     <div className="input-box-std-reg">
//                         <span className="details-std-reg">Password</span>
//                         <input type="text" name="PASSWORD" placeholder="password" required />
//                     </div>
//                 </div>
//                 <div className="button-std-reg">
//                     <input type="submit" name="SUBMIT" />
//                 </div>
//             </form>
//         </div>

//     )
// }