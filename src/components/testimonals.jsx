import { Rating } from "@material-tailwind/react";

const testimonals = () => {
  const reviews = [
    {
      id: 1,
      value: 3,
      text: "With Cozmek, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students",
      name: "Jaquon Hart",
      position: "Data Science Engineer, Infosys",
    },
    {
      id: 1,
      value: 3,
      text: "With Cozmek, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students",
      name: "Jaquon Hart",
      position: "Data Science Engineer, Infosys",
    },
    {
      id: 1,
      value: 3,
      text: "With Cozmek, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students",
      name: "Jaquon Hart",
      position: "Data Science Engineer, Infosys",
    },
    {
      id: 1,
      value: 3,
      text: "With Cozmek, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students",
      name: "Jaquon Hart",
      position: "Data Science Engineer, Infosys",
    },
    {
      id: 1,
      value: 3,
      text: "With Cozmek, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students",
      name: "Jaquon Hart",
      position: "Data Science Engineer, Infosys",
    },
    {
      id: 1,
      value: 3,
      text: "With Cozmek, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students",
      name: "Jaquon Hart",
      position: "Data Science Engineer, Infosys",
    },
    {
      id: 1,
      value: 3,
      text: "With Cozmek, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students",
      name: "Jaquon Hart",
      position: "Data Science Engineer, Infosys",
    },
    {
      id: 1,
      value: 3,
      text: "With Cozmek, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students",
      name: "Jaquon Hart",
      position: "Data Science Engineer, Infosys",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col justify-center bg-white p-10">
        <div className="w-full">
          <div className="flex justify-center">
            <button className="bg-[#2F57EF] font-bold uppercase bg-opacity-[13%] text-[#2F57EF] px-5 py-2 rounded-3xl text-[16px]">
              Technology for all
            </button>
          </div>
          <h1 className="text-center font-bold uppercase md:text-[40px]">
            Embracing Continuous Learning <br /> and Growth with Cozmek
          </h1>
        </div>

        <div className="w-full mt-10 flex flex-wrap">
          {reviews.map((data) => (
            <div
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
              key={data.id}
            >
              <div className="max-w-lg p-6 flex flex-col gap-3 bg-white rounded-lg shadow-2xl">
                <div className="text-amber-500 flex flex-col">
                  <Rating
                    name="read-only"
                    value={data.value}
                    readOnly
                    className="flex"
                  />
                </div>
                <div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {data.text}
                  </p>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-[#3CAEAE] text-xl font-semibold">
                    {data.name}
                  </h6>
                  <h1 className="text-[#90A3B4] text-sm">{data.position}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default testimonals;
