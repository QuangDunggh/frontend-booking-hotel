import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8989"
})

// This function add a new room to database
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);

    const response = (await api.post("/api/v1/rooms", formData));

    if (response.status == 201) {
        return true;
    } else {
        return false;
    }
}

// This function gets all type from database
export async function getRoomType() {
    try {
        const response = await api.get("/api/v1/rooms/room-types");
        return response.data;
    } catch (error) {
        throw new Error("Error fetching room type");
    }
}

export async function getAllRoom() {
    try {
        const response =await api.get("/api/v1/rooms");
        return response.data;
    } catch (error) {
        throw new Error("Error fetching all room");
    }
}