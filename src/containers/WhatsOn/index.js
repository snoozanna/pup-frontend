import "./WhatsOn.css";
const WhatsOn = () => {
  return (
    <main className="whatson">
      <h1 className="funtitle">Whats on</h1>
      <h2 className="tagline">in the Coney Zoom bar</h2>

      <div className="event">
        <h3 className="eventTitle">Event 1</h3>
        <p>25 December, 7pm</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda
          quasi fuga neque non, ullam excepturi dolore, corporis eos dicta
          tempora voluptate? Provident a rem tempora. Modi tempora similique
          possimus!
        </p>
        <a href="https://coneyhq.org/" alt="alt " class="highlighted">
          Book now
        </a>
      </div>
      <div className="event">
        <h3 className="eventTitle">Event 2</h3>
        <p>1 January, 3am</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          obcaecati assumenda facere, totam saepe odit! Quidem itaque recusandae
          expedita saepe rem est odit enim, dignissimos temporibus eum velit a?
          Nam?
        </p>
        <a href="https://coneyhq.org/" alt="alt ">
          Book now
        </a>
      </div>
    </main>
  );
};

export default WhatsOn;
