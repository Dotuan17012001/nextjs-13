"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CreateModal from "./create.modal";
import { useState } from "react";
import UpdateModal from "./update.modal";
import ViewModal from "./view.modal";
import DeleteModal from "./delete.modal";
interface IProps {
  blogs: IBlog[];
}
const TableApp = (props: IProps) => {
  const { blogs } = props;
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  
  const [userData, setUserData] = useState<IBlog | null>(null);
  

  console.log("check props >>>", blogs);

  const handleUpdate = (blog:IBlog) => {
    setShowModalUpdate(true);
    if(blog){
      setUserData(blog);
    }
    // console.log("check blog",blog)
  };
  const handleView = (blog:IBlog) => {
      setShowModalView(true);
      if(blog){
        setUserData(blog);
      }
  };
  const handleDelete = (blog:IBlog) => {
    setShowModalDelete(true);
    setUserData(blog);
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="mb-3"
      >
        <h3>Table Blogs</h3>
        <Button variant="success" onClick={() => setShowModal(true)}>
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>

                <td style={{ display: "flex", gap: "15px" }}>
                  <Button variant="info" onClick={() => handleView(blog)}>View</Button>
                  <Button variant="warning" onClick={() => handleUpdate(blog)}>Edit</Button>
                  <Button variant="danger" onClick={()=>handleDelete(blog)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
      />
      <UpdateModal
        showModal={showModalUpdate}
        setShowModal={setShowModalUpdate}
        userData={userData}
        setUserData = {setUserData}
      />
      <ViewModal
        showModal={showModalView}
        setShowModal={setShowModalView}
        userDataView={userData}
        setUserDataView = {setUserData}
      />
      <DeleteModal
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        userDataDelete={userData}
      />
    </>
  );
};

export default TableApp;
