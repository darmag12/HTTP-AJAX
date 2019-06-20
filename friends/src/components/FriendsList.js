import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Friend from './Friend';


class FriendsList extends React.Component{
    constructor(){
        super()
        this.state = {
            friends: []
        }
        // console.log('Im in state: ',this.state.friends)
    }

    componentDidMount(){
        axios
            .get(`http://localhost:5000/friends`)
            .then(res => {
                // console.log('my data: ', res)
                this.setState({friends: res.data})
            })
            .catch(error => {
                console.log('Fetch Error: ', error)
            })
    }

    render(){
        // console.log('Im in render: ', this.state.friends)

        return(
           <Route path='/friends-list' render={ props => <Friend {...props} friends={this.state.friends}/>}/>
        )
    }
}

export default FriendsList