import Image from "next/image";
import krishnaDp from "@/assets/krishnaDp.png";

const Chats = () => {
    return (
        <div className=" w-[80%] h-[50%] mt-12 p-3 mx-[10rem] flex flex-col">

            <div className="flex">
              <Image src={krishnaDp} width={80} height={80} className="w-14 h-14 rounded-full object-cover"/>
              <p className="bg-[#2b3146] text-white p-2 ml-2 w-[60%] leading-7 rounded-lg"> 
                Radhey Radhey, I am Gita AI, a repository of knowledge and wisdom. Allow me to assist you by answering any inquiries you may have. Ask me anything.
              </p>
            </div>

      
 
        </div>
    );
}

export default Chats;