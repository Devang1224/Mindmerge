import Image from "next/image";
import krishnaImage from "@/assets/krishnaLogo.png";
import Chats from "../chats/Chats";
import Input from "../inputFIeld/Input";


const Body = () => {
  return (
    <div className="w-full p-2 h-[92%]">
      <div className="w-full flex flex-col items-center">
        <p className=" text-[3rem] flex items-end justify-center text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-extrabold mb-1">
          MindMerge
          <Image src={krishnaImage} width={80} height={80} />
        </p>
        <p className="text-[#b38e62]">
          Get Answers to Life's Questions with MindMerge - Your AI Spiritual
          Companion.
        </p>
      </div>

      <Chats/>
      <Input/>

    </div>
  );
};

export default Body;
