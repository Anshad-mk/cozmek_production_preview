import Lottie from "react-lottie";
import animationData from "../assets/AboutUs_animation.json";

const list = [
  "Purely skill-based, advanced curriculum, and structure.",
  "24*7 mentoring.",
  "Hybrid method of teaching.",
  "Cozmek Rank Board System (CRBS) based examinations and ranking.",
  "100% Placement Support.",
  "Provides self-competitive learning ecosystem.",
  "Personality development classes."
];

const AboutUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-4">
      <div className="sm:w-1/2 w-full mb-4 sm:mb-0">
        <Lottie options={defaultOptions} height="auto" width="90%" />
      </div>
      <div className="sm:w-1/2 w-full px-4">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Know About Cozmek Private Limited</h1>
        <p className="text-base my-3 leading-7 text-gray-700">
          <span className="font-bold uppercase">Cozmek</span> serves as your gateway to a realm of
          transformative education, aiming to revolutionize the learning
          experience by providing a diverse range of courses that empower
          individuals of all age groups. Embrace the transformative force of
          education and unleash your maximum potential with{" "}
          <span className="font-bold uppercase">Cozmek</span>.
        </p>
        <div className="flex flex-col space-y-2">
          {list.map((data, index) => (
            <div key={index} className="flex items-center">
              <img src="/src/assets/ticMark.png" className="w-6 mr-2" alt="." />
              <h6 className="text-base">{data}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
