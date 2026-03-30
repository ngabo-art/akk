import React, { useState } from "react";
// import './App.css';
// import Image from "./assets/image.jpg";


const Navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);   

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-gray-800 text-white">

                <button 
                    className="text-2xl lg:hidden" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    option
                </button>

                <h1 className="text-2xl font-bold">My school</h1>
                
            </div>

            <ul className={`flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-gray-800 text-white
                ${isOpen ? "block" : "hidden"} lg:flex`}>

                <form onSubmit={handleSubmit} className="space-y-2">
                    <h2>Register</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        /><br></br>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="text-black p-1"
                    /><br></br>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className="text-black p-1"
                    /><br></br>

                    <button type="submit" className="bg-blue-500 px-2 py-1" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>

                <li>home</li>
                <li>register</li>
                <li>login</li>
            </ul>
        </>
    );
};

export default Navbar;
