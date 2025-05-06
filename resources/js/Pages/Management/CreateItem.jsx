import React from "react";
import { useForm } from "@inertiajs/react";

function CreateItem({ modalId = "create_modal_1", className = "" }) {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            item_name: "",
            hs_code: "",
            origin_country: "",
            quantity: "",
            unit: "",
            arrival_date: "",
            inspection_status: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("items.store"), {
            onSuccess: () => {
                const alertDiv = document.createElement("div");
                alertDiv.setAttribute("role", "alert");
                alertDiv.className =
                    "alert alert-success fixed top-4 right-4 z-50 flex items-center gap-2";
                alertDiv.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Data updated successfully.</span>
                `;
                document.body.appendChild(alertDiv);
                setTimeout(() => {
                    alertDiv.remove();
                }, 3000);
                document.getElementById(modalId).close();
            },
        });
    };

    return (
        <>
            <section className={className}>
                <dialog id={modalId} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>

                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                                <legend className="fieldset-legend font-bold text-lg">
                                    Add Items
                                </legend>

                                <div className="mb-2">
                                    <label
                                        htmlFor="item_name"
                                        value=""
                                        className="label"
                                    >
                                        Item Name
                                    </label>
                                    <input
                                        type="text"
                                        value={data.item_name}
                                        onChange={(e) =>
                                            setData("item_name", e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                    {errors.item_name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.item_name}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label
                                        htmlFor="hs_code"
                                        value=""
                                        className="label"
                                    >
                                        HS Code
                                    </label>
                                    <input
                                        type="text"
                                        value={data.hs_code}
                                        onChange={(e) =>
                                            setData("hs_code", e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                    {errors.hs_code && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.hs_code}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label
                                        htmlFor="origin_country"
                                        value=""
                                        className="label"
                                    >
                                        Origin Country
                                    </label>
                                    <input
                                        type="text"
                                        value={data.origin_country}
                                        onChange={(e) =>
                                            setData(
                                                "origin_country",
                                                e.target.value
                                            )
                                        }
                                        className="input input-bordered w-full"
                                    />
                                    {errors.origin_country && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.origin_country}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label
                                        htmlFor="quantity"
                                        value=""
                                        className="label"
                                    >
                                        Quantity
                                    </label>
                                    <input
                                        type="text"
                                        value={data.quantity}
                                        onChange={(e) =>
                                            setData("quantity", e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                    {errors.quantity && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.quantity}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label
                                        htmlFor="unit"
                                        value=""
                                        className="label"
                                    >
                                        Unit
                                    </label>
                                    <input
                                        type="text"
                                        value={data.unit}
                                        onChange={(e) =>
                                            setData("unit", e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                    {errors.unit && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.unit}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label
                                        htmlFor="arrival_date"
                                        value=""
                                        className="label"
                                    >
                                        Arrival Date
                                    </label>
                                    <input
                                        type="date"
                                        value={data.arrival_date}
                                        onChange={(e) =>
                                            setData(
                                                "arrival_date",
                                                e.target.value
                                            )
                                        }
                                        className="input input-bordered w-full"
                                    />
                                    {errors.arrival_date && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.arrival_date}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label
                                        htmlFor="inspection_status"
                                        value=""
                                        className="label"
                                    >
                                        Inspection Status
                                    </label>
                                    <select
                                        type="text"
                                        value={data.inspection_status}
                                        onChange={(e) =>
                                            setData(
                                                "inspection_status",
                                                e.target.value
                                            )
                                        }
                                        className="select select-bordered w-full"
                                    >
                                        <option value="" disabled>
                                            -- Select Status --
                                        </option>
                                        <option value="not_inspected">
                                            not_inspected
                                        </option>
                                        <option value="inspected">
                                            inspected
                                        </option>
                                        <option value="cleared">cleared</option>
                                    </select>
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.inspection_status}
                                    </p>
                                </div>

                                <div className="ml-auto mt-2">
                                    <button className="btn btn-outline btn-primary">
                                        Save
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </dialog>
            </section>
        </>
    );
}

export default CreateItem;
