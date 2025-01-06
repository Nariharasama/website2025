import Image from "next/image";

export default function TopLogo() {

    return (
        <div className={"w-full h-[128px] fixed top-0 left-0 px-[56px] pt-[40px] flex flex-row items-center"}>
            <Image src={"/homesvgs/Logo 1.svg"} alt="logo" width={48} height={48}></Image>
            <div className={"w-[8px]"}></div>
            <text className={"font-space text-black text-[32px] font-medium"}>Design-hu</text>
        </div>
    )
}