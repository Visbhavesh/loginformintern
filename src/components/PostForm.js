// src/components/PostForm.js



// src/components/PostForm.js
import React, { useState, useEffect } from 'react';
import FormControl from './FormControl';
import './Form.css'; // Import the CSS file

const PostForm = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Fetch users from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserChange = (value) => {
    setSelectedUser(value);
  };

  const titleValidation = (value) => {
    return value ? '' : 'Title is required';
  };

  const bodyValidation = (value) => {
    return value ? '' : 'Body is required';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      // Create a new post
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          userId: selectedUser,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create a new post');
      }

      // Reset form
      setSelectedUser('');
      setTitle('');
      setBody('');
      setSubmitting(false);
    } catch (error) {
      setError('An error occurred while creating the post.');
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-header">Create a New Post</h2>
      <div className='form set'>
      <FormControl label="Select User" validation={(value) => (selectedUser ? '' : 'Please select a user')} onChange={handleUserChange} />
      <FormControl label="Title" validation={titleValidation} onChange={setTitle} />
      <FormControl label="Body" validation={bodyValidation} onChange={setBody} />
  
      <button type="submit" className="submit-button" disabled={submitting}>
        Submit
      </button>
      </div>
      {error && <span className="error-message">{error}</span>}

      <div className="form-footer">
        Please fill out all required fields to create a new post.
      </div>
    </div>
  );
};

export default PostForm;
