import React from 'react';

function FrontPage(){

    return(
        
        <div
            style={{
            position: 'relative',
            zIndex: 2,
            height: '50%',
            width: '50%',
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10%',
            textAlign: 'center',
            }}
        >
            {/* Centered Content */}
            <p
            className="text-center"
            style={{
                fontFamily: `'Edu NSW ACT Hand Pre', cursive`,
                fontSize: '2.5rem',
                margin: '10%'
            }}
            >Come to Taniti for the best Spring Break Ever</p>
            <p  style={{
            fontFamily: `"Shadows Into Light", cursive`,
            }}>Bring a lawn chair for best experience</p>
            <hr
            style={{
                width: '80%',
                borderTop: '2px solid black',
                margin: '10%',
                
            }}
            />
            <p><button className="btn btn-primary">Plan your next getaway</button></p>
        </div>
  );
}

export default FrontPage;