"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface DProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  userDataDelete: IBlog | null
}

function DeleteModal(props:DProps) {
  const { showModal, setShowModal, userDataDelete } = props;
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  console.log("check userDataDelete >>>", userDataDelete)
  
    useEffect (()=>{
      if(userDataDelete && userDataDelete.id){
        setId(userDataDelete.id)
        setTitle(userDataDelete.title)
      }
    },[userDataDelete])
  
  const handleDelete = async () => {
    // console.log("check data")
    const res = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: null
        })

    const data = await res.json();
    console.log("check data >>>", data);
    if (data) {
      toast.error("Update data success :)");
    }
    handleClose();
    mutate('http://localhost:8000/blogs')
  };
  const handleClose = () => {
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
          <Modal.Title>Delete user here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Do you want to delete {userDataDelete?.title ? userDataDelete?.title :""}</Form.Label>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDelete()}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
