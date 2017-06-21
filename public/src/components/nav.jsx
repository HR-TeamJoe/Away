import React from 'react'

class Nav extends React.Component {
	constructor(props) {
			super(props)
	}

	render() {
		return (
			<div>
			<div className='row middle-xs between-xs nav'> 
					<div className='col-xs-2 start-xs'>
						<img src='../../assets/Away_logo.svg' alt='Awayyy'/>
					</div>
          <div className='col-xs-2 end-xs'>
            <div id='google-sign-in'><a href="/auth/google">Sign In With Google</a></div>
          </div>
      </div>
			</div>
		)
	}
}

export default Nav