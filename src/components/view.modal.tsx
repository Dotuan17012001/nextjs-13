"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface VProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  userDataView: IBlog | null
  setUserDataView: (value:IBlog | null) => void
}

function ViewModal(props:VProps) {
  const { showModal, setShowModal, userDataView, setUserDataView } = props;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);
  
  console.log("check userDataView >>>", userDataView)
  
    useEffect (()=>{
     if(userDataView && userDataView.id){
      setTitle(userDataView?.title)
      setAuthor(userDataView?.author)
      setContent(userDataView?.content)
      setId(userDataView?.id)
     }
    },[userDataView])
  
 
  const handleClose = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setUserDataView(null)
    setShowModal(false);
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update user here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewModal;
