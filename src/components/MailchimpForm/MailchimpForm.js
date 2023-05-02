const MailChimpForm = ({ status, message, onValidated }) => {
  let email, fname, lname;
  const submit = () => {
    email &&
      fname &&
      lname &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
        LNAME: lname.value,
      });
  };
  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block",
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (fname = node)}
        type="text"
        placeholder="First name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (lname = node)}
        type="text"
        placeholder="Last name"
      />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default MailChimpForm;
