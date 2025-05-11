import React, { useState } from "react";
import "./Form.css";
import { IoCloudUploadOutline } from "react-icons/io5";

function Form({ onSubmit }) {
  const [form, setForm] = useState({
    avatar: null,
    fullName: "",
    email: "",
    github: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, avatar: URL.createObjectURL(file) });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    console.log("form details", form);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="avatar-upload">
        <p className="header">Upload Avatar</p>
        <label htmlFor="avatarInput">
          {form.avatar ? (
            <img src={form.avatar} alt="Avatar" className="avatar-preview" />
          ) : (
            <>
            <div className="upload-icon">
              <IoCloudUploadOutline size={28} />
              <p>Drag and drop the file to upload</p>
            </div>
            
            </>
          )}
        </label>
        <input
          type="file"
          id="avatarInput"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <p className="header">Full Name</p>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        required
      />
      <p className="header">Email Address</p>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
      />
      <p className="header">GitHub Repository</p>
      <input
        type="url"
        name="github"
        placeholder="GitHub Repository"
        value={form.github}
        onChange={handleChange}
        required
      />

      <button type="submit">Generate my ticket</button>
    </form>
  );
}

export default Form;
