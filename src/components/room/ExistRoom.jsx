import React, { useEffect, useState } from 'react'
import { getAllRoom } from '../utils/ApiFunction';
import { Col } from 'react-bootstrap';
import RoomFilter from '../common/RoomFilter';
import RoomPanigator from './../common/RoomPanigator';

const ExistRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [roomsPerPage] = useState(8);
    const [isLoanding, setIsLoading] = useState(false);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [selectedRoomType, setSelectedRoomType] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchRoom();
    }, []);

    const fetchRoom = async () => {
        setIsLoading(true);
        try {
            const result = await getAllRoom();
            setRooms(result);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.errorMessage);
        }
    }

    useEffect(() => {
        if (selectedRoomType === "") {
            setFilteredRooms(rooms);
        } else {
            const filtered = rooms.filter((room) => room.roomType === selectedRoomType);
            setFilteredRooms(filtered);
        }

        setCurrentPage(1);
    }, [rooms, selectedRoomType]);

    const calculateTotalPages = (filteredRooms, roomsPerPage, rooms) => {
        const totalRooms = filteredRooms.length > 0 ? filteredRooms.length : rooms.length;
        return Math.ceil(totalRooms / roomsPerPage);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

    return (
        <>
            {isLoanding ? (
                <p>Loading exist rooms</p>
            ) : (
                <section className='mt-5 mb-5 container'>
                    <div className='d-flex justify-content-center mb-3 mt-5'>
                        <h2>Existing rooms</h2>
                    </div>
                    <Col md={6} className='mb-3 mb-md-0'>
                        <RoomFilter data={rooms} setFilteredData={setFilteredRooms} />
                    </Col>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr className='text-center'>
                                <th>ID</th>
                                <th>Room Type</th>
                                <th>Room Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRooms.map((room) => (
                                <tr key={room.id} className='text-center'>
                                    <td>{room.id}</td>
                                    <td>{room.roomType}</td>
                                    <td>{room.roomPrice}</td>
                                    <td>
                                        <button className='btn btn-outline-warning'>View / Edit</button>
                                        <button className='btn btn-outline-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <RoomPanigator
                        currentPage={currentPage}
                        totalPages={calculateTotalPages(filteredRooms, roomsPerPage, rooms)}
                        onPageChange={handlePageClick} />
                </section>
            )}
        </>
    )
}

export default ExistRoom