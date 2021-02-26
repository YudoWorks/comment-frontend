import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function DeleteCommentModal({id, show, handleClose, socket, setComments}) {
	useEffect(() => {
		socket.on('display-latest-comment', data => {
			setComments(data);
		})
		return () => {
			socket.disconnect();
		}
	}, [])

  function deleteHandling() {
    socket.emit('delete-comment', id);
    handleClose();
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Comment Confirmation Modal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure delete your comment ? </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>No</Button>
          <Button variant="primary" onClick={deleteHandling}>Sure</Button>
        </Modal.Footer>
    </Modal >
    </div>
  )
}

DeleteCommentModal.propTypes = {
  id: PropTypes.string,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  socket: PropTypes.object,
  setComments: PropTypes.func
}

export default DeleteCommentModal
