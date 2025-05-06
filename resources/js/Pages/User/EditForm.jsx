import React from "react";
import { useForm, usePage } from "@inertiajs/react";

function EditForm({ className = "" }) {
    console.log();
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };
    return (
        <section className={className}>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                                <legend className="fieldset-legend font-bold text-lg">
                                    Edit
                                </legend>

                                <label
                                    htmlFor="name"
                                    value=""
                                    className="label"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    className="input w-full"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                    isFocused
                                    autoComplete="name"
                                />

                                <label className="label">E-mail</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="input w-full"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    autoComplete="username"
                                />

                                <div className="ml-auto mt-2">
                                    <button className="btn btn-outline btn-error mr-1">
                                        Cancle
                                    </button>

                                    <button className="btn btn-outline btn-primary">
                                        Save
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </dialog>
            </div>
        </section>
    );
}

export default EditForm;
