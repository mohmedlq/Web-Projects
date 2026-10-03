import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAllContacts} from "../api";
import { useState,useEffect } from "react";
import DeleteContact from "./Delete";
export default function ContactsList() {
 
  const[contacts,setContacts]=useState([]);
const[search,setSearch]=useState("");
  const  getContacts= async()=>{
    const contacts=await getAllContacts();
    setContacts(contacts);
  }
  useEffect(()=>{
    getContacts();
  },[])
  const navigate=useNavigate();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
);
    return (
        <div className="mx-auto mt-10 max-w-5xl px-6">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Contacts
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage and view all your contacts
                    </p>
                </div>

                <Link
                className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                to="/addNew"
                >
                + Add Contact
                </Link>
            </div>

            {/* Search */}
            <div className="mb-6">
                <input
                    type="text"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search contacts..."
                    className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

     <div className="space-y-4">
    {filteredContacts.map((contact) => (
        <div
            key={contact.id}
            className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
            <div className="flex items-center gap-4">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                    {contact.name.slice(0,1).toUpperCase()}
                </div>

                <div>
                    <h2 className="font-semibold text-gray-800">
                        {contact.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {contact.email}
                    </p>

                    <a type="phone" href="" className="underline cursor-pointer mt-1 text-sm text-gray-400">
                        {contact.phone}
                    </a>
                </div>
            </div>

            <div className="flex gap-2">
                <Link to={`/contacts/${contact.id}`}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-black-700 hover:bg-gray-400"                
                >
                    View
                </Link>
             
                <Link
                className="rounded-lg bg-gray-500 px-2 py-2 font-semibold text-white transition hover:bg-gray-700"
                to={`/contacts/${contact.id}/edit`}
                >
                Update Contact
                </Link>

                  <DeleteContact id={contact.id}
                    ondelete={getContacts}
                />
            </div>
        </div>
    ))}
</div>
        </div>
    );
}