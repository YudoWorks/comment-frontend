import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function Comment({text}) {
	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Text>
						{text}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Comment
