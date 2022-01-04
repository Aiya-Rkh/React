import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer style={{textAlign: 'center',
  padding: '10px',margin: '8px',
  backgroundColor: 'DarkSalmon',
                color: 'white'
            }}>
                <div style={{display:'inline'}}>
                <p>Author: Aiya R</p>
                <p><img style={{width:"25px",margin:"5px"}} src="https://cdn1.iconfinder.com/data/icons/100-basic-for-user-interface/32/36-mail-256.png" alt="" /><a href="mailto:aiya@example.com">aiya@example.com</a></p>
                    <p><img style={{ width: "25px", paddingBottom: 0 }} src="https://cdn0.iconfinder.com/data/icons/doodle-communication/91/Doodle_Communication_18-256.png" alt="" /> <a href="tel:+99650000024">+996500000024</a></p>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;