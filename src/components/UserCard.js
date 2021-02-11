import React, { Component } from 'react'
import axios from 'axios'

export default class UserCard extends Component {
     constructor(){
          super()
          this.state = {
               userData: null
          }
     }

     componentDidMount(){
          axios
          .get(`https://api.github.com/users/${this.props.userName}`)
          .then((res) => {
               this.setState({ userData: res.data })
          })
          .catch((err) => console.log(err))
     }
     componentDidUpdate(){
          axios
          .get(`https://api.github.com/users/${this.props.userName}`)
          .then((res) => {
               this.setState({ userData: res.data })
          })
          .catch((err) => console.log(err))
     }

     render() {
          if (this.state.userData === null){ 
               return <h3>Loading Git Data</h3>
          }

          return (
               
               <div>
                    <h2>{this.state.userData.login}</h2>
               </div>
          )
     }
}
