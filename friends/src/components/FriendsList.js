import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Friend from './Friend';
import FriendForm from './FriendForm'


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

    addFriend = (e, friend) => {
        e.preventDefault()
        axios
        .post(`http://localhost:5000/friends`, friend)
        .then(res => {
            this.setState({
                friends: res.data
            })

            this.props.history.push('/friends-list')
        })
        .catch(err => {
            console.log('Post Error: ', err)
        })
    }

    render(){
        // console.log('Im in render: ', this.state.friends)
        return(
            <>
           <Route exact path='/friends-list' render={ props => <Friend {...props} friends={this.state.friends}/>}/>
           <Route exact path='/friends-form' render={ props => <FriendForm {...props} addFriend={this.addFriend}/>} />
           </>
           
        )
    }
}

export default FriendsList