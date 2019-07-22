import React from 'react';

class Rank extends React.PureComponent {

    constructor(props){

        super(props);

    }

    render(){

        console.log('Username:',this.props.username);
        const {username,entries} = this.props;
        return(
        
            <div>
                <p>{`Hey ${username} your no.of entries are ${entries}`}</p>
            </div>
    
        )

    }
    
}

/*function Rank ({username,entries}) {

    console.log('Entries made so far:',entries);
   
}*/

export default Rank;