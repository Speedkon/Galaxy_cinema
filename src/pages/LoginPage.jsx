import React, { useState } from 'react';
import Input from '../components/Reusable/Input';
import Button from '../components/Reusable/Button';
import Navbar from '../components/Reusable/Navbar';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required.";
    // Basic Validation: Email format
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email format is invalid.";
    if (!formData.password) tempErrors.password = "Password is required.";
    // Basic Validation: Password length
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);
    if (validate()) {
      // Logic for simulated successful login
      console.log('Login successful:', formData);
      setSuccess('Login successful! Welcome back.');
      // setFormData({ email: '', password: '' }); // Optionally clear form
    }
  };

  return (
    <>
      <Navbar activeLink="Login" />
      {/* Main Form Screen - Responsive Layout */}
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] p-4">
        <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Login to Galaxy Cinema</h2>
          
          {/* Feedback State: Success Message */}
          {success && (
            <div className="bg-green-600 p-3 rounded-lg mb-4 text-center font-medium">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <Input 
              label="Email Address" 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="you@example.com"
              error={errors.email}
            />
            <Input 
              label="Password" 
              id="password" 
              type="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="******"
              error={errors.password}
            />
            
            <div className="mt-6">
              <Button type="submit" variant="primary">
                Log In
              </Button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-400 text-sm">
            Don't have an account? <a href="/register" className="text-gc-primary hover:text-yellow-400">Register Here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;