import React, { useState } from 'react'
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const initialComment = []

function App() {
  const [comment, setComment] = useState(initialComment);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={3}>
            <CommentForm comment={comment} handleComment={setComment}/>
          </Col>
          <Col>
            <CommentList comment={comment}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
