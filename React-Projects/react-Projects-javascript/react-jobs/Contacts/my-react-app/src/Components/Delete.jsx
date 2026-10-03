import { useState } from "react";
import { getContact, deleteContact } from "../api";

export default function DeleteContact({ id ,ondelete}) {

    const [confirmation, setConfirmation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);

            const contact = await getContact(id);

            if (!contact) {
                return;
            }

            await deleteContact(id);

            setConfirmation(false);
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 3000);

        } finally {
            setLoading(false);
            setTimeout(() => {
    if (ondelete) {
        ondelete();
    }
}, 1500);
        }
    };
    
    return (
        <>
            {/* Delete Button */}
            <button
                onClick={() => setConfirmation(true)}
                className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-200"
            >
                Delete
            </button>

            {/* Confirmation */}
            {confirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">

                    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl">
                            🗑️
                        </div>

                        <h2 className="text-xl font-bold text-gray-800">
                            Delete Contact?
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Are you sure you want to delete this contact?
                            This action cannot be undone.
                        </p>

                        <div className="mt-6 flex justify-end gap-3">

                            <button
                                onClick={() => setConfirmation(false)}
                                disabled={loading}
                                className="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleDelete}
                                disabled={loading}
                                className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading ? "Deleting..." : "Delete"}
                            </button>

                        </div>

                    </div>
                </div>
            )}

            {/* Success Alert */}
            {success && (
                <div className="fixed right-6 top-6 z-[60] flex items-center gap-3 rounded-xl border border-green-200 bg-white px-5 py-4 shadow-lg">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800">
                            Contact deleted
                        </p>

                        <p className="text-sm text-gray-500">
                            The contact was deleted successfully.
                        </p>
                    </div>

                </div>
            )}
        </>
    );
}