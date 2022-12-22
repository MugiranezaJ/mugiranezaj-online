import { useState } from "react";

export default function Portfolio() {
    const [open, setOpen] = useState(false);
    console.log("here portfolio")
    return (
        <div className="flex">
            <div className="container mx-auto mt-12 ">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            12,00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}