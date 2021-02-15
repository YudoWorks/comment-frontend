import CommentForm from './CommentForm';
import CommentList from './CommentList';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App" style={{margin: '1rem'}}>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <CommentForm />
          </Col>
          <Col>
            <CommentList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
