import React, { useState, useEffect } from 'react'
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient('http://localhost:3001');

function App() {
  const [comments, setComments] = useState(() => []);
  const [refetched, setRefetched] = useState(false);

  useEffect(() => {
		axios.get('http://localhost:3001/comments')
		.then(function (response) {
			setComments(response.data)
      setRefetched(false)
		})

	}, [refetched])

  return (
    <div className="App" style={{backgroundColor: 'lightblue'}}>
      <Container fluid>
        <Row>
          <Col xs={3} style={{padding: "0"}}>
            <CommentForm comments={comments} setComments={setComments} socket={socket}/>
          </Col>
          <Col>
            <CommentList
              style={{padding: "0"}} 
              comments={comments} 
              socket={socket} 
              setComments={setComments}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
