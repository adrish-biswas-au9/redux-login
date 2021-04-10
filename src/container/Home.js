import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SignupComponent.css';

import { connect } from 'react-redux';
import { wishlist_add, wishlist_delete } from '../actions/actionfile';


class Home extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      allowSignup: false
    }
  }
  
  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }
  handleChangeRole = (event) => {
    // console.log(event.target.value);
    this.setState({ role: event.target.value })
  }

  componentDidUpdate() {
    if (this.state.email && this.state.name && this.state.password && !this.state.allowSignup) {
      this.setState({ allowSignup: true })
    }
    if ((!this.state.email || !this.state.password || !this.state.name) && this.state.allowSignup) {
      this.setState({ allowSignup: false })
    }
    
  }
  handleSubmit = () => {
    //console.log(this.state)
    this.props.dispatch(wishlist_add({
      id: Math.floor(Math.random() * 10000),
      name: this.state.name,
      email:this.state.email,
      password: this.state.password,
      date: new Date().toDateString()
    }))
    alert("Account registered!")
    this.props.history.push('/LoginComponent')
  }
  render() {
    return (

      <div className='welcome_background' style={{marginTop:'40px'}} >
        <div class="container"> <br />
          <div class="row">
          <div className="col-xs-5 col-sm-6 col-lg-4">
              {/* <div style={{ textAlign: 'center' }}>
                <NavLink to='./LoginComponent'><button className="btn" style={{ margin: '10px', backgroundColor: '#111', color: 'white', display: 'inline-block' }}>LOGIN </button></NavLink>
                <NavLink to='./'><button className="btn " style={{ backgroundColor: '#1278a8', color: 'black', display: 'inline-block' }} > SIGNUP</button></NavLink>
              </div> */}
            </div>
          </div>

          <div className="row">
            <div class="col-xs-5 col-sm-6 col-lg-4" style={{ textAlign: 'center' }}>
              <div className="sub-col" >
                <div className="panel panel-danger" style={{
                  backgroundColor: '#1278a8', borderRadius: '2px', padding: '15px', color: 'black', display: 'inline-block'
                }}>
                  <h5 > Profile </h5>
                  <hr style={{ backgroundColor: 'black', height: '2px' }}></hr>

                  <p style={{ color: '#c6461e' }}>{this.state.error}</p>
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="control-label">Name</label>
                      <input type="text" name="name" value={this.state.name} className="form-control"
                        required onChange={this.handleChangeName} />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <input type="email" name="email" value={this.state.email} className="form-control"
                        required onChange={this.handleChangeEmail} />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Password</label>
                      <input type="password" name="password" value={this.state.password} className="form-control"
                        onChange={this.handleChangePassword} required />
                    </div>
                    {
                      this.state.allowSignup ? <button className="but" onClick={this.handleSubmit}>Update</button> : null
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(Home);
