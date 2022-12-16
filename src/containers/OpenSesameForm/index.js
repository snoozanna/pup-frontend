import { Link } from "react-router-dom";
import "./OpenSesameForm.css";
// import { useForm } from "react-hook-form";
import ContactForm from "./../../components/ContactForm/index.js";

const SignUp = () => {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();
  // const onSubmit = (data) => console.log(data);

  return (
    <main className="landing">
      <h1 className="funtitle">Open Sesame</h1>
      <h2>Tell us your address </h2>
      <h2>placeholder form - needs improving </h2>
      <Link to={`/`}>
        <div className="siteTitleWrapper">
          <h2 className="siteTitle">
            <span>The</span> <span>Pop Up</span>
            <span>Playhouse</span>
          </h2>
          <p className="siteCredit">
            by <span className="coney">Coney</span>
          </p>
        </div>
      </Link>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div className="buttonWrapper">
        <a
          href="https://www.paypal.com/donate/?business=EU8572VTBBBP4&no_recurring=0&item_name=This+is+a+donation+for+X+game&currency_code=GBP"
          target="_blank"
          rel="noreferrer"
          className="buttonItem"
        >
          <button className="funButton donate">
            Need to pay ? Click here{" "}
          </button>
        </a>
      </div>

      <ContactForm />
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <span>Name</span>
        <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
        <span>Email</span>
        <input
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        <span>Address</span>
        <input
          {...register("address", { required: "Address is required" })}
          aria-invalid={errors.address ? "true" : "false"}
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        <span>I have paid</span>
        <input type="checkbox" {...register("paid")}></input>
        <p>PS. If paying isn't possible for you please email ....</p>
        <input type="submit" />
      </form> */}
    </main>
  );
};

export default SignUp;
