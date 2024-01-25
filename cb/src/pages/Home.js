import React from "react";
import { BsArrowUpLeftCircleFill, BsArrowUpRightCircleFill } from "react-icons/bs";

function HomePage() {
  const slides = [
    {
      url: "https://inspiria.edu.in/wp-content/uploads/Inspiria-joins-US-based-leadership-program.jpg"
    },
    {
      url: "https://static.wixstatic.com/media/efa653_8ba746648c1a497b9044074b0a38d540~mv2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/efa653_8ba746648c1a497b9044074b0a38d540~mv2.jpg"
    },
    {
      url: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-i81v9t82uub5roki6maj88pg57-20230718001613.Medi.jpeg"
    },
    {
      url: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_300723_Toast2.jpg"
    },
  ];

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
      {/* Background image */}
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* Navigation buttons */}
    <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-100 text-2xl rounded-full p-2 bg-white text-white cursor-pointer">
        <BsArrowUpLeftCircleFill size={50} />
    </div>
      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <BsArrowUpRightCircleFill size={50} />
    </div>
    </div>
  );
}
export default HomePage;