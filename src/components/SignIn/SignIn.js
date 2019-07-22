import React from 'react';


class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : ''
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.onChangePassword = this.onChangePassword.bind(this);

  }

  onChangeEmail = (event) => {

    this.setState({

      email : event.target.value

    });
 
  }

  onChangePassword = (event) => {
    this.setState({

      password : event.target.value
    });

  }

  submitInput = () => {

    fetch('https://salty-garden-47828.herokuapp.com/signin', {
 
     method : 'post',
     headers : {'Content-Type' : 'application/json'},
     body : JSON.stringify({

      email : this.state.email,
      password : this.state.password

     })

    }).then(response => response.json())
    .then(data => {

       //console.log(data);
       if(data){
        this.props.loadUser(data);
        this.props.changeRoute('home');
       
       }

       else{

         alert("Please Enter the correct credentials to login!!");
       }

    })

  

    {/* fetch(address to send/recieve data, {header/data to be send}).then(responsefromserver => response.json()),  ) */}
  }
   

  render(){
    
    const {changeRoute} = this.props;
    return (
          <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-3 center">
              <main className="pa4 black-80">
                  <div className="sign_in">
                      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                      <div className="mt3">
                          <label className="db fw6 lh-copy f6" >Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email-address"  id="email-address" 
                            onChange = {this.onChangeEmail}/>
                      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" >Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" name="password"  id="password" 
        onChange = {this.onChangePassword}
        />
      </div>
    </fieldset>
    <div className="">
      <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      onClick = {() => this.submitInput()} 
      >Sign in </button>
    </div>
    <div className="lh-copy mt3">
      <a  className="b ph3 pv2 input-reset ba b--black bg-black white grow pointer f6 dib"
          onClick = {() => changeRoute('signup')}>Sign up</a>
    </div>
  </div>
</main>
          </article>
          );
    }


}

export default SignIn;