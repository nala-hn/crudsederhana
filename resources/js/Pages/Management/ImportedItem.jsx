import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import EditItem from "./EditItem";
import CreateItem from "./CreateItem";
import DeleteItem from "./DeleteItem";
import { PlusIcon } from "@heroicons/react/24/solid";

function ImportedItem({ user, items }) {
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        setLoading(false);
        setFilteredItems(items); // Menampilkan semua item saat awal
    }, [items]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const lowerQuery = query.toLowerCase();
        const result = items.filter((item) =>
            item.item_name.toLowerCase().includes(lowerQuery) ||
            item.hs_code.toLowerCase().includes(lowerQuery) ||
            item.origin_country.toLowerCase().includes(lowerQuery)
        );
        setFilteredItems(result);
    };

    return (
        <AuthenticatedLayout
            user={user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-center text-gray-800">
                    Imported Items
                </h2>
            }
        >
            <Head title="Imported Items" />

            <div className="py-5 flex-1 overflow-x-auto">
                <div className="mx-auto max-w-screen sm:px-6">
                    <div className="flex w-full justify-end mb-4">
                        <form
                            onSubmit={handleSubmit}
                            className="flex items-center"
                        >
                            <label className="input mr-3 flex items-center gap-2">
                                <svg
                                    className="h-[1em] opacity-50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input
                                    type="search"
                                    required
                                    placeholder="Search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="bg-transparent outline-none"
                                />
                            </label>
                        </form>
                        <button
                            className="btn btn-neutral btn-md"
                            onClick={() =>
                                document
                                    .getElementById("create_modal_1")
                                    .showModal()
                            }
                        >
                            <PlusIcon className="w-5 h-5 font-bold" />
                            Add Item
                        </button>
                    </div>

                    <CreateItem />

                    <div className="p-6 bg-white border border-gray-200 rounded-md shadow-md">
                        {loading ? (
                            <p className="text-gray-500">Loading data...</p>
                        ) : (
                            <div className="overflow-x-auto w-full">
                                <table className="table table-zebra">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th>#</th>
                                            <th>Item Name</th>
                                            <th>HS Code</th>
                                            <th>Origin</th>
                                            <th>Quantity</th>
                                            <th>Unit</th>
                                            <th>Arrival Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredItems.length === 0 ? (
                                            <tr>
                                                <td
                                                    colSpan="9"
                                                    className="px-4 py-4 text-center text-gray-500"
                                                >
                                                    No items found.
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredItems.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.item_name}</td>
                                                    <td>{item.hs_code}</td>
                                                    <td>{item.origin_country}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.unit}</td>
                                                    <td>{item.arrival_date}</td>
                                                    <td>
                                                        <span
                                                            className={`badge ${
                                                                item.inspection_status ===
                                                                "not_inspected"
                                                                    ? "badge badge-soft badge-warning"
                                                                    : item.inspection_status ===
                                                                      "inspected"
                                                                    ? "badge badge-soft badge-info"
                                                                    : item.inspection_status ===
                                                                      "cleared"
                                                                    ? "badge badge-soft badge-success"
                                                                    : "badge-neutral"
                                                            }`}
                                                        >
                                                            {
                                                                item.inspection_status
                                                            }
                                                        </span>
                                                    </td>
                                                    <td className="flex gap-1">
                                                        <button
                                                            className="btn btn-ghost btn-xs"
                                                            onClick={() =>
                                                                document
                                                                    .getElementById(
                                                                        "my_modal_1_" +
                                                                            item.id
                                                                    )
                                                                    .showModal()
                                                            }
                                                        >
                                                            <PencilSquareIcon className="size-4 text-blue-700" />
                                                        </button>

                                                        <button
                                                            className="btn btn-ghost btn-xs"
                                                            onClick={() =>
                                                                document
                                                                    .getElementById(
                                                                        "delete_modal" +
                                                                            item.id
                                                                    )
                                                                    .showModal()
                                                            }
                                                        >
                                                            <TrashIcon className="size-4 text-red-700" />
                                                        </button>

                                                        <EditItem
                                                            item={item}
                                                            modalId={
                                                                "my_modal_1_" +
                                                                item.id
                                                            }
                                                        />

                                                        <DeleteItem
                                                            itemId={item.id}
                                                            itemName={
                                                                item.item_name
                                                            }
                                                            modalId={
                                                                "delete_modal" +
                                                                item.id
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default ImportedItem;
