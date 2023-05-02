import { useForm } from "react-hook-form";
import "./MailchimpForm.css";

const MailchimpFormRHF = ({ status, message, onValidated }) => {
  // console.log(disclaimer);
  const {
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm();
  // let email, fname, lname;
  const onSubmit = (data) => {
    console.log("data", data);
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
          <p className="disclaimer">
            Sign up to hear from us about Coney news, projects, shows and
            adventures, as well as occasional updates about ways to support our
            work.{" "}
          </p>

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
          <div className="formItem">
            <label className="input-label">Last Name</label>
            <input {...register("lname")} placeholder="Last Name" />
          </div>
          <div className="formItem">
            <label className="input-label">Email</label>
            <input
              {...register("email", { required: "Email Address is required" })}
              placeholder="Email address"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <div className="helperText">
                <p role="alert">{errors.email?.message}</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="raise"
            disabled={status === "success" ? true : false}
          >
            {status === "success" ? "Submitted" : "Submit"}
          </button>
          <div className="helperText">
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

export default MailchimpFormRHF;
