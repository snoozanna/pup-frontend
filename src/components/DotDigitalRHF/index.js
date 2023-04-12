import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./DotDigitalRHF.css";

const DotDigitalRHF = ({ status, message, onValidated }) => {
  const {
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm();
  // // let email, fname, lname;
  const onSubmit = (data) => {
    console.log(data);
    // action = "https://r1.technology-trust-news.org/signup.ashx";
    // method = "post";
    // autoComplete = "off";

    const { email, cd_FIRSTNAME, cd_LASTNAME } = data;
    email &&
      cd_FIRSTNAME &&
      cd_LASTNAME &&
      email.indexOf("@") > -1 &&
      onValidated({
        email,
        cd_FIRSTNAME,
        cd_LASTNAME,
      });
    console.log("data after", data);
  };

  var urlInput = document.getElementById("ci_consenturl");
  if (urlInput != null && urlInput !== "undefined") {
    urlInput.value = encodeURI(window.location.href);
  }

  return (
    <>
      <div className="formWrapper">
        <form
          name="signup"
          id="signup"
          className="dd"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="hidden"
            // name="ci_isconsentform"
            {...register("ci_isconsentform")}
            value="true"
          />
          <input
            type="hidden"
            // name="userid"
            value="353322"
            {...register("userid")}
          />
          <input
            type="hidden"
            // name="SIG62c3bc27b95aff9b9adeabd718ebf20de6063fd32195f9d233fdce0a45f8d52d"
            {...register(
              "SIG62c3bc27b95aff9b9adeabd718ebf20de6063fd32195f9d233fdce0a45f8d52",
            )}
            value=""
          />
          <input
            type="hidden"
            // name="addressbookid"
            value="1317"
            {...register("addressbookid")}
          />
          <input
            type="hidden"
            // name="ReturnURL"
            value="https://coneyhq.org/"
            {...register("ReturnURL")}
          />
          <input
            type="hidden"
            // name="ci_userConsentText"
            value="Do you consent to be added to our mailing list?
https://coneyhq.org/privacy-cookies/"
            {...register("ci_userConsentText")}
          />
          <input
            type="hidden"
            id="ci_consenturl"
            // name="ci_consenturl"
            value=""
            {...register("ci_consenturl")}
          />
          <div className="formItem">
            <label className="input-label" htmlFor="FIRSTNAME">
              First Name
            </label>
            <input
              {...register("cd_FIRSTNAME", {
                required: "First Name is required",
              })}
              placeholder="First Name"
              aria-invalid={errors.cd_FIRSTNAME ? "true" : "false"}
            />
            {errors.cd_FIRSTNAME?.type === "required" && (
              <div className="helperText">
                <p role="alert">First name is required</p>
              </div>
            )}
          </div>
          <div class="formItem">
            <label class="input-label">Last Name</label>
            <input {...register("cd_LASTNAME")} placeholder="Last Name" />
          </div>
          <div class="formItem">
            <label class="input-label" htmlFor="email">
              Email
            </label>
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
          <div class="prefWrapper">
            <input
              type="hidden"
              name="ADDRESSBOOK_2700_unchecked"
              id="ADDRESSBOOK_2700_unchecked"
              value="true"
            />

            <input {...register("ADDRESSBOOK_2700")} type="checkbox" />
            <label class="wrap" htmlFor="ADDRESSBOOK_2700">
              Possible donors
            </label>
          </div>
          <div class="prefWrapper">
            <input
              type="hidden"
              name="ADDRESSBOOK_2702_unchecked"
              id="ADDRESSBOOK_2702_unchecked"
              value="true"
            />
            <input
              type="checkbox"
              {...register("ADDRESSBOOK_2702")}
              id="ADDRESSBOOK_2702"
            />
            <label class="wrap" htmlFor="ADDRESSBOOK_2702">
              Network of Coney
            </label>
          </div>
          <div class="prefWrapper">
            <input
              type="checkbox"
              {...register("ci_userConsentCheckBox", {
                required: "Please tick to show consent",
              })}
              id="ci_userConsentCheckBox"
            />
            <label htmlFor="ci_userConsentCheckBox">
              <p>
                Do you consent to be added to our mailing list? Read our {""}
                <a
                  href="https://coneyhq.org/privacy-cookies/"
                  target="_blank"
                  rel="noreferrer"
                  class="highlighted"
                >
                  Privacy Policy
                </a>
              </p>
            </label>
          </div>
          <button
            type="submit"
            class="raise"
            disabled={status === "success" ? true : false}
          >
            {status === "success" ? "Submitted" : "Submit"}
          </button>
          {/* <div class="helperText">
            {status === "sending" && <div>sending...</div>}
            {status === "error" && (
              <div dangerouslySetInnerHTML={{ __html: message }} />
            )}
            {status === "success" && (
              <div dangerouslySetInnerHTML={{ __html: message }} />
            )}
          </div> */}
        </form>
      </div>
    </>
  );
};

export default DotDigitalRHF;
