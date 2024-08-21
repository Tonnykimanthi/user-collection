import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          subject,
          message,
        }),
      });

      const json = await resp.json();

      if (resp.ok) {
        console.log(json);
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setIsLoading(false);
        setError(false);
        setSuccessMsg(true);
        setTimeout(() => setSuccessMsg(false), 2000);
      }
      if (!resp.ok) {
        console.log("The res was not okay!");
        setIsLoading(false);
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <section className="mx-auto mt-10 w-full max-w-lg rounded-lg bg-white/10 p-5 text-white shadow-md backdrop-blur-lg">
      <div
        className={`absolute -top-5 left-1/2 w-full -translate-x-1/2 overflow-hidden rounded-lg bg-white px-2 pb-3 pt-2 text-center text-xl text-primary-default transition duration-300 ${successMsg ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      >
        <span className="font-medium">
          Your response was sent successifully!
        </span>
      </div>
      <h2 className="text-center text-3xl">Contact me</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="mt-2 grid grid-cols-2 gap-5 text-lg [&>div>input]:bg-transparent/10"
      >
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full rounded border border-primary-dark p-1.5 outline-none transition duration-300 focus:border-primary-default"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded border border-primary-dark p-1.5 outline-none transition duration-300 focus:border-primary-default"
          />
        </div>
        <div className="col-span-2">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded border border-primary-dark p-1.5 outline-none transition duration-300 focus:border-primary-default"
          />
        </div>
        <div className="col-span-2">
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded border border-primary-dark p-1.5 outline-none transition duration-300 focus:border-primary-default"
          />
        </div>
        <div className="col-span-2">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full rounded border border-primary-dark bg-transparent/10 p-1.5 outline-none transition duration-300 focus:border-primary-default"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`col-span-2 py-3 transition ${isLoading ? "cursor-not-allowed bg-primary-dark hover:bg-primary-dark" : "bg-primary-light hover:bg-primary-default"}`}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
        {error && !isLoading && (
          <div className="col-span-2 text-center text-red-500">
            Oops! Something went wrong
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
