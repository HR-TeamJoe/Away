import React from 'react';

const Nav = (props) => {
  let login = null;
  if (props.isLoggedIn) {
    login =
      (<div 
        id='google-sign-in'
        onClick={props.clickProfile}>
        <img
          alt={props.user.displayName}
          className="profileImg"
          src={props.user.photo}
        />
        <span className="userName">
          {props.user.displayName}
        </span>
      </div>);
  } else {
    login = <div id="google-sign-in"><a href="/auth/google">Sign in with Google</a></div>;
  }

  return (
    <div>
      <div className="row middle-xs between-xs nav">
        <div className="col-xs-2 start-xs">
          <a href="/">
            <img src="../../assets/Away_logo.svg" alt="Awayyy" />
          </a>
        </div>
        <div className="col-xs-2 end-xs">
          {login}
        </div>
      </div>
    </div>
  );
};


export default Nav;
