import React, { useEffect, useState } from 'react'
import { getRoomType } from '../utils/ApiFunction';

const RoomTypeSelected = ({ handleRoomInputChange, newRoom }) => {
    const [roomTypes, setRoomTypes] = useState([""]);
    const [showNewRoomTypeInput, setShowNewTypeInput] = useState(false);
    const [newRoomType, setNewRoomType] = useState("");

    useEffect(() => {
        getRoomType().then((data) => {
            setRoomTypes(data);
        });
    }, []);

    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);

    }

    const handleAddNewRoomType = (e) => {
        if (newRoomType !== "") {
            setRoomTypes([...roomTypes, newRoomType]);
            setShowNewTypeInput(false);
        }
    }
    return (
        <>

            {roomTypes.length > 0 && (
                <div>
                    <select
                        required
                        className='form-control'
                        id='roomType'
                        name='roomType'
                        value={newRoom.roomTypes}
                        onChange={(e) => {
                            if (e.target.value === "Add New") {
                                setShowNewTypeInput(true);
                            } else {
                                handleRoomInputChange(e);
                            }
                        }}>
                        <option value={""}>Select the room type</option>
                        <option value={"Add New"}>Add New</option>
                        {roomTypes.map((type, index) => (
                            <option value={type} key={index}>{type}</option>
                        ))}
                    </select>
                    {showNewRoomTypeInput && (
                        <div className='input-group'>
                            <input className='form-control' type='text' placeholder='Enter the new room type' onChange={(e) => handleNewRoomTypeInputChange(e)} />
                            <button className='btn btn-hotel' type='button' onClick={handleAddNewRoomType}>Add</button>
                        </div>
                    )}
                </div>
            )}

        </>
    )
}

export default RoomTypeSelected