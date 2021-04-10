import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { wishlist } from '../actions/actionfile';
import './LoginComponent.css';

class LoginComponent extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: '',
      role: '',
      allowLogIn: false
    }
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }
  componentDidUpdate() {
    if (this.state.email && this.state.password && !this.state.allowLogIn) {
      this.setState({ allowLogIn: true })
    }
    if ((!this.state.email || !this.state.password) && this.state.allowLogIn) {
      this.setState({ allowLogIn: false })
    }
  }
  handleSubmit = () => {
    let in_wishlist = false;
    this.props.wishlist.map((item) => {
      if (item.email === this.state.email && item.password === this.state.password) {
        in_wishlist = true;
      }
    })
    if(in_wishlist){
      this.props.history.push('/home');
    }
    else{
      this.setState({ error: "Invalid Credentials!!!" })
    }
  }

  render() {
    return (

      <div className="welcome_background " style={{marginTop:'40px'}} >
        <div className="container" > <br />
          <div className="row ">           
            <div className="col-xs-5 col-sm-6 col-lg-4">
              <div style={{ textAlign: 'center' }} >
                {/* <h5 style={{ margin: '10px', color: '#cccdb4', display: 'inline-block' }}>JWT</h5> */}
                <NavLink to='./LoginComponent'><button className="btn" style={{ margin: '10px', backgroundColor: '#1278a8', color: 'black', display: 'inline-block' }}>LOGIN </button></NavLink>
                <NavLink to='./'><button className="btn " style={{ backgroundColor: '#111', color: 'white', display: 'inline-block' }} > SIGNUP</button></NavLink>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-5 col-sm-6 col-lg-4" style={{ textAlign: 'center' }}>
              <div className="sub-col" >
                <div className="panel panel-danger" style={{
                  backgroundColor: '#1278a8', borderRadius: '2px', padding: '15px', color: 'black', display: 'inline-block'
                }}>
                  <div className="panel-heading">
                    <h5>Login</h5>
                    <hr style={{ backgroundColor: 'black', height: '2px' }}></hr>
                  </div>
      
                  <p style={{ color: '#c6461e' }}>{this.state.error}</p>

                  <div className="panel-body">
                    <div className="">
                      <label className="control-label">Email</label>
                      <input type="email" name="order_id" value={this.state.email} className="form-control"
                        onChange={this.handleChangeEmail} required />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Password</label>
                      <input type="password" name="order_id" value={this.state.password} className="form-control"
                        onChange={this.handleChangePassword} required />
                        
                    </div>
                    {
                      this.state.allowLogIn ? <button className="but" onClick={this.handleSubmit}>Login</button> : null
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
  async componentDidMount() {
    // console.log(this.props.match.params.id)
    await this.props.dispatch(wishlist());
  }
}


function mapStateToProps(state) {
  console.log(state.wishlist)
  return {
    wishlist: state.wishlist
  }

}

export default connect(mapStateToProps)(LoginComponent);
