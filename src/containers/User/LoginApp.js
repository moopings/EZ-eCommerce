import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginApp } from '../../components'
import { onLogin } from '../../actions/user'

class LoginAppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }

  render() {
    return(
      <LoginApp
        onUsernameChange={this.onUsernameChange}
        onPasswordChange={this.onPasswordChange}
        onLogin={() => this.props.onLogin({
          username: this.state.username,
          password: this.state.password
        })}
        errorMsg={this.props.errorMsg}
      />
    )
  }
}

const mapStatetoProps = (state) => ({
  errorMsg: state.user.errorMsg
})

const mapDispatchToProps = ({
  onLogin
})

export default connect(mapStatetoProps, mapDispatchToProps)(LoginAppContainer)
