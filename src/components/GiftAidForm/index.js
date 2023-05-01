import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./GiftAidForm.css";
import emailjs from "@emailjs/browser";
const GiftAidForm = () => {
  //   Arrive at the form
  // Button to next dynamically populate
  // Or go straight to the game
  // Gets emailed to Coney

  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [submitted, setSubmitted] = useState(null);

  const onSubmit = () => {
    // e.preventDefault();
    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_m9f7j4v",
        // "YOUR_TEMPLATE_ID",
        "template_pdz1zvn",
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
    <>
      <form className="giftaid" onSubmit={handleSubmit(onSubmit)} ref={form}>
        <h3>Gift Aid</h3>
        <div className="formItem">
          <label className="number center">
            I want to Gift Aid my donation of £{" "}
            <input type="number" step="0.01" /> to Coney
            {/* TODO allow them to change amount */}
          </label>
        </div>
        <div className="formItem">
          <label className="center">
            <p>
              <span> Are you able to confirm that:</span>
              <br /> You are a UK taxpayer, or have been in the last 4 years and
              The amount of income and/or capital gains tax you pay is at least
              as much as we will reclaim on your donations in this tax year.
            </p>
            <select {...register("consentGA", { required: true })}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <h3> Your Details</h3>
        <div className="formItem ">
          <label className="multiple">
            <span>First Name</span>
            <input
              {...register("fname", { required: true })}
              aria-invalid={errors.fname ? "true" : "false"}
            />
            {errors.fname?.type === "required" && (
              <p role="alert">Name is required</p>
            )}
          </label>

          <label>
            <span>Last Name</span>
            <input
              {...register("lname", { required: true })}
              aria-invalid={errors.lname ? "true" : "false"}
            />
            {errors.lname?.type === "required" && (
              <p role="alert">Name is required</p>
            )}
          </label>
        </div>
        <div className="formItem">
          <label>
            <span>Email</span>
            <input
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </label>
        </div>
        <div className="formItem ">
          <label className="multiple">
            <span>Address</span>
            <textarea
              {...register("address", { required: "Address is required" })}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address && <p role="alert">{errors.address?.message}</p>}
          </label>

          <label>
            <span>Postcode</span>
            <input
              {...register("postcode", { required: "postcode is required" })}
              aria-invalid={errors.postcode ? "true" : "false"}
            />
            {errors.postcode && <p role="alert">{errors.postcode?.message}</p>}
          </label>
        </div>
        <div className="formItem">
          <label>
            <span>Anything else we need to know?</span>
            <textarea {...register("message")} />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}
          </label>
        </div>
        {submitted ? (
          <span>Thanks!</span>
        ) : (
          <button
            disabled={submitted}
            loading={submitted}
            text="Save"
            className={submitted ? "submitted" : "funButton"}
          >
            Submit
          </button>
        )}{" "}
      </form>
      {submitted}
    </>
  );
};

export default GiftAidForm;
