import React from 'react';

import Tilt from 'react-tilt';

function Logo(){

    return(

        <div className="pl3 pt3">
        <Tilt className="Tilt pointer" options={{ max : 60}} style={{ height: 120, width: 120 }} >
            <div className="Tilt-inner"> 

                <img src="https://image.flaticon.com/icons/svg/910/910614.svg" alt="logo"></img>

            </div>
        </Tilt>
    </div>
    )
}

export default Logo