import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./MailchimpForm.css";

const MailChimpFormRHF = ({ status, message, onValidated }) => {
  const {
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm();
  // let email, fname, lname;
  const onSubmit = (data) => {
    const { email, fname, lname } = data;
    email &&
      fname &&
      lname &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        FNAME: fname,
        LNAME: lname,
      });
  };

  return (
    <div>
      <p>
        Sign up for our mailing list to be kept up to date with new releases and
        upcoming Zoom Bar events
      </p>
      <form class="mailchimp" onSubmit={handleSubmit(onSubmit)}>
        <div class="formItem">
          <span>First Name</span>
          <input
            {...register("fname", { required: "First Name is required" })}
            aria-invalid={errors.fname ? "true" : "false"}
          />
          {errors.fname?.type === "required" && (
            <div class="helperText">
              <p role="alert">First name is required</p>
            </div>
          )}
        </div>
        <div class="formItem">
          <span>Last Name</span>
          <input {...register("lname")} />
        </div>
        <div class="formItem">
          <span>Email</span>
          <input
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <div class="helperText">
              <p role="alert">{errors.email?.message}</p>
            </div>
          )}
        </div>

        <button type="submit" disabled={status === "success" ? true : false}>
          {status === "success" ? "Submitted" : "Submit"}
        </button>
      </form>
      <div class="helperText">
        {status === "sending" && <div>sending...</div>}
        {status === "error" && (
          <div dangerouslySetInnerHTML={{ __html: message }} />
        )}
        {status === "success" && (
          <div dangerouslySetInnerHTML={{ __html: message }} />
        )}
      </div>
    </div>
  );
};

export default MailChimpFormRHF;
