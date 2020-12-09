import React from 'react';

const Footer = () => {
    return(
        <footer className = "footer">
             <div>&copy; {new Date().getFullYear()} | Dodewaards Mannenkoor</div> 
                <a href="https://www.linkedin.com/in/sawitree-kalakul/" 
                 target="_blank" rel="noreferrer" className="footer__link">By Sawitree Kalakul </a>
             </footer> 
    );
}

export default Footer;