import React from 'react'
import { Link } from "react-router-dom";
import "../student_home/student_home_style.css";
import img1 from "../images/student home img.png";

export default function Stu_HomePage() {
    return (
        <div>
            <section>
                <div className='stu-container'>
                    <h1><span>Start Your Journey of success </span><br/>
                    Personalised Courses Programs <br/> to make courses easier to you</h1><br/>
                    <h3>Want to know how SkillyExam can help you?</h3>
                    <Link to="/course">
                        <button className='stu-course-btn'>Start Now</button>
                    </Link>
                </div>
                <div className='img-container'>
                    <img src={img1} id="stu-img" alt='student image' />
                </div>
                <div className="sponsored">
                        <h3>Google dev</h3>
                        <h3>Edu Portal</h3>
                    </div>
            </section>
            
        </div>
    )
}





