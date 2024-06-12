import React from 'react'

const User = (props) => {

  return (
    <div className='user-card'>
        <h2>Name:{props.name}</h2>
        <h3>Location:{props.location}</h3>
        <h4>COntact:@eyeaadil</h4>
    </div>
  )
}

export default User

// How do we pass props over functional based component

/*  We can destructure the props also
We directly pass the argument as destructred 
we write in this way in argument 
{name,location}


*/