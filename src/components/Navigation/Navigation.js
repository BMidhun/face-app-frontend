import React from 'react';


function Navigation ({changeRoute}){

    return (
        <nav className="flex justify-end pt4 pr4">
            <a className="link dim moon-gray pointer"
            onClick = {() => changeRoute('signin')}
            >{`Sign Out`}</a>
        </nav>

    )
}

export default Navigation