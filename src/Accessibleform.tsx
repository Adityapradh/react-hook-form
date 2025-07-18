export {};
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
};

const AccessibleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Accessible form">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name", { required: "Name is required" })} />
        {errors.name && <span role="alert">{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format"
            }
          })}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AccessibleForm;
