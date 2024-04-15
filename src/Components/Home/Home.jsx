import React from 'react';
import Logo from '../../Assets/csi.jpg'
import './home.css';
import Lottie from 'lottie-react';
import animation from '../../Assets/Computers.json';
// import { Typewriter } from 'react-simple-typewriter';
import Appreciation from '../../Assets/Appreciation-bro.png'
import Knowledge from '../../Assets/Bibliophile-cuate.png'
import Network from '../../Assets/Work chat-amico.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CSIBody from '../../Assets/CSI Body.png'
import DataHackHoursInaugural from '../../Assets/datahackhours.jpg'
import VMSpeakDHH from '../../Assets/Inaugural, datahackhours.jpg'
import BlockchainSummit from '../../Assets/Blockchain Summit.png'
import Preconf from '../../Assets/preconf workshop on data analytics and visualization.jpg'
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Home() {


  const carouselData = [
    {
      'src': CSIBody,
      'title': 'CSI Body at Anurag University'
    },
    {
      'src': DataHackHoursInaugural,
      'title': 'Inauguration of Data Hack Hours, a 24 hour National Level Hackathon'
    },
    {
      'src': VMSpeakDHH,
      'title': 'Dr. G. Vishnu Murthy, Dean CSE at Data Hack Hours'
    },
    {
      'src': BlockchainSummit,
      'title': 'Blockchain Summit Event at Anurag University'
    },
    {
      'src': Preconf,
      'title': 'Preconference Workshop on Data Visualization and Analytics'
    }
  ]

  return (
    <>


      <div className="homeContainer">
        <div className="Blurred1"></div>
        {/* Section One */}
        <div className="SectionOne">

          <div className="contentOne" style={{ overflow: 'visible' }}>
            <div className='contentHeading' style={{ position: 'relative', fontWeight: '800', overflow: 'visible' }}>
              <div className="Blurred2"></div>

              {/* A COMMUNITY TO <br /><span className="typing"><Typewriter words={arrOfWords} typeSpeed={90} deleteSpeed={24} loop={0} />{' '}</span> WITH */}
              Where <span className="typing">Passion</span><br></br> Meets <span className="typing">Computers.</span>
            </div>

            <div className="desc">
              We build bridges between dreams and reality with knowledge, mentorship, and a vibrant community of innovation.            </div>

            {/* <button className="exploreButton">Explore CSI's Events</button> */}

            <div className="events">
            <Link to='/events' >
            <button class="btn" type="button">
            <strong>Explore CSI's Events</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
          </Link>

          </div>
          </div>

          <div className="animationOne">
            <div className="Blurred3"></div>
            <Lottie animationData={animation} />
          </div>
        </div>
        

       
        <div className="SectionTwo" style={{position:'relative'}}>
          <div className="aboutCSIButton">About CSI</div>
          <div className="Blurred1" style={{top:'30'}}></div>
          <div className="contentBox">
            <div className="content">
              Being a Student Chapter of Computer Society of India, our aim is to facilitate research, knowledge sharing, learning, and
              career enhancement for all categories of IT professionals, while simultaneously
              inspiring and nurturing new entrants into the industry and helping them to integrate
              into the IT community. CSI is also working closely with other industry associations,
              government bodies, and academia to ensure that the benefits of IT advancement ultimately
              percolate down to every single citizen of India.
            </div>
          </div>
        </div>


      
      
        <div className="SectionTwo" style={{ marginTop: '80px', position:'relative' }}>
        <div className="Blurred1" style={{top:'200px'}}></div>
          <div className="aboutCSIButton">Why CSI?</div>

          <div className="contentBox">
            <div className="cards">
              <div className="card">
                  <img className="image" src={Appreciation} alt="" />
                  <div className="title">
                    RECOGNITION
                  </div>
                  <div className="cardcontent">
                    <ul >
                      <li>CSI Membership Card</li>
                      <li>Appreciation Letter / Certificate of Excellence</li>
                      <li>Industry recognized CSI Certification Opportunities</li>
                      <li>Eligibility to be nominated for the best Student Paper in CSI communications</li>
                      <li>Discounted CSI & Partner Certification Exam Fees, and many more</li>
                    </ul>
                  </div>

              </div>

              <div className="card">
                  <img className='image' src={Knowledge} alt="" />
                  <div className="title">
                    KNOWLEDGE
                  </div>

                  <div className="cardcontent">
                    <ul>
                      <li>Access to CSI Knowledge Portal's Login ID and Password</li>
                      <li>Technology updates through Conferences, Seminars, Tutorials & Workshops at Discounted Rates</li>
                      <li>A Forum for Activities like Paper Presentations, Quiz, Competitions and Exhibitions.</li>
                      <li>Ability to connect with distinguished Speakers on different technologies</li>
                    </ul>
                  </div>
                  

              </div>
              <div className="card">
                  <img className="image" src={Network} alt="" />
                  <div className="title">
                    NETWORKING
                  </div>
                  <div className="cardcontent">
                    <ul>
                      <li>CSI Communications - Monthly Magazine</li>
                      <li>CSI eNewsletter</li>
                      <li>CSI Whizkidd- Student Newsletter</li>
                      <li>Opportunity to interact with Industry professionals and chalk out a career path</li>
                      <li>Participation in joint events of CSI with its MOU partner / Organization</li>
                    </ul>
                  </div>

              </div>
            </div>

          </div>
        </div>

        

        <div className="SectionTwo" style={{marginTop:'100px', position:'relative'}}>
        <div className="Blurred1" style={{top:'10px'}}></div>

          <div className="aboutCSIButton">Gallery</div>

          <div className="contentBox">
            <Carousel className='carouselContainer' showIndicators={false} showThumbs={false} infiniteLoop={true} dynamicHeight={false} centerMode={true} autoPlay={true} interval={3000} centerSlidePercentage={100}>
              {carouselData.map((ele)=>(
                <div className="carditem">
                  <img src={ele.src} alt="" />
                  <p >{ele.title}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
              <Footer />
        
      </div>
    </>
  );
}

export default Home;
