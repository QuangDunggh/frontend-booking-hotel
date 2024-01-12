import React, { useState } from 'react'

const RoomFilter = ({data, setFilteredData}) => {
    const [filter, setFilter] = useState("");
    const handleSelectChange = (e) => {
        const selectedRoomType = e.target.value;
        setFilter(selectedRoomType);
        const filterRoom = data.filter((room) => room.roomType.toLowerCase().includes(selectedRoomType.toLowerCase()));
        setFilteredData(filterRoom);
    }

    const clearFilter = () => {
        setFilter("");
        setFilteredData(data);
    }

    const roomTypes = ["", new Set(data.map((room) => room.roomType))];
  return (
    <div className="input-group mb-3">
        <span className='input-group-text' id='room-type-filter'>
            Filter rooms by type
        </span>
        <select className='form-select' value={filter} onChange={handleSelectChange}>
            <option value={""}>Select in room type to filter ...</option>
            {roomTypes.map((roomType, index) => (
                <option value={roomType} key={index}>{roomType}</option>
            ))}
        </select>
        <button className='btn btn-hotel' type='button' onClick={clearFilter}>Clear filter</button>
    </div>
  )
}

export default RoomFilter