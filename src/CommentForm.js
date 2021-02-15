import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CommentForm() {
	return (
		<div className='CommentForm'>
			<h1>Create Comment</h1>
			<Form>
				<Form.Group controlId="comment">
					<Form.Label>Comment</Form.Label>
					<Form.Control as="textarea" placeholder="Comment" style={{height: '100px'}}/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}
