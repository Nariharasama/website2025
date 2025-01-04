"use client"
import Image from "next/image";
import {useEffect, useState} from "react";
import { motion, useAnimate,} from "motion/react"
import { spring } from "motion"

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
    const [scope,animate] = useAnimate()
    const handleScroll = () => {
        // 处理滚动事件的逻辑
        animate(scope.current,{opacity: Math.max(0.4,1-0.6*(window.scrollY/720)),y:Math.max(-200,-window.scrollY*0.4)},{duration: 0})
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<div className={"w-full overflow-hidden relative h-[72px] overflow-visible"}>
        <motion.div className={'absolute left-0'} initial={{opacity:0}} animate={{opacity: [0, 0, 1]}} transition={{
                times: [0, 0.8, 1],
                duration: 5,}} ref={scope}>
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
    const [scope1,animate1] = useAnimate()
    const [scope2,animate2] = useAnimate()
    const handleScroll = () => {
        // 处理滚动事件的逻辑
            animate1(scope1.current,{x: 1.5*(-window.scrollY)},{duration: 0})
            animate2(scope2.current,{x: 1.5*(window.scrollY)},{duration: 0})
    };
    useEffect(() => {
        animate1(scope1.current,{x: 0},{duration: 2,type:"tween",ease:"easeOut"})
        animate2(scope2.current,{x: 0},{duration: 2,type:"tween",ease:"easeOut"})
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={"w-full overflow-hidden flex h-[96px] align-middle items-center justify-center"}>
            <motion.div ref={scope1} initial={{x: -1500}}>
                <text className={"font-space text-mid text-[72px] font-bold"}>Tech Design&nbsp;</text>
            </motion.div>
            <motion.div initial={{x: 1500}}  ref={scope2}>
                <text className={"font-space text-mid text-[72px] font-bold"}>for everyone's life.</text>
            </motion.div>
        </div>

    )

}

function Info2() {
    const [scope,animate] = useAnimate()
    const handleScroll = () => {
        // 处理滚动事件的逻辑
        animate(scope.current,{opacity: 1-(window.scrollY/720)},{duration: 0})
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={"w-full overflow-hidden flex h-[64px] align-middle items-center justify-center"} ref={scope}>
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
    const [scope,animate] = useAnimate()
    const handleScroll = () => {
        // 处理滚动事件的逻辑
        animate(scope.current,{opacity: Math.max(0.2,1-0.6*(window.scrollY/360)),y:Math.min(400,window.scrollY*0.8)},{duration: 0})
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<div className={"w-full relative h-[160px] overflow-visible"}>
            <motion.div className={'absolute left-0 overflow-visible'}  initial={{opacity:0}} animate={{opacity: [0, 0, 1]}} transition={{
                times: [0, 0.8, 1],
                duration: 5,
            }} ref={scope}>
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
function ScrollInfo(){
    const [scope,animate] = useAnimate()
    const handleScroll = () => {
        // 处理滚动事件的逻辑
        if(window.scrollY>160){
            animate(scope.current,{opacity: 0},{duration: 0.2})
        }else {
            animate(scope.current,{opacity: 1},{duration: 0.2})
        }
        }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={"w-full overflow-hidden flex h-[160px] align-middle items-center justify-center"} ref={scope}>
            <motion.div animate={{opacity: [0, 0, 1]}} transition={{
                times: [0, 0.75, 1],
                duration: 6,
            }} className={"w-full flex flex-col justify-center items-center"}>
                <text className={"font-space text-dark text-[32px] font-regular"}>scroll down</text>
                <Image src={"images/arrow_downward.svg"} alt={'down'} width={40} height={40}></Image>

            </motion.div>
        </div>
    )


}


export default function Home() {
    return (
        <div className={'w-full flex flex-col'}>
            <div className={"h-dvh w-full justify-center flex flex-col align-middle items-center fixed"}>
                <div className={"w-full flex-grow"}></div>
                <Logos1/>
                <MainInfo/>
                <Info2/>
                <Tags/>
                <div className={"w-full flex-grow"}></div>
                <ScrollInfo/>
            </div>
            <div className={"h-dvh w-full justify-center flex flex-col align-middle items-center "}></div>
            <div className={"h-[480px] w-full justify-center flex flex-col align-middle items-center "}>
                <text className={"font-space text-mid text-[36px] font-bold"}>Hi there! Thanks for visiting my site.
                </text>
                <div className={"w-full h-[40px]"}></div>
                <text className={"font-space text-dark text-[24px] font-regular"}>I’m a UI designer and doing front-end
                    development at the same time.
                </text>
                <text className={"font-space text-dark text-[24px] font-regular"}>This site is completely designed,
                    developed and deployed by myself.
                </text>
                <text className={"font-space text-dark text-[24px] font-regular"}>It’s mainly coded based on next.js with
                    framer motion components.
                </text>
                <text className={"font-space text-dark text-[24px] font-regular"}>Sources can be found in my GitHub links
                    at the bottom of the page
                </text>
            </div>
            <div className={"h-[240px] w-full justify-center flex flex-col align-middle items-center "}/>
            <div className={"h-[400px] w-full justify-center flex flex-col align-middle items-center "}>
                <text className={"font-space text-mid text-[36px] font-bold"}>Let me introduce myself a bit.
                </text>
                <div className={"w-full h-[40px]"}></div>
                <text className={"font-space text-dark text-[24px] font-regular"}>I was born in China and entered
                    university at 15 via a special education project.
                </text>
                <text className={"font-space text-dark text-[24px] font-regular"}>-Xi’an Jiaotong University @Industrial
                    Design-
                </text>
                <text className={"font-space text-dark text-[24px] font-regular"}>After finished my undergraduate degree
                    I went Japan for further learning.
                </text>
                <text className={"font-space text-dark text-[24px] font-regular"}>-Chiba University @Design (Master)-
                </text>
                <text className={"font-space text-dark text-[24px] font-regular"}>And now I’m focusing on improving
                    Japanese public transport guide app UIs.
                </text>
            </div>
            <div className={"h-[560px] w-full justify-center flex flex-col align-middle items-center "}>
                <text className={"font-space text-mid text-[36px] font-bold"}>Need some inspirations?
                </text>
                <div className={"w-full h-[40px]"}></div>
                <text className={"font-space text-dark text-[36px] font-bold"}>Check my <text className={'text-mid cursor-pointer'}>Github</text> or <text className={'text-mid cursor-pointer'}>Projects</text>.
                </text>
            </div>
        </div>

    );
}
