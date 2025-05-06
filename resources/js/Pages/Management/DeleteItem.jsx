import React from "react";
import { useForm } from "@inertiajs/react";

function DeleteItem({ itemId, itemName, modalId = "delete_modal" }) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = () => {
        destroy(route("items.destroy", itemId), {
            preserveScroll: true,
            onSuccess: () => {
                document.getElementById(modalId).close();
            },
        });
    };

    return (
        <dialog id={modalId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Delete Confirmation</h3>
                <p className="py-4">Are you sure you want to delete <strong>{itemName}</strong>?</p>
                <div className="modal-action">
                    <button className="btn" onClick={() => document.getElementById(modalId).close()}>
                        Cancel
                    </button>
                    <button className="btn btn-error" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </dialog>
    );
}

export default DeleteItem;
