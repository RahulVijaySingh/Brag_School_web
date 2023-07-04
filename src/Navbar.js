// import { useState } from 'react';
import React from 'react';
import './Navbar.css';


const Navbar = () => {


    // const [topBox, settopBox] = useState({
    //     backgroundColor:'rgb(197, 242, 253)',
    //     width: 'block', 
    //     height: '80vh'

    // })                              


    return (
        <>


            <div className="top-box " style={{ backgroundColor: 'rgb(197, 242, 253)', width: 'block', height: '80vh' }}>

                <div className="container">

                    <nav className="navbar navbar-primary">
                        <a class="navbar-brand" href="https://schoolhues.com/">
                            <img src="https://schoolhues.com/wp-content/uploads/2022/10/b.png" width="100" height="50" class="d-inline-block align-top" alt="" />
                        </a>
                    </nav>

                </div>



                <div class="container">
                    <button type="button" className="btn btn-info btn-round btn-primary" id='login' data-toggle="modal" data-target="#loginModal">
                        Login
                    </button>
                </div>

                <button className="btn btn-round btn-primary" id='job'>
                    <a href="/"> Post a job </a>
                </button>

                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header border-bottom-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-title text-center">
                                    <h4>Login</h4>
                                </div>
                                <div class="d-flex flex-column text-center">
                                    <form>
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="email1" placeholder="Your email address..." />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="password1" placeholder="Your password..." />
                                        </div>
                                        <button type="button" class="btn btn-info btn-block btn-round">Login</button>
                                    </form>

                                    <div class="text-center text-muted delimiter">or use a social network</div>
                                    <div class="d-flex justify-content-center social-buttons">
                                        <button type="button" class="btn btn-secondary btn-round mx-2" data-toggle="tooltip" data-placement="top" title="Twitter">

                                            <i class="fa-brands fa-facebook-f"></i>

                                        </button>
                                        <button type="button" class="btn btn-secondary btn-round mx-2" data-toggle="tooltip" data-placement="top" title="Facebook">

                                            <i class="fa-brands fa-twitter"></i>
                                        </button>
                                        <button type="button" class="btn btn-secondary btn-round mx-2" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                            <i class="fa-brands fa-linkedin" style={{ backgroundColor: "blue" }}></i>
                                        </button>
                                    </div>

                                    <div class="modal-footer d-flex justify-content-center">
                                        <div class="signup-section">Not a member yet? <a href="#a" class="text-info"> Sign Up</a>.</div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>




                <h1 >Over <span style={{ color: "blue" }}> 1200+ </span> jobs are waiting for you</h1>

                <div className="container search-box">
                    <div className="box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" placeholder='search jobs' />

                    </div>
                    <div className="box">
                        <i class="fa-solid fa-location-crosshairs fa-spin"></i>
                        <input type="search" placeholder='search jobs' />

                    </div>
                    <div className="box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" placeholder='search jobs' />

                    </div>
                    <button class="btn btn-primary" type="submit">Button</button>

                </div>

                <small>Popular Searches: Communication,Patience</small>



            </div>
        </>
    )
}

export default Navbar

