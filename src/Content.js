import React,{useRef} from 'react'
import './Content.css'
// import img1 from './images/1.jpg'
// import img2 from './images/2.jpg'
// import img3 from './images/2.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import ReactPlayer from 'react-player'
const video_path="https://www.youtube.com/embed/HwAt-vIeobY?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fschoolhues.com&widgetid=1";





const Content = () => {

  const playerRef = useRef(null);
  return (
    <>

      <h1 className='mt-5' style={{ textAlign: "center" }}>Current Vacancies in Different Schools</h1>
      <h5 style={{ textAlign: "center" }}>Find schools that deserve you!</h5>
      <div className="container mt-5" style={{ height: "400px", width: "50%" }}>

        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100" style={{ height: "300px", width: "50%" }}
              // src="./images/1.jpg"
              src='https://images.unsplash.com/photo-1662502995368-d4110e91b132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGRyZW4lMjBidXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{ height: "300px", width: "50%" }}
              // src=""
              // style={{src:"img2"}}
              src='https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGRyZW4lMjBpbiUyMHNjaG9vbCUyMGJ1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{ height: "300px", width: "50%" }}
              src="https://e7.pngegg.com/pngimages/322/573/png-clipart-delhi-public-school-r-k-puram-delhi-public-school-mathura-road-south-delhi-delhi-public-school-society-delhi-public-school-noida-school-emblem-logo-thumbnail.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>





      </div>
      <Button variant="primary" style={{ marginLeft: "45%" }}>View All Schools</Button>{' '}
      <h1 className='mt-5 mb-0' style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(197, 242, 253)" }}>Browse by category</h1>

      <div className="mb-5" style={{ width: "100%", height: "400px", backgroundColor: "rgb(197, 242, 253)", display: "flex", justifyContent: "left", alignItems: "center" }} >


        <div className="mb-5 mx-5" style={{ width: "150px", height: "150px", backgroundColor: "rgb(100, 150, 253)" }} > <i class="fa-solid fa-code"></i>

          <h3>Primary Schools</h3>  </div>


        <div className="mb-5" style={{ width: "150px", height: "150px", backgroundColor: "rgb(100, 150, 253)" }} > <h3>Senior Tecahers</h3></div>




      </div>

      <h1 className='mt-5' style={{ textAlign: "center" }}>Live Competitions</h1>

      <h5 style={{ textAlign: "center" }}>Participate in different Events</h5>



      <div className="mb-5 mt-5" style={{ width: "100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }} >

        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100" style={{ height: "300px", width: "50%" }}
              // src="./images/1.jpg"
              src='https://cdn3.mycity4kids.com/images/article-images/web/headers/img-20160922-57e3c7d1138a1.jpg'
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{ height: "300px", width: "50%" }}
              // src=""
              // style={{src:"img2"}}
              src='https://assetsio.reedpopcdn.com/chess-playing-hand.jpeg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp'
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{ height: "300px", width: "50%" }}
              src="https://thebridge.in/h-upload/2023/01/16/42295-tennis-court-stock.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </div>


  
      <div className="mb-5" style={{ width: "100%", height: "400px", display: "flex", backgroundColor: "#999999", justifyContent: "center", flexDirection: "column", alignItems: "center" }} >
      
      
        <h3>CANDIDATE</h3>
        <br />


        <h1 style={{ fontSize: "64px" }}>Find your dream job</h1>
        <h2>Recruiters looking for talent can find your resume based on</h2>
        <h2>keywords, job titles, skills and more.</h2>

        <Button variant="primary" >Post Your Resume</Button>{' '}
      </div>  

     




      <footer className="mx-3" style={{ display: "grid", gridTemplateColumns: "30% auto auto 30%" }}>
        <div className='left-foot mb-3' style={{ display: "flex", flexDirection: "column", justifyContent: 'center' }} >
          <h4>About us</h4>
          <h5>SER Center, Prasadampadu, Vijayawada,</h5>
          <h5>India - 521108</h5>
          <h5>+91 9685511620</h5>
          <h5>hello@schoolhues.com</h5>
          <div >

          <i class="fa-brands fa-linkedin mx-2" ></i>
          <i class="fa-brands fa-twitter mx-2"></i>
          <i class="fa-brands fa-facebook-f mx-2"></i>
          </div>      
        </div>

        <div className='left-foot mb-3' style={{ display: "flex", flexDirection: "column", justifyContent: 'center' }} >
          <h5>Company</h5>
          <h5>About us</h5>
          <h5>Blogs</h5>
          <h5>Contacts</h5>
        </div>

        <div className='left-foot mb-3' style={{ display: "flex", flexDirection: "column", justifyContent: 'center' }} >
        <h5>Services</h5>
        <h5>Jobs</h5>
        <h5>Schools</h5>
        <h5>Candidate</h5>
        </div>

        <div>
        <img src="https://schoolhues.com/wp-content/uploads/2022/10/b.png" width="300" height="200" class="d-inline-block align-top" alt="" />
        </div>

      </footer>


      <div className='container m-5' style={{margin:"100px"}}>
      <h6>@ 2023 SchoolHues. All Right Reserved</h6>    
       </div>



    </>
  )
}

export default Content
























