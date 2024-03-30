import React from 'react'
import { Link } from 'react-router-dom'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    return (
        <div className="footer">
            <div className="footerOne ">
                <div className="">CSI, Anurag University Chapter.</div> <br /> <br />
                <p>cvsrcsichapter@anurag.edu.in</p>
            </div>

            <div className="h2 center">Navigation</div>

            <div className="links center">

                <Link to='/'>Home</Link>
                <Link to='/events'>Events</Link>
                <Link to='/workingbody'>Working Body</Link>

            </div>

            <div className="h2 center" style={{ marginTop: '60px', display: 'flex', alignItems: 'center' }}>
                Connect to us on &nbsp;
                <a href='https://www.linkedin.com/company/csichapter-au'>  <LinkedInIcon style={{ fontSize: '30px' }} /> </a> &nbsp;
                <a href='https://www.instagram.com/csichapter_au/'><InstagramIcon style={{ fontSize: '30px' }} /></a>
            </div>
            <div className='center query' style={{ marginTop: '40px' }}>For any queries for the website, contact through&nbsp;<a href='https://www.linkedin.com/in/sriraj-nihar'>LinkedIn. </a>
            </div>

            <a style={{ marginTop: '60px', textAlign: 'center', opacity: '0.7' }} href="https://storyset.com/work">Work illustrations by Storyset</a>
        </div>
    )
}

export default Footer