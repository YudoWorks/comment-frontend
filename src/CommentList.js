import React from 'react'
import Comment from './Comment'
import CardColumns from 'react-bootstrap/CardColumns'

function CommentList() {
	const arrayOfComment = [
		{'text': 'CSS top Property 1 CSS top Property 1 CSS top Property 1CSS top Property 1 CSS top Property 1 CSS top Property 1', id: 1},
		{'text': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, id: 2},
		{'text': 'CSS top Property 3 ', id: 3},
		{'text': 'CSS top Property 4', id: 4},
		{'text': 'CSS top Property 5 ', id: 5},
		{'text': 'CSS top Property 6', id: 6},
		{'text': 'CSS top Property 7 ', id: 7},
		{'text': 'CSS top Property 8', id: 8},
		{'text': 'CSS top Property 9', id: 9},
		{'text': 'CSS top Property 10', id: 10},
		{'text': 'CSS top Property 11', id: 11},
		{'text': 'CSS top Property 12', id: 12},
		{'text': 'CSS top Property 13', id: 13},
		{'text': 'CSS top Property 14', id: 14},
		{'text': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, id: 15},
	]

	return (
		<div style={{backgroundColor: 'lightblue'}}>
			<h1>This is list of comment</h1>
			<CardColumns>
				{
					arrayOfComment.map( comment => 
						<Comment id={comment.id} text={comment.text} />
					)
				}
			</CardColumns>
		</div>
	)
}

export default CommentList
