import React from 'react'
import { useState } from 'react'
import { addRoom } from '../utils/ApiFunction';

export default function AddRoom() {
  const [newRoom, setNewRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: ""
  });

  const [imagePreview, setImagePreview] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoomInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name == "roomPrice") {
      if (!isNaN(value)) {
        value.parseInt(value);
      } else {
        value = "";
      }
    }

    setNewRoom({ ...newRoom, [name]: value });
  }

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setNewRoom({ ...newRoom, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice);
      if (success !== undefined) {
        setSuccessMessage("The new room was added to the database");
        setNewRoom({ photo: null, roomPrice: "", roomType: "" });
        setImagePreview("");
        setErrorMessage("");
      } else {
        setErrorMessage("Error adding room");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <>
      <section className='container mt-5 mb5'>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>
            <h2 className='mt-5 mb-2'>Add a New Room</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor='roomType' className='form-label'>Room Type</label>
                <div></div>
              </div>
              <div className='mb-3'>
                <label htmlFor='roomPrice' className='form-label'>Room Price</label>
                <input className='form-control' id='roomPrice' name='roomPrice' required onChange={(e) => handleRoomInputChange(e)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='photo' className='form-label'>Room Photo</label>
                <input type='file' className='form-control' id='photo' name='photo' required onChange={(e) => handleImageChange(e)} />
              </div>
            </form>
          </div>
        </div>
      </section>



    </>
  )
}
