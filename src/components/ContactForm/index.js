import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactForm = () => {
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [submitted, setSubmitted] = useState(null);
  // console.log(submitted);

  const onSubmit = () => {
    // e.preventDefault();
    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_m9f7j4v",
        // "YOUR_TEMPLATE_ID",
        "template_g6a44wr",
        form.current,
        // "YOUR_PUBLIC_KEY",
        "vBWVf7sYQ5SNXH8tb",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    setSubmitted(true);
    form.current.reset();
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />

    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

    <form onSubmit={handleSubmit(onSubmit)} ref={form}>
      <span>Name</span>
      <input
        {...register("player_name", { required: true })}
        aria-invalid={errors.player_name ? "true" : "false"}
      />
      {errors.player_name?.type === "required" && (
        <p role="alert">Name is required</p>
      )}

      <span>Email</span>
      <input
        {...register("email", { required: "Email Address is required" })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p role="alert">{errors.email?.message}</p>}

      <span>Address</span>
      <textarea
        {...register("address", { required: "Address is required" })}
        aria-invalid={errors.address ? "true" : "false"}
      />
      {errors.address && <p role="alert">{errors.address?.message}</p>}

      <span>I have donated via Paypal</span>
      <select {...register("donated")}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="unable">I am unable to donate</option>
      </select>
      <span>Anything else we need to know?</span>
      <textarea {...register("message")} />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      {/* <p>PS. If paying isn't possible for you please email ....</p> */}
      {/* {submitted ? (
        <p>Thanks for submitting! Someone will be in touch</p>
      ) : (
        <input type="submit" className="submit" />
      )} */}
      <button disabled={submitted} loading={submitted} text="Save">
        Submit
      </button>
    </form>
    // }
  );
};

export default ContactForm;
