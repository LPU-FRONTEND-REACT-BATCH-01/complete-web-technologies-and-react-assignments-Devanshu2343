import React, { useState } from "react";

const MultiInputForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={input.name}
          name="name"
          onChange={handleInput}
        />

        <input
          type="email"
          placeholder="Email"
          value={input.email}
          name="email"
          onChange={handleInput}
        />

        <input
          type="password"
          placeholder="Password"
          value={input.password}
          name="password"
          onChange={handleInput}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultiInputForm;
