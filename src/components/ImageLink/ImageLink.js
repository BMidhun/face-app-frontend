import React from 'react'

function ImageLink ({enterInput, onDetect}){

    return(
    <div>

        <p className="f4">{`This Magic brain will detect face. Give it a try`}</p>
        
        <div className="center">

            <div className="center pa3 br3 shadow-2 w-40">
                <input type="text" placeholder='Paste the image URL here' className="f4 pa2 mar4 w-70 center" onChange={enterInput}/>
                <button className="grow w-30 ml2 f6 dim dib bg-mid-gray pointer ba" onClick={onDetect}>Detect</button>
            </div>
        </div>


    </div>
)
        
    
}

export default ImageLink;