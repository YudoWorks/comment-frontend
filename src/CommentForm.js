import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CommentForm({comment, handleComment}) {
	const [text, setText] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		const newComment = {
			text,
			id: comment.length + 1
		}

		setText('');

		handleComment([newComment, ...comment]);
	}
	return (
		<div className='CommentForm' style={{backgroundColor: 'whitesmoke', height: '100vh', padding:"1rem"}}>
			<h1>Create Comment</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="comment">
					<Form.Label>Comment</Form.Label>
					<Form.Control as="textarea" placeholder="Comment" style={{height: '100px'}} value={text} onChange={e => setText(e.target.value)}/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}
