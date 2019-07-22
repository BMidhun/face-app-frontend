import React from 'react';

import './FaceRecognition.css';



function FaceRecognition ({imgUrl, boxes}){


    const detectbox = boxes.map((box) => {

        return  (<div key={box.id} 
                     className="bounding-box"
                     style = {{top:box.topRow, bottom:box.bottomRow, right: box.rightCol, left:box.leftCol }}>
                </div>)

    })

    return(

        <div className="center ma4">
            <div className = 'absolute mt2'>          
            <img id="inputImage" 
            src={imgUrl} alt="" width='300px' height='auto'> 
            </img>
             {detectbox}
            </div>     
         </div>

    );
}

export default FaceRecognition;