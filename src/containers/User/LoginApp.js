import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { LoginApp } from '../../components'
import { onLogin, onLogout, resetErrorMsg } from '../../actions/user'
import { URL_ROOT } from 'endpoint'

class LoginAppContainer extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    resetErrorMsg: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.resetErrorMsg()
    this.props.onLogout()
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onLogin({
      username: this.state.username,
      password: this.state.password
    })
      .then(() =>{
        if(this.props.isLoggedIn === true) {
          browserHistory.push(`${URL_ROOT}`)
        }
      })
  }

  render() {
    return(
      <LoginApp
        onUsernameChange={this.onUsernameChange}
        onPasswordChange={this.onPasswordChange}
        handleSubmit={this.handleSubmit}
        errorMsg={this.props.errorMsg}
      />
    )
  }
}

const mapStatetoProps = (state) => ({
  errorMsg: state.user.errorMsg,
  isLoggedIn: state.user.isLoggedIn
})

const mapDispatchToProps = ({
  onLogin,
  onLogout,
  resetErrorMsg
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(LoginAppContainer)
