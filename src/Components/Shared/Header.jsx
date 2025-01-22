import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";


export default function Header() {
    return (
        <div className="bg-transparent h-16 px-4 flex justify-between w-full items-center ">
            <div></div>
            <div className="flex items-center gap-2 mr-2">
            
                <HiOutlineBell fontSize={24 } className="text-[#F99C30]"/>
                
                <RxAvatar  fontSize={24}/>
                <span>Malinda-Sampath</span>
            </div>
        </div>
    );
}
