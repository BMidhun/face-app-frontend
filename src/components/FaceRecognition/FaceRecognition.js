import React from 'react';

import './FaceRecognition.css';



function FaceRecognition ({imgUrl, box}){


    

    return(

        <div className="center ma4">
            <div className = 'absolute mt2'>          
            <img id="inputImage" 
            src={imgUrl} alt="" width='300px' height='auto'> 
            </img>
            <div  
            className="bounding-box"
             style = {{top:box.topRow, bottom:box.bottomRow, right: box.rightCol, left:box.leftCol }}>
             </div>
            </div>     
         </div>

    );
}

export default FaceRecognition;