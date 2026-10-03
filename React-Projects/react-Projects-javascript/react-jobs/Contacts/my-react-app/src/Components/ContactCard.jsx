import { useEffect, useState } from "react";
import { getContact } from "../api";
import { Link, useNavigate , useParams } from "react-router-dom";
import DeleteContact from "./Delete";

export default function ContactCard() {

    const { id } = useParams();

    const [contact, setContact] = useState({
        id:"",
        name:"",
        email:"",
        phone:"",
        message:""
    });
const navigate = useNavigate();
    const getbyid = async () => {

        if (!id) {
            return;
        }

        const data = await getContact(id);

        setContact(data);
    };

    useEffect(() => {
        getbyid();
    }, [id]);

    return (
        <div className="mx-auto mt-10 max-w-4xl px-6">

            {/* Top */}
            <div className="mb-6">
                <button onClick={()=>navigate(-1)} className="mb-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    ← Back to Contacts
                </button>

                <h1 className="text-3xl font-bold text-gray-800">
                    Contact Overview
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Detailed information about this contact
                </p>
            </div>

            {/* Main Card */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                {/* Profile Header */}
                <div className="bg-gray-50 px-8 py-10">
                    <div className="flex flex-col items-center text-center">

                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-600 ring-8 ring-white">
                            {contact?.name?.slice(0, 1).toUpperCase()}
                        </div>

                        <h2 className="mt-5 text-2xl font-bold text-gray-800">
                            {contact?.name}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Contact ID #{contact?.id}
                        </p>

                        <span className="mt-4 rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-600">
                            Active Contact
                        </span>

                    </div>
                </div>

                {/* Information */}
                <div className="px-8 py-8">

                    <h3 className="mb-5 text-lg font-semibold text-gray-800">
                        Contact Information
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">

                        <div className="rounded-2xl border border-gray-200 p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Email Address
                            </p>

                            <p className="mt-2 font-medium text-gray-700">
                                {contact?.email}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Phone Number
                            </p>

                            <p className="mt-2 font-medium text-gray-700">
                                {contact?.phone}
                            </p>
                        </div>

                    </div>

                    <div className="mt-6">

                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Message
                        </p>

                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                            <p className="leading-7 text-gray-600">
                                {contact?.message}
                            </p>
                        </div>

                    </div>

                    <div className="mt-8 flex justify-end gap-3 border-t border-gray-100 pt-6">

                         <Link
                className="rounded-lg bg-gray-500 px-2 py-2 font-semibold text-white transition hover:bg-gray-700"
                to={`/contacts/${contact.id}/edit`}
                >
                Update Contact
                </Link>
                    <DeleteContact id={contact.id}
                     ondelete={() => navigate("/contacts")}
                    />
                </div>

                </div>
            </div>

        </div>
    );
}