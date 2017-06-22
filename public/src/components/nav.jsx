import React from 'react';
import axios from 'axios';

class Nav extends React.Component {
	constructor(props) {
			super(props)
	}

	render() {
    var login = null;
    if(this.props.isLoggedIn){
      login = <div id='google-sign-in' onClick={this.props.clickProfile}><img className="profileImg" src={this.props.user.photo}/><span className="userName">{this.props.user.displayName}</span></div>
    }else {
      login = <div id='google-sign-in'><a href='/auth/google'>Sign in with Google</a></div>;
    }

		return (
			<div>
  			<div className='row middle-xs between-xs nav'>
  					<div className='col-xs-2 start-xs'>
              <a href="/">
  						  <img src='../../assets/Away_logo.svg' alt='Awayyy'/>
              </a>
  					</div>
            <div className='col-xs-2 end-xs'>
              {login}
            </div>
        </div>
			</div>
		)
	}
}

export default Nav
