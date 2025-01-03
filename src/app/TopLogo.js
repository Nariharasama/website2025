import Image from "next/image";
import {SpaceReg} from "@/app/styles/font";

export default function TopLogo() {

    return (
        <div className={"w-full h-[128px] fixed top-0 left-0 px-[56px] pt-[40px] flex flex-row items-center"}>
            <Image src={"/images/logo.svg"} alt="logo" width={48} height={48}></Image>
            <div className={"w-[8px]"}></div>
            <text className={"font-space text-mid text-[32px] font-medium"}>Design-hu</text>
        </div>
    )
}