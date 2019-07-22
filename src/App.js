import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLink from './components/ImageLink/ImageLink'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import {particleparam} from './constants/particleparam';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
//import Clarifai from 'clarifai';
import SignIn from  './components/SignIn/SignIn'
import Register from './components/Register/Register';



const initialState = {
  face_input : '',
  imgUrl : '',
  box : [],
  route : 'signin',
  user : {
    id : '',
    username : '',
    entries  : null,
    joined   : ''	

  }
}

class App extends React.Component {

  constructor(){
    super();
    this.state = initialState;
  
  }

  loadUser = (userdata) => {

    this.setState({

      user : {

        id       : userdata.id,
        username : userdata.username,
        entries  : userdata.entries,
        joined   : userdata.joined

      }

    })


  }  
  
  calculateBoxPosition = (data) => {

    //console.log(data);

    for(let i = 0 ; i<data.outputs.length; i++){

      for(let j=0; j<data.outputs[i].data.regions.length; j++){

    const imgdata = data.outputs[i].data.regions[j].region_info.bounding_box;

    const imageId = document.getElementById('inputImage');

    console.log(imageId.width, imageId.height);

    this.setState({ box : this.state.box.concat ({
      id : data.outputs[i].data.regions[j].id,
      leftCol: imageId.width * imgdata.left_col,
      topRow: imageId.height * imgdata.top_row,
      rightCol: imageId.width - (imageId.width * imgdata.right_col),
      bottomRow: imageId.height - (imageId.height * imgdata.bottom_row)
    })});

  }

  }
}
  
  

  enterInput = (event) => {

    console.log(event.target.value);

    this.setState({

      face_input: event.target.value

    })

  }

  onDetect = () => {

    if(this.state.face_input !== this.state.imgUrl){
    this.setState({

      imgUrl : this.state.face_input

    })
    
   fetch('https://salty-garden-47828.herokuapp.com/handleapi', {

    method : 'post',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({ imgUrl : this.state.face_input })
   }).then((response => response.json())).then(data => 
    { 
      console.log(data)
      if(data){
        //console.log(this.state.user.id);
        fetch('https://salty-garden-47828.herokuapp.com/image',{
          method : 'put',
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify({

            id: this.state.user.id

          })

        }).then(response => response.json()).then(data => this.setState({user:{
          id       : this.state.user.id,
          username : this.state.user.username,
          entries  : data.entries,
          joined   : this.state.user.joined
          }}))

      } 
      //console.log(response);
      this.calculateBoxPosition(data);
    }).catch((err)=>{ console.log(err)})    

  }

  }

  changeRoute = (route) => {

    this.setState({
      route : route
    })

    if(route === 'signin'){
      this.setState(initialState);
    }

  }

  


  render(){
    
  return (
    <div className="App"> 
    <Logo/>
      <Particles className="particles" params={particleparam}/>
     

     {(this.state.route === 'home') ? 
      <>  
      <Navigation changeRoute = {this.changeRoute} />
      <Rank username = {this.state.user.username}
            entries  = {this.state.user.entries} />    
      <ImageLink 
      enterInput={this.enterInput}
      onDetect = {this.onDetect}
      />
      <FaceRecognition 
      boxes = {this.state.box}
      imgUrl={this.state.imgUrl}/>
      </>  : (this.state.route === 'signin') ?
      <SignIn  changeRoute={this.changeRoute}
               loadUser = {this.loadUser}
               /> 
          :  
      <Register changeRoute={this.changeRoute}/>
        
     
      }
    </div>
  );
}

/*componentDidMount(){

  fetch('http://localhost:3001/')
  .then(response => response.text())
  .then(data => console.log(data))

} 

You can use componentDidMount() to test connection btw server and client*/
}


export default App;
