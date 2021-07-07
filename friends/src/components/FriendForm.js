import React from 'react'
import { Link } from 'react-router-dom'


class FriendForm extends React.Component{
    constructor(){
        super()
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }

    }

    handleChange = (e) => {
        e.persist()
       this.setState(prevState => ({
           friend: {
             ...prevState.friend,
             [e.target.name]: e.target.value

           }
       })) 
    }

    handleSubmit = (e) => {
        this.props.addFriend(e, this.state.friend)
        this.setState({

            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render(){
        return(
            <div>
                <Link to='/friends-list' className='friends-list'>Friends List</Link>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input className='input' type='text' name='name' placeholder='Name' value={this.state.friend.name} onChange={this.handleChange}/>
                    <input className='input' type='number' name='age' placeholder='Age' value={this.state.friend.age} onChange={this.handleChange}/>
                    <input className='input' type='email' name='email' placeholder='Email' value={this.state.friend.email} onChange={this.handleChange}/>
                    <button className='add-friend-btn'onClick={this.handleSubmit}>Add Friend</button>
                </form>
            </div>
        )

    }

}

export default FriendForm