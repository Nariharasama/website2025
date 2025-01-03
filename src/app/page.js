"use client"
import Image from "next/image";
import {useState} from "react";
import { motion } from "motion/react"

function Logo(){
    return (
        <div className={"w-[936px] h-[72px] flex flex-row space-x-[32px] align-middle items-center justify-center"}>
            <Image src={"/images/1.svg"} alt="logo" width={72} height={72}/>
            <Image src={"/images/2.svg"} alt="logo" width={72} height={72}/>
            <Image src={"/images/3.svg"} alt="logo" width={72} height={72}/>
            <Image src={"/images/4.svg"} alt="logo" width={72} height={72}/>
            <Image src={"/images/5.svg"} alt="logo" width={72} height={72}/>
            <Image src={"/images/6.svg"} alt="logo" width={72} height={72}/>
            <Image src={"/images/7.svg"} alt="logo" width={72} height={72}/>
            <Image src={"/images/8.svg"} alt="logo" width={72} height={72}/>
            <Image src={"/images/9.svg"} alt="logo" width={72} height={72}/>
        </div>
    )

}

function Logos1(){
    return (<div className={"w-full overflow-hidden relative h-[72px]"}>
        <motion.div className={'absolute left-0'} animate={{opacity: [0, 0, 1]}} transition={{
                times: [0, 0.8, 1],
                duration: 5,}}>
            <motion.div className={'absolute left-0'} animate={{x: [-936, 2808, -936, -936]}} transition={{
                times: [0, 1, 1, 1],
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0
            }}>
                <Logo/>
            </motion.div>
            <motion.div className={'absolute left-0'} animate={{x: [0, 2808, -936, 0]}} transition={{
                times: [0, 0.75, 0.75, 1],
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0
            }}>
                <Logo/>
            </motion.div>
            <motion.div className={'absolute left-0'} animate={{x: [936, 2808, -936, 936]}} transition={{
                times: [0, 0.5, 0.5, 1],
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0
            }}>
                <Logo/>
            </motion.div>
            <motion.div className={'absolute left-0'} animate={{x: [1872, 2808, -936, 1872]}} transition={{
                times: [0, 0.25, 0.25, 1],
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0
            }}>
                <Logo/>
            </motion.div>
        </motion.div>

    </div>)
}

function MainInfo() {
    return (
        <div className={"w-full overflow-hidden flex h-[96px] align-middle items-center justify-center"}>
            <motion.div animate={{x: [-1500, 0]}} transition={{
                duration: 3,
            }}>
                <text className={"font-space text-mid text-[72px] font-bold"}>Tech Design&nbsp;</text>
            </motion.div>
            <motion.div animate={{x: [1500, 0]}} transition={{
                duration: 3,
            }}>
                <text className={"font-space text-mid text-[72px] font-bold"}>for everyone's life.</text>
            </motion.div>

        </div>
    )

}

function Info2() {
    return (
        <div className={"w-full overflow-hidden flex h-[64px] align-middle items-center justify-center"}>
            <motion.div animate={{opacity: [0, 0, 1]}} transition={{
                times: [0, 0.75, 1],
                duration: 4,
            }}>
                <text className={"font-space text-bright text-[48px] font-regular"}>#Graphic Design &nbsp;#UI
                    Design &nbsp;#Web Development</text>
            </motion.div>
        </div>
    )
}

function Tag(props) {
    return (
        <div className={"w-[2106px] h-[64px] flex flex-row space-x-[40px] align-middle items-center justify-center"}>
            <text className={"font-space text-deep text-[48px] font-regular"}>&lt;Figma/&gt;</text>
            <text className={"font-space text-deep text-[48px] font-regular"}>&lt;Javascript/&gt;</text>
            <text className={"font-space text-deep text-[48px] font-regular"}>&lt;Photoshop/&gt;</text>
            <text className={"font-space text-deep text-[48px] font-regular"}>&lt;Illustrator/&gt;</text>
            <text className={"font-space text-deep text-[48px] font-regular"}>&lt;Next.js/&gt;</text>
            <text className={"font-space text-deep text-[48px] font-regular"}>&lt;React/&gt;</text>
            <text className={"font-space text-deep text-[48px] font-regular"}>&lt;HTML/&gt;</text>
        </div>)
}


function Tags() {
    return (<div className={"w-full overflow-hidden relative h-[160px]"}>
            <motion.div className={'absolute left-0'} animate={{opacity: [0, 0, 1]}} transition={{
                times: [0, 0.8, 1],
                duration: 5,
            }}>
                <motion.div className={'absolute left-0'} animate={{x: [-2106, 6318, 6318, -2106]}} transition={{
                    times: [0, 0, 0, 1],
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 0
                }}>
                    <Tag/>
                </motion.div>
                <motion.div className={'absolute left-0'} animate={{x: [0, -2106, 6318, 0]}} transition={{
                    times: [0, 0.25, 0.25, 1],
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 0
                }}>
                    <Tag/>
                </motion.div>
                <motion.div className={'absolute left-0'} animate={{x: [2106, -2106, 6318, 2106]}} transition={{
                    times: [0, 0.5, 0.5, 1],
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 0
                }}>
                    <Tag/>
                </motion.div>
                <motion.div className={'absolute left-0'} animate={{x: [4212, -2106, 6318, 4212]}} transition={{
                    times: [0, 0.75, 0.75, 1],
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 0
                }}>
                    <Tag/>
                </motion.div>
            </motion.div>

        </div>
    )
}


export default function Home() {
    return (
        <div className={"h-dvh w-full justify-center flex flex-col align-middle items-center"}>
            <Logos1/>
            <MainInfo/>
            <Info2/>
            <Tags/>
        </div>
    );
}
