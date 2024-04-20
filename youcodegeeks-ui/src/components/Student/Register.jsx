import {useState} from "react";
import {registerSchema} from "@/Validations/User.js";

export const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        className: '',
        password: '',
        password_confirmation: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        registerSchema.parse(formData)
    }
    const handleInputChange = (event) => {
        const {target} = event;
        const {name, value} = target;

        setFormData({
            ...formData,
            [name]: value
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="className">Class Name:</label>
                <input
                    id="className"
                    type="text"
                    name="className"
                    value={formData.className}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                />
            </div>
            
            <button type="submit">Submit</button>
        </form>
    );
}