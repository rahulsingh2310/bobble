import React, { Component } from 'react';
import './App.css';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

import { MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard } from 'mdbreact';

class App extends Component {

constructor(){
super();

this.state={ firstname:'', email:'',textareaValue:'' }
}

    handleChange = event =>{

	this.setState({ [event.target.name]:event.target.value })
	}


    handleSubmit = event =>{


		event.preventDefault();
		console.log("First name : " + this.state.firstname)
		console.log("Email : " + this.state.email)
		
		const data1 = { firstName:this.state.firstname,lastName:this.state.lastname, email:this.state.email,password:this.state.password }

   const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data1)
    };
    fetch('https://reqres.in/api/users', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            console.log(data)

	   this.setState({
  		textareaValue: JSON.stringify(data)
           });
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
		

    }




  render() {

    const responseFacebook = (response) => {
      console.log(response);
	
	   this.setState({
  		textareaValue: JSON.stringify(response)
           });
    }

    const responseGoogle = (response) => {
      console.log(response);

   this.setState({
  		textareaValue: JSON.stringify(response)
           });
    }





    return (
      <div className="App">

<MDBContainer >

 <MDBRow className="mt-1 justify-content-center">
     
  <MDBCard  style={{ width: "50rem", text:"center" }} >
 <img style={{  display: "block", marginLeft: "auto", marginRight: "auto"}} 
src="https://www.freepnglogos.com/uploads/lion-logo-png/lion-logo-transparent-png-svg-vector-27.png"   width="50px" height="50px" alt="Foo Co.: Where everyone can fizz the buzz" />
  </MDBCard>

 </MDBRow>


  <MDBRow className="mt-5 justify-content-center">
    <MDBCol lg="6" md="6" sm="12">
	


  <MDBCard  style={{ width: "30rem", align:"center" }}>
  <h5 className="mt-2 mb-5">SIGNUP</h5>

<h2 style={{ fontFamily: "Courier" }}  className="mt-1" >Create Your Account</h2>
<h5>Lorem ipsum dolor sit amet, consectetur</h5>

 <MDBRow style={{ width: "28rem" }} className="ml-2">
    <MDBCol  lg="6" md="6" sm="12" className="mt-2">

 <GoogleLogin
        clientId="197093874506-cs49mb7ob96lqn0arofo6ref8g5nivp4.apps.googleusercontent.com" 
        buttonText="Sign up with google"
        onSuccess={responseGoogle}
        
      />

</MDBCol>
    <MDBCol  lg="6" md="6" sm="12">
   <FacebookLogin
        appId="397319604586325" 
	textButton="Sign up with Facebook"
        fields="name,email,picture"
        callback={responseFacebook}
	icon="fa-facebook"

	cssClass="btnFacebook"
    
      />

</MDBCol>
    
  </MDBRow>


 <MDBRow style={{ width: "28rem" }} className="ml-3">

    <MDBCol md="5" lg="5" sm="5"><hr /></MDBCol>
    <MDBCol md="2" lg="2" sm="2">or</MDBCol>
    <MDBCol md="5" lg="5" sm="5"><hr /></MDBCol>


  </MDBRow>

   
     <form style={{ width: "28rem" }} onSubmit={this.handleSubmit}>
<input type="text" name="firstname" onChange={this.handleChange} placeholder="First Name" className="form-control ml-3 mb-3 mt-3" required/>
<input type="text" name="lastname" onChange={this.handleChange} placeholder="Last Name" className="form-control ml-3 mb-3" required/>
<input type="email" name="email" onChange={this.handleChange} placeholder="Email Address" className="form-control ml-3 mb-3" required/>
<div>
<input type="password" name="password" onChange={this.handleChange} placeholder="Password" className="form-control ml-3 mb-3" required/>
 
</div>
<br/>
<p  style={{ fontSize:"14px" }}> &nbsp; &nbsp; &nbsp; by clicking sign up you agree to our <a href="" style={{ color:"#03c2fc" }}> Terms of Use </a> and <a href="" style={{ color:"#03c2fc" }}> Privacy Policy. </a></p>
<br/>
<input type="submit" style={{ backgroundColor:"#03c2fc" }} value="SIGN UP" className="form-control ml-3 mb-3"/> 
</form>
      </MDBCard>


            </MDBCol>

          </MDBRow>
<br/>
<br/>

 <textarea rows={10} cols={30} value={this.state.textareaValue} 
           ></textarea>



        </MDBContainer>
     
   
     

     

      </div>
    );
  }
}

export default App;
