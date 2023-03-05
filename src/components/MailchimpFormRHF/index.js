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
    <>
      <div className="formWrapper">
        <form className="mailchimp" onSubmit={handleSubmit(onSubmit)}>
          <div className="formItem">
            <label className="input-label">First Name</label>
            <input
              {...register("fname", { required: "First Name is required" })}
              placeholder="First Name"
              aria-invalid={errors.fname ? "true" : "false"}
            />
            {errors.fname?.type === "required" && (
              <div className="helperText">
                <p role="alert">First name is required</p>
              </div>
            )}
          </div>
          <div class="formItem">
            <label class="input-label">Last Name</label>
            <input {...register("lname")} placeholder="Last Name" />
          </div>
          <div class="formItem">
            <label class="input-label">Email</label>
            <input
              {...register("email", { required: "Email Address is required" })}
              placeholder="Email address"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <div class="helperText">
                <p role="alert">{errors.email?.message}</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            class="raise"
            disabled={status === "success" ? true : false}
          >
            {status === "success" ? "Submitted" : "Submit"}
          </button>
          <div class="helperText">
            {status === "sending" && <div>sending...</div>}
            {status === "error" && (
              <div dangerouslySetInnerHTML={{ __html: message }} />
            )}
            {status === "success" && (
              <div dangerouslySetInnerHTML={{ __html: message }} />
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default MailChimpFormRHF;
