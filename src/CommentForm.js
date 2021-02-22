import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient('http://localhost:3001');

function CommentForm({comments, setComments}) {
	const [text, setText] = useState('');

	useEffect(() => {
		socket.on('display-latest-comment', data => {
			setComments(data);
		})
		return () => {
			socket.disconnect();
		}
	}, [])

	function handleSubmit(e) {
		e.preventDefault();
		
		const newComment = {
			text,
			id: comments.length + 1
		}

		setText('');

		socket.emit('create-new-comment', newComment);
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

export default CommentForm;
