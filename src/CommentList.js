import React from 'react'
import Comment from './Comment'
import CardColumns from 'react-bootstrap/CardColumns'

function CommentList({comment}) {

	return (
		<div style={{padding:"1rem"}}>
			<h1>List of {comment.length > 1 ? 'Comments' : 'Comment' }</h1>
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
