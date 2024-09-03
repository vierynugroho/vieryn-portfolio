import AnimationContainer from '../utils/AnimationContainer';

const ContactMe = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <h2
        className="mb-8 text-2xl font-bold tracking-tight text-center text-white md:text-2xl lg:text-start"
        id="contact"
      >
        Contact me
      </h2>

      <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-between w-full gap-6 mb-10 lg:flex-row">
          {/* <a href='mailto:jeanrdev@gmail.com' target='_blank' rel='noreferrer' className='w-full'> */}
          <div className="w-full rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
            <h6 className="font-bold tracking-tight text-white text-1xl text-start">
              Email
            </h6>
            <p className="mt-2 text-base text-gray-400">
              viery15102002@gmail.com
            </p>
          </div>
          {/* </a> */}

          {/* <a href='https://walink.co/2369d5' target='_blank' rel='noreferrer' className='w-full'> */}
          <div className="w-full rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
            <h6 className="font-bold tracking-tight text-white text-1xl text-start">
              Phone
            </h6>
            <p className="mt-2 text-base text-gray-400">+62 895638069206</p>
          </div>
          {/* </a> */}
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <form
            action="https://formspree.io/f/mgvwqvdw"
            method="POST"
            className="w-full space-y-4"
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 text-base text-white transition bg-black border border-gray-900 rounded outline-none focus:border-gray-800 ease"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 text-base text-white transition bg-black border border-gray-900 rounded outline-none focus:border-gray-800 ease"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full p-3 text-base text-white transition bg-black border border-gray-900 rounded outline-none focus:border-gray-800 ease"
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full h-32 p-3 text-base text-white transition bg-black border border-gray-900 rounded outline-none focus:border-gray-800 ease"
                placeholder="Message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center px-5 py-3 mx-auto text-white transition bg-gray-600 rounded shadow-sm hover:bg-gray-900 ease"
            >
              <span className="text-base font-medium">Send</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;
