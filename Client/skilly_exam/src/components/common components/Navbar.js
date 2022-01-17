import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../../../src/styling/navigation_bar.css';

// import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

    const [Click, setClick] = useState(false);

    const handClick = () => setClick(!Click);
    // style={
    //     { color: '#FFFFFF', paddingLRight:'4%', paddingTop:'7px', fontWeight: '-moz-initial'}}>
    return (

        <>
            <nav className='navbar'>

                <div className='navbar-container'>
                    <Link to="/" className='nav-logo' >
                        Skilly Exam
                        <i class="fas fa-exam"></i>
                    </Link>


                    <ul className={Click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-items'><Link to="/" className='nav-links active'>Home</Link></li>
                        <li className='nav-items'><Link to="/about" className='nav-links active'>ABOUT</Link></li>
                        <li className='nav-items'><Link to="/contact" className='nav-links active'>CONTACT US</Link></li>
                    </ul>

                    <div className="nav-icons" onClick={handClick}>
                        <i class={Click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                </div>

            </nav>
            {/* <section>

                <div class="container">
                    <ul>
                        <li>
                            <div class="title">
                                <h3 style={{ color: '#000000', paddingLeft: '60px', paddingTop: '50px', fontWeight: '-moz-initial' }}>Student Section</h3>
                                <button className='std-visit-btn'>Start Now</button>
                            </div>
                        </li>

                        <li>
                            <div class="title">
                                <h3 style={{ color: '#000000', paddingLeft: '60px', paddingTop: '50px', fontWeight: '-moz-initial' }}>College Section</h3>
                                <button className='clg-visit-btn'>Start Now</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </section> */}
            
        </>

    );
}

export default Navbar;