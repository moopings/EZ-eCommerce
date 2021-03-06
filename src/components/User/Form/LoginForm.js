import React, { PropTypes } from 'react'

const ErrorMsg = ({errorMsg}) => (
  <div className="row">
    {
      (errorMsg !== '') ? (
        <div className="center-align">
          {errorMsg}
        </div>
      ): (<span></span>)
    }
  </div>
)

const LoginForm = ({
  onUsernameChange,
  onPasswordChange,
  handleSubmit,
  errorMsg
}) => (
  <div className="card white" id="sbox-login-card">
    <div className="card-content no-padding">
    <div className="row center sb-login-header-bar">
      <span className="sb-login-header-text">Login</span>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="form-style-6 center-block" id="sbox-login-form">
          <div className="row sb-login-img center">
            <img
              id="sbox-login-logo"
              className="responsive-img"
              src="/static/images/shoebox_logo.png" />
          </div>

          <ErrorMsg errorMsg={errorMsg} />

          <div className="row">
            <div className="input-field">
              <input
                id="sb_username"
                className="sbox-login-input"
                type="text"
                placeholder="Username"
                onChange={onUsernameChange} />
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                id="sb_password"
                className="sbox-login-input"
                type="password"
                placeholder="Password"
                onChange={onPasswordChange}/>
            </div>
          </div>

          <div className="row">
            <button
              id="sbox-login-button"
              className="waves-effect waves-light btn-large orange darken-2"
              type="submit"
              onClick={handleSubmit}>Login
            </button>
          </div>

        </div>
      </form>
    </div>
  </div>
)

export default LoginForm
