import clsx from "clsx";
import { useState } from "react";

function WithComposition() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "" });
      setErrors({});
    }
  };

  const Form = ({ children, onSubmit }) => (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  );

  const FormLabel = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="form-label">
      {children}
    </label>
  );

  const FormItem = ({ children }) => (
    <div className="form-item">{children}</div>
  );

  const FormControl = ({ children }) => (
    <div className="form-control">{children}</div>
  );

  const FormMessage = ({ children }) => (
    <p className="form-message">{children}</p>
  );

  const FormField = ({ name, children, error }) => (
    <FormItem>
      <FormLabel htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </FormLabel>
      <FormControl>
        {children}
        {error && <FormMessage>{error}</FormMessage>}
      </FormControl>
    </FormItem>
  );

  const FormInput = ({ name, type = "text", value, onChange, error }) => (
    <FormField error={error} name={name}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={clsx(
          "form-input",
          error ? "border-red-500" : "border-gray-600"
        )}
      />
    </FormField>
  );

  return (
    <main className="container">
      <Form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        <FormInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <button type="submit">Submit</button>
      </Form>
    </main>
  );
}

export default WithComposition;
