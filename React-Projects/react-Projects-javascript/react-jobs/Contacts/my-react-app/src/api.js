import axios from "axios";

const URL = "http://localhost:3006";

export async function getAllContacts() {
    const response = await axios.get(`${URL}/contact`);
    return response.data;
}

export async function getContact(id) {
    const response = await axios.get(`${URL}/contact/${id}`);
    return response.data;
}

export async function editContact(id, contact) {
    const response = await axios.put(
        `${URL}/contact/${id}`,
        contact
    );

    return response.data;
}

export async function addContact(contact) {
    const response = await axios.post(
        `${URL}/contact`,
        contact
    );

    return response.data;
}

export async function deleteContact(id) {
    const response = await axios.delete(
        `${URL}/contact/${id}`
    );

    return response.data;
}