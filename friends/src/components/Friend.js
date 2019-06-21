import React from 'react'


const Friend = (props) => {
    // console.log(props)
    
    return(
        <div className='friends-container'>
        {props.friends.map( friend => {
           return(
            <div className='friends'>
           <p><strong>Name: </strong>{friend.name}</p>
           <p><strong>Age: </strong>{friend.age}</p>
           <span><strong>Emali: </strong>{friend.email}</span>
            </div>
           )
        })}
        
        </div>
    )
}

export default Friend