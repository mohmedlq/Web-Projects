import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="mx-auto max-w-6xl px-6 pt-6">

            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Contacts Blog
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage your contacts easily
                    </p>
                </div>

                <div className="hidden rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600 sm:block">
                    CRUD App
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">

                <Link
                    to="/"
                    className="rounded-xl px-5 py-2.5 font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                >
                    Home
                </Link>

                <Link
                    to="/contacts"
                    className="rounded-xl px-5 py-2.5 font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                    Contacts List
                </Link>

                <Link
                    to="/addNew"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                    + Add Contact
                </Link>

            </nav>
        </header>
    );
}
