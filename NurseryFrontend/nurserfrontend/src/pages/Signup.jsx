import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "CUSTOMER",
        profileImg: "default.jpg",
        addresses: [
            {
                street: "",
                city: "",
                state: "",
                pincode: "",
                country: "",
                isDefault: true,
            },
        ],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("address.")) {
            const field = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                addresses: [
                    {
                        ...prev.addresses[0],
                        [field]: value,
                    },
                ],
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted — check console!");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                    Create Your Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border rounded px-4 py-2 w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded px-4 py-2 w-full"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border rounded px-4 py-2 w-full"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border rounded px-4 py-2 w-full"
                            required
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="address.street"
                                placeholder="Street"
                                value={formData.addresses[0].street}
                                onChange={handleChange}
                                className="border rounded px-4 py-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="address.city"
                                placeholder="City"
                                value={formData.addresses[0].city}
                                onChange={handleChange}
                                className="border rounded px-4 py-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="address.state"
                                placeholder="State"
                                value={formData.addresses[0].state}
                                onChange={handleChange}
                                className="border rounded px-4 py-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="address.pincode"
                                placeholder="Pincode"
                                value={formData.addresses[0].pincode}
                                onChange={handleChange}
                                className="border rounded px-4 py-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="address.country"
                                placeholder="Country"
                                value={formData.addresses[0].country}
                                onChange={handleChange}
                                className="border rounded px-4 py-2 w-full"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}


export default Signup
