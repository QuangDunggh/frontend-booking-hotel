import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRoomById } from '../utils/ApiFunction';

const EditRoom = () => {
  const [updateRoom, setUpdateRoom] = useState({
    roomPrice: "",
    roomType: "",
    photo: null
  });

  const [imagePreview, setImagePreview] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [messageError, setMessageError] = useState("");

  const {roomId} = useParams(); 
  useEffect(() => {
    getRoomById(roomId).then((data) => {
      setUpdateRoom(data);
    })
  },[roomId]);

  const handlePreviewChange = (e) => {
    const selectedImage = e.target.files[0];
    setUpdateRoom({... updateRoom, photo: selectedImage});
    setImagePreview(URL.createObjectURL(selectedImage));
  }

  const handleChangeInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setUpdateRoom({...updateRoom, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }


  return (
    <>
      <section className='container mt-5 mb-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>
            <h2>Edit the room</h2>
            {messageSuccess && (
              <div className='alert alert-success fade out'>{messageSuccess}</div>
            )}
            {messageError &&(
              <div className='alert alert-danger fade out'>{messageError}</div>
            )}
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='mb-3'>
                
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditRoom