import React from 'react'
import Card from 'react-bootstrap/Card'

function Comment({text, id}) {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Text>
						<span style={{fontWeight: 'bold'}}>{id + ' ) '}</span>
						{text}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Comment
