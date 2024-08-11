const About = () => {
  return (
    <div className="h-[100vh] relative">
      <div className="h-full bg-[url('https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D')] bg-cover bg-no-repeat blur-sm"></div>
      <section className="absolute bg-black/10 text-white left-0 right-0 top-0 text-center p-10 max-sm:p-5">
        <h2 className="text-6xl font-bold italic max-sm:text-4xl border-b border-white/30 pb-4">About</h2>
        <p className="mt-4 text-lg font-medium max-sm:text-base">
          The website is created for the purpose of saving your credentials
          which a person has used to login to the specific website. The
          credentials includes your, first name or username, last name and also
          your email address. Your credentials are saved to the database for
          future reference.
        </p>
      </section>
    </div>
  );
};

export default About;
