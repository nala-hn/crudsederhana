import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import EditForm from "./EditForm";

function Users({ user, users }) {
    console.log(users);
    return (
        <AuthenticatedLayout
            user={user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    User
                </h2>
            }
        >
            <Head title="User" />

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>time</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                                <th>
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                        href={`/edit/user/${user.id}`}
                                    >
                                        <PencilSquareIcon className="size-4 text-blue-700" />
                                    </button>
                                    
                                    <Link
                                        href={route("items.index")}
                                        className="btn btn-ghost btn-xs"
                                    >
                                        <TrashIcon className="size-4 text-red-700" />
                                    </Link>

                                    <EditForm ></EditForm>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}

export default Users;
