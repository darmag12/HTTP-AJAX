import React from 'react'

class FriendForm extends React.Component{
    constructor(){
        super()
        this.state ={
            friends: {
                name: '',
                age: '',
                email: ''
            }
        }

    }

    render(){
        return(
            <div>
                <h2>Add Friend</h2>
                <form>
                    <input type='text' name='name' placeholder='name'/>
                    <input type='number' name='age' placeholder='age'/>
                    <input type='email' name='email' placeholder='email'/>
                    <button>Add Friend</button>
                </form>
            </div>
        )

    }

}

export default FriendForm