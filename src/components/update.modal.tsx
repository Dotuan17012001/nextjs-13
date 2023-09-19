"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface IProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  userData: IBlog | null
  setUserData: (value:IBlog | null) => void
}

function UpdateModal(props:IProps) {

  const { showModal, setShowModal, userData , setUserData} = props;

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [id, setId] = useState<number>(0);
  
  console.log("check userData >>>", userData)
  
    useEffect (()=>{
      if(userData && userData.id){
        setTitle(userData?.title)
        setAuthor(userData?.author)
        setContent(userData?.content)
        setId(userData?.id)
      }
    },[userData])
  
  const handleUpdate = async () => {
    // console.log("check data")
    if(!title){
        toast.error("Not empty title !")
        return
    }
    if(!author){
        toast.error("Not empty author !")
        return
    }
    if(!content){
        toast.error("Not empty content !")
        return
    }

    const res = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ title, author, content })
        })

        const data = await res.json();
    console.log("check data >>>", data);
    if (data) {
      toast.warning("Update data success :)");
    }
    handleClose();
    mutate('http://localhost:8000/blogs')
  };
  const handleClose = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setUserData(null)
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
          <Button variant="primary" onClick={() => handleUpdate()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
