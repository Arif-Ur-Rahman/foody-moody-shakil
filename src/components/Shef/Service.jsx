import React from "react";
import Img1 from "../../assets/ChefServices/Waiter.png";
import Img2 from "../../assets/ChefServices/Intruments.png";
import Img3 from "../../assets/ChefServices/Shoping.png";
import Img4 from "../../assets/ChefServices/Ad-ons.png";
// import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Waiter For Serving",
    description:
      "You can take our waiter with our Expert Chef, for Serving food professionally.",
  },
  {
    id: 2,
    img: Img2,
    name: "Cooking Staff",
    description:
      "We provide cooking staff & instruments with our Chef for carring with them at your home.",
  },
  {
    id: 3,
    img: Img3,
    name: "Shopping Food Items",
    description:
      "We will provide cooking items at a very chip cost. Chef will Carry them at your home.",
  },

  {
    id: 4,
    img: Img4,
    name: "Add-on Items",
    description:
      "Add Some of our Ad-ons with your foods, with a very low cost!",
  },
  
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="">
          <div className="text-center mb-20 w-full mx-auto">
            <p className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="mt-4 mb-4 text-3xl font-bold">Services</h1>
            <p className="text-xl text-gray-400">
              You can take our Chef At your Home including our following services:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-5 place-items-center mb-24 ">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[250px] h-[220px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-2xl font-bold mt-16">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
