import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[100%]">
      <div className=" w-1/2 flex  flex-col justify-center items-start m-12">
        <h1 className="font-bold w-[496px] text-[40px]">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <Image className="mb-5 mt-5" src="/images/paragraph.svg"
        alt="paragraph" 
        width={902}
        height={147}
        />

        <button className="bg-[#A29875] text-white p-[10px] rounded-[10px] gap-x-2.5" >Explore Now</button>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Image 
        src="/images/rs-group-wrap ⏵ rs-group.svg" 
        alt="figma design" 
        width={462}
        height={647}
        />
      </div>
      </div>
    </div>
  );
};

export default Home;