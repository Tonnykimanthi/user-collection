const Contact = () => {
  return (
    <section className="mx-auto mt-10 w-full max-w-lg rounded-lg bg-white/10 p-5 text-white shadow-md backdrop-blur-lg">
      <h2 className="text-center text-3xl">Contact me</h2>
      <form className="mt-2 grid grid-cols-2 gap-5 text-lg [&>div>input]:bg-transparent/10">
        <div>
          <label>First Name</label>
          <input
            type="text"
            className="w-full rounded border border-primary-dark p-1.5 outline-none transition duration-300 focus:border-primary-default"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            className="w-full rounded border border-primary-dark p-1.5 outline-none transition duration-300 focus:border-primary-default"
          />
        </div>
        <div className="col-span-2">
          <label>Email</label>
          <input
            type="email"
            className="w-full rounded border border-primary-dark p-1.5 outline-none transition duration-300 focus:border-primary-default"
          />
        </div>
        <div className="col-span-2">
          <label>Subject</label>
          <input
            type="text"
            className="w-full rounded border border-primary-dark p-1.5 outline-none transition duration-300 focus:border-primary-default"
          />
        </div>
        <div className="col-span-2">
          <label>Message</label>
          <textarea className="w-full rounded border border-primary-dark bg-transparent/10 p-1.5 outline-none transition duration-300 focus:border-primary-default"></textarea>
        </div>
      </form>
    </section>
  );
};

export default Contact;
