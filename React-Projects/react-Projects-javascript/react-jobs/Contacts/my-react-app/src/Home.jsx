import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-14">

            {/* Hero */}
            <section className="rounded-3xl border border-gray-200 bg-white px-8 py-14 text-center shadow-sm md:px-16">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                    📇
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
                    Welcome to Contacts Blog
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
                    A simple and clean place to manage, view, and organize
                    your contacts with ease.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                    <a
                        href="/contacts"
                        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        View Contacts
                    </a>

                    
                   
                <Link
                className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                to="/addNew"
                >
                + Add Contact
                </Link>

                </div>
            </section>

            {/* Features */}
            <section className="mt-8 grid gap-5 md:grid-cols-3">

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                        👥
                    </div>

                    <h2 className="text-lg font-bold text-gray-800">
                        Manage Contacts
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        View and manage all your contacts from one place.
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                        ⚡
                    </div>

                    <h2 className="text-lg font-bold text-gray-800">
                        Simple & Fast
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Keep your contact management simple, clean, and easy
                        to use.
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                        🛠️
                    </div>

                    <h2 className="text-lg font-bold text-gray-800">
                        Full CRUD
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Create, view, update, and delete contacts with ease.
                    </p>
                </div>

            </section>

            {/* Bottom Info */}
            <section className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">
                <p className="text-sm font-medium text-blue-700">
                    Built with React, Tailwind CSS, Axios, and a REST API.
                </p>
            </section>

        </main>
    );
}