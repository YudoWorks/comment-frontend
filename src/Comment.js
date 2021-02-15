import React from 'react'
import Card from 'react-bootstrap/Card'
import { Trash } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button'

function Comment({id, text, onShow, setDeletedCommentId}) {
	function trashbuttonHandling() {
		setDeletedCommentId(id);
		onShow();
	}

	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Text>
						{text}
					</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
					<Button variant="danger" onClick={trashbuttonHandling}>
						<Trash />
					</Button>
				</Card.Footer>
			</Card>
		</div>
	)
}

export default Comment
