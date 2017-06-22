import React from 'react'

class Nav extends React.Component {
	constructor(props) {
			super(props)
	}

	render() {
    var login = null;
    console.log('aefa',this.props);
    if(this.props.isLoggedIn){
      login = <div id='google-sign-in'><a href='/api/history'><img className="profileImg" src={this.props.user.photo}/><span className="userName">{this.props.user.displayName}</span></a></div>
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
