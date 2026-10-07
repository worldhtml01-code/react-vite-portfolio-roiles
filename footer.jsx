function Footer(){
    return (
<section className="grid grid-cols-1 gap-6 bg-gray-50 px-8 py-20 md:grid-cols-3">

        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">
            Simple
          </h3>

          <p className="mt-3 text-gray-500">
            Easy to understand and easy to use.
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">
            Fast
          </h3>

          <p className="mt-3 text-gray-500">
            Built with modern web technologies.
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">
            Modern
          </h3>

          <p className="mt-3 text-gray-500">
            Clean and responsive user interface.
          </p>
        </div>

      </section>


    );
}

export default Footer;