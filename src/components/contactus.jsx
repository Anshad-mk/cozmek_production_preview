import Lottie from "react-lottie";
import animationData from "../assets/contactus_animation.json";

const contactus = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="bg-[#0B7077] bg-opacity-[63%] flex justify-center items-center">
        <div className="w-full lg:w-[90%] lg:flex text-[#FFFFFF]">
          {/* Left Img */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="w-1/2 lg:w-full">
            <Lottie options={defaultOptions} height="auto" width="90%" />
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-3">
            <div className="flex flex-col gap-5 items-center">
              <div className="flex justify-center">
                <button className="bg-[#FFFFFF] bg-opacity-[13%] px-5 py-2 rounded-3xl text-[16px]">
                  WANT TO JOIN ?!
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-center sm:text-xl">
                  Prepare yourself to enhance your skills and adapt your
                  perspective to <br />
                  align with the demands of the next century using COZMEK
                  <br />
                  <span className="font-bold">
                    No ads, No trails, No commitments
                  </span>
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-full lg:max-w-lg bg-white px-8 pt-6 pb-8">
                  <div className="mb-4">
                    <label className="block text-[#242731] text-[25px] sm:text-[31px] font-bold">
                      Get to know the COURSE !
                    </label>
                    <p className="text-[#575F6E] text-xs sm:text-sm">
                      Fill in the registration data. It will take a couple of
                      minutes.
                      <br />
                      All you need is a phone number and e-mail
                    </p>
                  </div>

                  {/* Form */}
                  <form>
                    <div className="mb-4">
                      <label className="text-black">E-MAIL</label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="email"
                        placeholder="alex_manager@gmail.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-black">FULL NAME</label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-black">COURSE</label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="course"
                      >
                        <option value="">Select a course</option>
                        <option value="0000000000">
                          AI Crash Course Programe (6-Months)
                        </option>
                        <option value="000-000-0000">
                          AI Expert Course Programe (1-Year)
                        </option>
                        <option value="000-000-0000">
                          AI Job Guarantee Programe with Internship (1-Year)
                        </option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="text-black">PHONE NUMBER</label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="number"
                        placeholder="000 0000 0000"
                      />
                    </div>

                    <div className="flex items-center justify-end mt-5">
                      <button
                        className="bg-[#0093B0] text-white font-bold py-2 px-6"
                        type="button"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactus;
