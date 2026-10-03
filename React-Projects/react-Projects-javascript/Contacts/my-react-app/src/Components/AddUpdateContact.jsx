
import { useEffect, useState } from "react";
import { getContact, addContact, editContact } from "../api";
import { useNavigate, useParams } from "react-router-dom";

export default function AddUpdateContact() {

    const { id } = useParams();
    const navigate = useNavigate();

    const mode = id ? "update" : "add";

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const getContactData = async () => {

        if (!id) {
            return;
        }

        const data = await getContact(id);

        setContact(data);
    };

    useEffect(() => {
        getContactData();
    }, [id]);

    const handleonsubmit = async (e) => {
        e.preventDefault();

        if (mode === "add") {
            await addContact(contact);
            navigate("/contacts");
            return;
        }

        await editContact(id, contact);
        navigate("/contacts");
    };

    return (
        <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-8 shadow-lg">

            <h1 className="mb-2 text-3xl font-bold text-gray-800">
                {mode === "add" ? "Add Contact" : "Update Contact"}
            </h1>

            <p className="mb-8 text-sm text-gray-500">
                {mode === "add"
                    ? "Fill in the information below to create a new contact."
                    : "Update the contact information below."
                }
            </p>

            <form onSubmit={handleonsubmit} className="space-y-5">

                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        value={contact.name}
                        onChange={(e) =>
                            setContact({
                                ...contact,
                                name: e.target.value
                            })
                        }
                        placeholder="Ahmed Ali"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={contact.email}
                        onChange={(e) =>
                            setContact({
                                ...contact,
                                email: e.target.value
                            })
                        }
                        placeholder="ahmed.ali@example.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Phone
                    </label>

                    <input
                        id="phone"
                        type="tel"
                        value={contact.phone}
                        onChange={(e) =>
                            setContact({
                                ...contact,
                                phone: e.target.value
                            })
                        }
                        placeholder="+966501234567"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        rows="5"
                        value={contact.message}
                        onChange={(e) =>
                            setContact({
                                ...contact,
                                message: e.target.value
                            })
                        }
                        placeholder="Write your message..."
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
                >
                    {mode === "add" ? "Add Contact" : "Update Contact"}
                </button>

            </form>
        </div>
    );
}
