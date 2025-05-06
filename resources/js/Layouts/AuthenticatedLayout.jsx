import { Link, usePage } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, IconButton, } from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/solid";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);
    return (
        <>
            <div className="md:flex bg-gray-100 min-h-screen w-screen">
                <div className="fixed top-4 left-4 z-50 md:hidden">
                    <IconButton onClick={() => setOpen(!open)} variant="text">
                        {open ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </IconButton>
                </div>

                {open && (
                    <div className="fixed inset-0 bg-black/30 md:hidden"></div>
                )}
                <Card
                    ref={sidebarRef}
                    className={`fixed flex flex-col overflow-y-auto h-screen z-50 top-0 left-0 w-64 md:w-[20%] bg-white p-4 rounded-none shadow-xl md:shadow-none transition-transform duration-300 ease-in-out
                    ${
                        open ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:block md:h-screen`}
                >
                    <div className="mb-2 p-4 pt-0 flex items-center">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="/storage/pie-chart-svgrepo-com.svg" />
                            </div>
                        </div>

                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="ml-3"
                        >
                            Hi, {user.name}
                        </Typography>
                    </div>
                    <div className="flex flex-col flex-grow">
                        <List>
                            <div className="flex flex-col space-y-1 flex-grow">
                                <Link href={route("dashboard")}>
                                    <ListItem
                                        active={
                                            route().current("dashboard")
                                                ? "true"
                                                : "false"
                                        }
                                    >
                                        <ListItemPrefix>
                                            <PresentationChartBarIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        Dashboard
                                    </ListItem>
                                </Link>
                                <Link href={route("items.index")}>
                                    <ListItem
                                        active={
                                            route().current("items.index")
                                                ? "true"
                                                : "false"
                                        }
                                    >
                                        <ListItemPrefix>
                                            <ShoppingBagIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        Items
                                    </ListItem>
                                </Link>
                                <Link href={route("profile.edit")}>
                                    <ListItem
                                        active={
                                            route().current("profile.edit")
                                                ? "true"
                                                : "false"
                                        }
                                    >
                                        <ListItemPrefix>
                                            <UserCircleIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        Profile
                                    </ListItem>
                                </Link>
                                <ListItem>
                                    <ListItemPrefix>
                                        <Cog6ToothIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Settings
                                </ListItem>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="mt-auto"
                                >
                                    <ListItem>
                                        <ListItemPrefix>
                                            <PowerIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        Log Out
                                    </ListItem>
                                </Link>
                            </div>
                        </List>
                    </div>
                </Card>

                <div className="flex flex-col w-screen md:w-[80%] ml-auto">
                    {header && (
                        <header className="bg-white md:w-[80%] z-40 shadow shrink-0 ">
                            <div className="mx-auto bg-white w-screen md:w-[80%] px-4 py-6 sm:px-6 lg:px-8 fixed shadow-sm -ml-2">
                                {header}
                            </div>
                        </header>
                    )}

                    <main>
                        <div className="flex mt-[72px] mx-2 z-20">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
