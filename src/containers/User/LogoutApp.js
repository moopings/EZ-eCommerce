import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { LogoutApp } from '../../components'
import { onLogout } from '../../actions/user'
import { browserHistory } from 'react-router'
import { URL_ROOT } from 'endpoint'

class LogoutAppContainer extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onLogout()
    setTimeout(() => browserHistory.push(`${URL_ROOT}`), 100)
  }

  render() {
    return (
      <LogoutApp />
    )
  }
}

const mapDispatchToProps = ({
  onLogout
})

export default connect(
  null,
  mapDispatchToProps
)(LogoutAppContainer)
