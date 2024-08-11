const Contact = () => {
  return (
    <div className="relative h-screen">
      <div className="h-full bg-[url('https://images.unsplash.com/photo-1684569547016-d0bdc13d2c50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww')] bg-cover bg-no-repeat"></div>

      <section className="absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/50 p-5 shadow-md backdrop-blur-lg">
        <h2 className="text-center text-3xl">Contact me</h2>
        <form className="mt-2 grid grid-cols-2 gap-5 text-lg">
          <div>
            <label>First Name</label>
            <input
              type="text"
              className="w-full rounded border p-1.5 outline-none transition duration-300 focus:border-primary-dark"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              className="w-full rounded border p-1.5 outline-none transition duration-300 focus:border-primary-dark"
            />
          </div>
          <div className="col-span-2">
            <label>Email</label>
            <input
              type="email"
              className="w-full rounded border p-1.5 outline-none transition duration-300 focus:border-primary-dark"
            />
          </div>
          <div className="col-span-2">
            <label>Subject</label>
            <input
              type="text"
              className="w-full rounded border p-1.5 outline-none transition duration-300 focus:border-primary-dark"
            />
          </div>
          <div className="col-span-2">
            <label>Message</label>
            <textarea className="w-full rounded border p-1.5 outline-none transition duration-300 focus:border-primary-dark"></textarea>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
