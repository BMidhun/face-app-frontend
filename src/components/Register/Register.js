import React from 'react';

class  Register extends React.Component {

  constructor (props) {

    super(props);

    this.state = {
      username : '',
      email : '',
      password : ''
    }

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setUsername = this.setUsername.bind(this);

  }

  setEmail = (event) =>{

    this.setState({

      email : event.target.value

    })

  }
  
  setPassword = (event) =>{

    this.setState({

      password : event.target.value

    })

   }
   
   setUsername = (event) =>{

    this.setState({

      username : event.target.value

    })


  } 

  submitInput = () => {

    fetch('https://salty-garden-47828.herokuapp.com/register', {
 
     method : 'post',
     headers : {'Content-Type' : 'application/json'},
     body : JSON.stringify({

      email : this.state.email,
      password : this.state.password,
      username : this.state.username 


     })

    }).then(response => response.json())
    .then(data => {

      console.log(data);

       if(!data.register){

         alert('Failed to add user');

       }

       else {
         
        if(data.user){

        this.props.changeRoute('signin');
       }

       else {

        alert("Failed to add User");
       }

    }
    
  })

  

    {/* fetch(address to send/recieve data, {header/data to be send}).then(responsefromserver => response.json()),  ) */}
  }
   

  render(){

    const {changeRoute} = this.props; 
    
    return (
      <>
       <div>

           <div className="signout-link fr pr5">
               <a className="link dim moon-gray pointer" onClick = {() => changeRoute('signin')}> Home</a>
           </div>

       </div> 
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-3 center">
        <main className="pa4 black-80">
          <div className="Register">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" >UserName</label>
                <input required className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" name="username"  
                id="username"
                onChange = {this.setUsername} />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Email</label>
                <input required className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" 
                onChange = {this.setEmail}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" >Password</label>
                <input required className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password" 
                onChange = {this.setPassword}/>
              </div>
            </fieldset>
            <div className="register-btn">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" value="Register"
              onClick = {this.submitInput} 
              />
            </div>
          </div>
        </main>
        </article>
        </>
            );

}

}


export default Register 