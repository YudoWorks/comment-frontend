import React from 'react'
import Comment from './Comment'
import CardColumns from 'react-bootstrap/CardColumns'

function CommentList({comment}) {

	return (
		<div style={{backgroundColor: 'lightblue', height: '100vh'}}>
			<h1>This is list of comment</h1>
			<CardColumns>
				{
					comment.map( comment => 
						<Comment key={comment.id} text={comment.text} />
					)
				}
			</CardColumns>
		</div>
	)
}

export default CommentList
