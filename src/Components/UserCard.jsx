import React from 'react'
import Card from 'react-bootstrap/Card';
import '../App.css'
const UserCard = ({user}) => {
  console.log(user)
  return (

    <div>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        {user.username}
      </Card.Text>
      <Card.Text>
        {user.email}
      </Card.Text>
    </Card.Body>
  </Card></div>
  )
}

export default UserCard