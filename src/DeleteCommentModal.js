import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function DeleteCommentModal({id, show, handleClose, setRefetched}) {
  function deleteHandling() {
    axios.delete(`http://localhost:3001/comments/${id}`)
		.then(() => {
      handleClose();
      setRefetched(true);
		})
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

export default DeleteCommentModal
