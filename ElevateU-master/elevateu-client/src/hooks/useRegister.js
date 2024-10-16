"use client";
import { useState } from 'react';
import { fetcher } from '../utils/fetcher';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (first_name, last_name, user_name, email, password, password_confirmation) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetcher('/api/auth/register', {
        method: 'post',
        body: JSON.stringify({first_name, last_name, user_name, email, password, password_confirmation }), // Include username
      });
      console.log("data from sign up hooks" + data);

      // Handle successful registration, like redirecting or storing user details
      return data;
    } catch (err) {
      setError(err.response.data || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};