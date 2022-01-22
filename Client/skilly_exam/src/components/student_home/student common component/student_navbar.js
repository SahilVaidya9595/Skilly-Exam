import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../student_navbar_styling.css";

// import { GiHamburgerMenu } from "react-icons/gi";

function Stu_Navbar() {

    const [Click, setClick] = useState(false);

    const handClick = () => setClick(!Click);
    return (
        <>
            <nav className='std-navbar'>

                <div className='std-navbar-container'>
                    <Link to="/" className='std-nav-logo' >
                        Skilly Exam
                        <i class="fas fa-exam"></i>
                    </Link>

                    <ul className={Click ? "std-nav-menu active" : "std-nav-menu"}>
                        <li className='std-nav-items'><Link to="/studenthomePage" className='std-nav-links active'>Home</Link></li>
                        <li className='std-nav-items'><Link to="/studymaterial" className='std-nav-links active'>Study Material</Link></li>
                        <li className='std-nav-items'><Link to="/courses" className='std-nav-links active'>Courses</Link></li>
                        <li className='std-nav-items'><Link to="/upcomingexam" className='std-nav-links active'>Exam</Link></li>
                    </ul>

                    <div className="std-nav-icons" onClick={handClick}>
                        <i class={Click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                </div>

            </nav>
            
        </>

    );
}

export default Stu_Navbar;