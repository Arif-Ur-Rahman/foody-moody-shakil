import React from "react";
import "../FeatureCard/FeatureCard.css";
import { FaCity } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { SiSongoda } from "react-icons/si";
import { MdCampaign } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";

import FlipCard from "./FlipCard";
import video1 from "../../assets/video/Dream Diver.mp4";
import video2 from "../../assets/video/food1.mp4";
const FeatureCard = () => {
  const videos = [
    {
      OutSideTitle: "200% Cashback",
      OutSidePrice: "Feature 1",
      Video: video2,
      insideTitle: "For Subscribed Clients",
      insideDescription:
        "We are offering 200% Cashback! 200% Euro Points on your every payment!",

      insideLink: "/Cashback",
      color: "card-front__tp--city",
      textColor: "card-front__text-view--city",
      buttonColor: "inside-page__btn--city",
      icon: <FaCity className="card-front__icon" />,
    },
    {
      OutSideTitle: "Special Day Gift",
      OutSidePrice: "Feature 2",
      Video: video2,
      insideTitle: "Special Day Gift",
      insideDescription:
        "On your special day like Birthday or Anniversary, We provide a Gift",
      insideLink: "/Gift",
      color: "card-front__tp--ski",
      textColor: "card-front__text-view--ski",
      buttonColor: "inside-page__btn--ski",
      icon: <IoFastFoodOutline className="card-front__icon" />,
    },
    {
      OutSideTitle: "Deal Of The Day",
      OutSidePrice: "Feature 3",
      Video: video1,
      insideTitle: "Deal Of The Day",
      insideDescription:
        "One Food for Each Day, With Surprising Offer & Many More!",

      insideLink: "/Deal",
      color: "card-front__tp--beach",
      textColor: "card-front__text-view--beach",
      buttonColor: "inside-page__btn--beach",
      icon: <SiSongoda className="card-front__icon" />,
    },
    {
      OutSideTitle: "7 Days Order Bonus",
      OutSidePrice: "Feature 4",
      Video: video2,
      insideTitle: "7 Days Order Bonus",
      insideDescription:
        "If someone Orders 7 days in a row, We will provide Bonus!",
      insideLink: "/SevenOrder",
      color: "card-front__tp--camping",
      textColor: "card-front__text-view--camping",
      buttonColor: "inside-page__btn--camping",
      icon: <MdCampaign className="card-front__icon" />,
    },
    {
      OutSideTitle: "City break",
      OutSidePrice: "$29",
      Video: video1,
      insideTitle: "For urban lovers",
      insideDescription:
        "As cities never sleep, there are always something going on, no matter what time!",
      insideLink: "/shef",
      color: "card-front__tp--city",
      textColor: "card-front__text-view--city",
      buttonColor: "inside-page__btn--city",
      icon: <FaCity className="card-front__icon" />,
    },
    {
      OutSideTitle: "City break",
      OutSidePrice: "$29",
      Video: video1,
      insideTitle: "For urban lovers",
      insideDescription:
        "As cities never sleep, there are always something going on, no matter what time!",

      insideLink: "/Subscription",
      color: "card-front__tp--ski",
      textColor: "card-front__text-view--ski",
      buttonColor: "inside-page__btn--ski",
      icon: <CiDiscount1 className="card-front__icon" />,
    },
  ];
  return (
    <main class="main">
      <section class="card-area">
        {videos.map((video) => (
          <FlipCard
            OutSideTitle={video.OutSideTitle}
            OutSidePrice={video.OutSidePrice}
            video={video.Video}
            insideTitle={video.insideTitle}
            insideDescription={video.insideDescription}
            insidelink={video.insideLink}
            color={video.color}
            textColor={video.textColor}
            buttonColor={video.buttonColor}
            icon={video.icon}
          />
        ))}
      </section>
    </main>
  );
};

export default FeatureCard;
