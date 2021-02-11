import React, { Component } from 'react'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userName: 'tgrede'
    }
  }

  setUserName = (name) => {
    this.setState({
      userName: name
    })
  }

  render() {
    return (
      <div>
        <UserForm setUserName={this.setUserName} />
        <UserCard userName={this.state.userName} />
      </div>
    )
  }
}
