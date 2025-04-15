"use client"
import Image from "next/image";
import {useEffect, useRef} from "react";
import {
    motion,
    useAnimate,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity
} from "motion/react"
import {wrap} from "motion";
import {useRouter} from "next/navigation";

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
        <div className={"w-full overflow-hidden flex h-[160px] align-middle items-center justify-center absolute bottom-0"} ref={scope}>
            <motion.div initial={{opacity:0}} animate={{opacity: [0, 0, 1]}} transition={{
                times: [0, 0.75, 1],
                duration: 6,
            }} className={"w-full flex flex-col justify-center items-center"}>
                <text className={"font-['Noto_Sans_JP'] text-black text-[24px] font-regular"}>Scroll Down</text>
                <Image src={"homesvgs/arrow_downward.svg"} alt={'down'} width={40} height={40}></Image>
            </motion.div>
        </div>
    )


}
function HomeSvgs(){
    const Isover=useRef(0)
    const [scope1,animate1] = useAnimate()
    const [scope2,animate2] = useAnimate()
    const [scope3,animate3] = useAnimate()
    const [scope4,animate4] = useAnimate()
    const [scope5,animate5] = useAnimate()
    const [scope6,animate6] = useAnimate()
    const [scope7,animate7] = useAnimate()
    const [scope8,animate8] = useAnimate()
    const [scope9,animate9] = useAnimate()
    const [scope10,animate10] = useAnimate()
    const [scope11,animate11] = useAnimate()
    const [scope12,animate12] = useAnimate()
    const [scope13,animate13] = useAnimate()
    const [scope14,animate14] = useAnimate()
    const [scope15,animate15] = useAnimate()
    const [scope16,animate16] = useAnimate()
    const [scope17,animate17] = useAnimate()
    const [scope18,animate18] = useAnimate()
    const [scope19,animate19] = useAnimate()
    const handleMouseMove = (event) => {
        if(Isover.current===0) return;
        const x = event.clientX-1/2*window.innerWidth
        const y = event.clientY-1/2*window.innerHeight;
        animate1(scope1.current, {x: -68 - 0.05 * x, y: 143 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate2(scope2.current, {x: 255 - 0.02 * x, y: 314 + 0.05 * y}, {duration: 0, ease: "easeOut"})
        animate3(scope3.current, {x: 480 - 0.05 * x, y: 10 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate4(scope4.current, {x: 240 - 0.05 * x, y: 400 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate5(scope5.current, {x: 448 - 0.02 * x, y: 286 + 0.05 * y}, {duration: 0, ease: "easeOut"})
        animate6(scope6.current, {x: 948 - 0.05 * x, y: 160 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate7(scope7.current, {x: 708 - 0.05 * x, y: 15 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate8(scope8.current, {x: 1235- 0.02 * x, y: 430 + 0.05 * y}, {duration: 0, ease: "easeOut"})
        animate9(scope9.current, {x: 740 - 0.05 * x, y: 246+ 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate10(scope10.current, {x: 160 - 0.05 * x, y: 832 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate11(scope11.current, {x: 1130 - 0.05 * x, y: 230 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate12(scope12.current, {x: -31 - 0.05 * x, y: 528 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate13(scope13.current, {x: 600 - 0.02 * x, y: 351 + 0.05 * y}, {duration: 0, ease: "easeOut"})
        animate14(scope14.current, {x: 428- 0.05 * x, y: 610 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate15(scope15.current, {x: 1068 - 0.05 * x, y: -90 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate16(scope16.current, {x: 275 - 0.02 * x, y: 365+ 0.05 * y}, {duration: 0, ease: "easeOut"})
        animate17(scope17.current, {x: 774- 0.05 * x, y: 579 + 0.08 * y}, {duration: 0, ease: "easeOut"})
        animate18(scope18.current, {x: 574 - 0.02 * x, y: 800 + 0.05 * y}, {duration: 0, ease: "easeOut"})
        animate19(scope19.current, {x: 1010- 0.05 * x, y: 800 + 0.08 * y}, {duration: 0, ease: "easeOut"})

    };
    useEffect(() => {
        // 定义鼠标移动事件处理函数
        // 在组件挂载时添加事件监听器
        window.addEventListener('mousemove', handleMouseMove);
        animate1(scope1.current, {y: [-2000, 143]}, {duration: 2, ease: "circOut"})
        animate2(scope2.current, {y: [-2000, 314]}, {duration: 2, ease: "circOut"})
        animate3(scope3.current, {y: [-2000, 10]}, {duration: 2, ease: "circOut"})
        animate4(scope4.current, {y: [-2000, 400]}, {duration: 2, ease: "circOut"})
        animate5(scope5.current, {y: [-2000, 286]}, {duration: 2, ease: "circOut"})
        animate6(scope6.current, {y: [-2000, 160]}, {duration: 2, ease: "circOut"})
        animate7(scope7.current, {y: [-2000, 15]}, {duration: 2, ease: "circOut"})
        animate8(scope8.current, {y: [-2000, 430]}, {duration: 2, ease: "circOut"})
        animate9(scope9.current, {y: [-2000, 246]}, {duration: 2, ease: "circOut"})
        animate10(scope10.current, {y: [-2000, 832]}, {duration: 2, ease: "circOut"})
        animate11(scope11.current, {y: [-2000, 230]}, {duration: 2, ease: "circOut"})
        animate12(scope12.current, {y: [-2000, 528]}, {duration: 2, ease: "circOut"})
        animate13(scope13.current, {y: [-2000, 351]}, {duration: 2, ease: "circOut"})
        animate14(scope14.current, {y: [-2000, 610]}, {duration: 2, ease: "circOut"})
        animate15(scope15.current, {y: [-2000, -90]}, {duration: 2, ease: "circOut"})
        animate16(scope16.current, {y: [-2000, 365]}, {duration: 2, ease: "circOut"})
        animate17(scope17.current, {y: [-2000, 579]}, {duration: 2, ease: "circOut"})
        animate18(scope18.current, {y: [-2000, 800]}, {duration: 2, ease: "circOut"})
        animate19(scope19.current, {y: [-2000, 800]}, {duration: 2, ease: "circOut"})
        const timer = setTimeout(() => {
            Isover.current = 1
        }, 2500);
        // 在组件卸载时移除事件监听器
        return () => {
            clearTimeout(timer)
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return(
        <div className={"flex w-full h-full align-middle items-center justify-center relative"}>
            <div className={"w-[1440px] h-full absolute -translate-x-1/2 left-1/2"}>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: -68, y: -2000}} ref={scope1}>
                    <Image src={"homesvgs/A2.svg"} alt={'1'} width={240} height={286.67}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 255, y: -2000}} ref={scope2}>
                    <Image src={"homesvgs/Circle1.svg"} alt={'1'} width={36} height={36}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 480, y: -2000}} ref={scope3}>
                    <Image src={"homesvgs/Circle2.svg"} alt={'1'} width={80} height={80}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 240, y: -2000}} ref={scope4}>
                    <Image src={"homesvgs/D2.svg"} alt={'1'} width={120} height={132.58}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 448, y: -2000}} ref={scope5}>
                    <Image src={"homesvgs/e1.svg"} alt={'1'} width={56} height={60.19}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 948, y: -2000}} ref={scope6}>
                    <Image src={"homesvgs/g1.svg"} alt={'1'} width={100} height={140.9}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 708, y: -2000}} ref={scope7}>
                    <Image src={"homesvgs/G2.svg"} alt={'1'} width={96} height={103.83}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 1235, y: -2000}} ref={scope8}>
                    <Image src={"homesvgs/H2.svg"} alt={'1'} width={320} height={350.8}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 740, y: -2000}} ref={scope9}>
                    <Image src={"homesvgs/i1.svg"} alt={'1'} width={64} height={143.95}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 160, y: -2000}} ref={scope10}>
                    <Image src={"homesvgs/K2.svg"} alt={'1'} width={140} height={154}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 1130, y: -2000}} ref={scope11}>
                    <Image src={"homesvgs/n1.svg"} alt={'1'} width={160} height={175.26}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: -31, y: -2000}} ref={scope12}>
                    <Image src={"homesvgs/N2.svg"} alt={'1'} width={220} height={235.71}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 600, y: -2000}} ref={scope13}>
                    <Image src={"homesvgs/s1.svg"} alt={'1'} width={48} height={61.46}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 428, y: -2000}} ref={scope14}>
                    <Image src={"homesvgs/U2.svg"} alt={'1'} width={100} height={114.54}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 1068, y: -2000}} ref={scope15}>
                    <Image src={"homesvgs/W2.svg"} alt={'1'} width={240} height={222.8}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 275, y: -2000}} ref={scope16}>
                    <Image src={"homesvgs/words.svg"} alt={'1'} width={720} height={212.79}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 774, y: -2000}} ref={scope17}>
                    <Image src={"homesvgs/Y2.svg"} alt={'1'} width={200} height={264.66}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 574, y: -2000}} ref={scope18}>
                    <Image src={"homesvgs/Circle2.svg"} alt={'1'} width={80} height={80}></Image>
                </motion.div>
                <motion.div className={"flex absolute overflow-hidden"} initial={{x: 1010, y: -2000}} ref={scope19}>
                    <Image src={"homesvgs/Circle1.svg"} alt={'1'} width={36} height={36}></Image>
                </motion.div>
            </div>

        </div>
    )

}


function ScrollText({children, baseVelocity = 1000}) {
    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });


    return (
        <div className={"overflow-hidden m-0 flex whitespace-nowrap flex-nowrap"}>
            <motion.div className={"flex whitespace-nowrap flex-nowrap text-black text-[440px] font-mono font-semibold"} style={{x}}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>

    )
}

function ScrollText2({children, baseVelocity = 1000}) {
    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });


    return (
        <div className={"overflow-hidden  mt-[-280px] flex whitespace-nowrap flex-nowrap opacity-15"}>
            <motion.div className={"flex whitespace-nowrap flex-nowrap text-black text-[440px] font-mono font-semibold"} style={{x}}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>

    )
}


export default function Home() {
    const router = useRouter();
    return (
        <div className={'w-full flex flex-col overflow-hidden align-middle items-center justify-center'}>
            <div className={"h-dvh min-h-[1024px] w-full flex flex-col align-middle items-center justify-center"}>
                <HomeSvgs/>
                <ScrollInfo/>
            </div>
            <div className={"w-full flex h-[2560px] flex-col align-middle items-center justify-center relative"}>
                <div
                    className={"w-full h-[2560px] flex flex-col align-middle items-center justify-center absolute top-0"}>
                    <motion.div className={"w-[3200px] flex flex-col  absolute top-0"}
                                animate={{rotate: -15}}>
                        <ScrollText baseVelocity={-0.5}>
                            About Me&nbsp;
                        </ScrollText>
                        <ScrollText2 baseVelocity={0.5}>
                            About Me&nbsp;
                        </ScrollText2>
                    </motion.div>
                    <motion.div className={"w-[3200px] flex flex-col  absolute top-[1400px]"}
                                animate={{rotate: -15}}>
                        <ScrollText baseVelocity={-0.5}>
                            Project&nbsp;
                        </ScrollText>
                        <ScrollText2 baseVelocity={0.5}>
                            Project&nbsp;
                        </ScrollText2>
                    </motion.div>
                </div>
                <div
                    className={"w-full h-[2560px] flex flex-col align-middle items-center justify-center absolute top-0"}>
                    <div className={"w-full flex items-center align-middle flex-col absolute top-[640px]"}>
                        <div className={"w-[840px] h-full flex items-start align-middle flex-col"}>
                            <text className={"font-['Noto_Sans_JP'] text-black font-medium text-[32px]"}>私について
                            </text>
                            <text
                                className={"font-['Noto_Sans_JP'] text-[#E60012] font-bold text-[36px]"}>デザインは、人々の生活に技術を活かせるために
                            </text>
                            <div className={"w-full h-[80px] "}></div>
                            <text className={"font-['Noto_Sans_JP'] text-black font-regular text-[20px]"}>はじめまして。
                            </text>
                            <text
                                className={"font-['Noto_Sans_JP'] font-regular text-[20px]"}>私はNET技術を活用して、主にUI・UXを中心するデザイナーです。
                            </text>
                            <div className={"w-full h-[80px] "}></div>
                            <text
                                className={"font-['Noto_Sans_JP'] text-black font-regular text-[20px]"}>Webデザイナーとして、大量のページ動画と効果を確実に表現するため、
                            </text>
                            <text
                                className={"font-['Noto_Sans_JP'] font-regular text-[20px]"}>Reactなどのプログラミングスキルを使って、プロトタイプを作成される。
                            </text>
                            <div className={"w-full h-[80px] "}></div>
                            <text
                                className={"font-['Noto_Sans_JP'] text-black font-regular text-[20px]"}>実際に、このページも自らデザインから作成まで作ったものです。
                            </text>
                            <text
                                className={"font-['Noto_Sans_JP'] font-regular text-[20px]"}>ドメイン名購入以外完全に無料となります。
                            </text>
                            <div className={"w-full h-[80px] "}></div>
                            <text
                                className={"font-['Noto_Sans_JP'] text-black font-regular text-[20px]"}>このように、自分の発想をできるだけ詳しく伝えるように、
                            </text>
                            <text
                                className={"font-['Noto_Sans_JP'] font-regular text-[20px]"}> みんなの生活に直接に関わるデザインをしています。
                            </text>
                            <div className={"w-full h-[80px] "}></div>
                            <text
                                className={"font-['Noto_Sans_JP'] text-black font-bold text-[24px] underline hover:text-red1 cursor-pointer" } onClick={() => router.push('https://github.com/Nariharasama/website2025')}>More
                                about
                                this site
                            </text>
                        </div>
                    </div>
                    <div className={"w-full flex items-center align-middle flex-col absolute top-[2040px]"}>
                        <div className={"w-[840px] h-full flex items-end align-middle flex-col"}>
                            <text className={"font-['Noto_Sans_JP'] text-black font-medium text-[32px]"}>プロジェクト
                            </text>
                            <text
                                className={"font-['Noto_Sans_JP'] text-[#E60012] font-bold text-[36px]"}>誰でも使える技術に
                            </text>
                            <div className={"w-full h-[80px] "}></div>
                            <text
                                className={"font-['Noto_Sans_JP'] text-black font-regular text-[20px]"}>新世代の技術力をみんなの生活に送って、人々のためのデザインです。
                            </text>
                            <text
                                className={"font-['Noto_Sans_JP'] font-regular text-[20px]"}>誰でもいつでも快適的に利用できるように、技術と生活の切り口を探します。
                            </text>
                            <div className={"w-full h-[80px] "}></div>
                            <text
                                className={"font-['Noto_Sans_JP'] text-black font-bold text-[24px] underline hover:text-red1 cursor-pointer"} onClick={() => router.push('https://drive.google.com/file/d/1RI9PfXnHIK7vozuW1ZiZ7NO80lSLa-J1/view?usp=drive_link')}>Portofolio
                            </text>


                        </div>
                    </div>
                </div>
            </div>
            <div
                className={"w-full h-[128px] px-[56px] pt-[40px] flex flex-row items-center align-middle justify-center space-x-[16px]"}>
                <text className={"font-['Noto_Sans_JP'] text-black text-[20px] font-medium"}>The site is deployed on
                    vercel via
                    Github.Don't use this site for illegal purposes.
                </text>
                <div className={"flex cursor-pointer"} onClick={() => router.push('https://nextjs.org/')}>
                    <text
                        className={"font-['Noto_Sans_JP'] text-black text-[20px] font-medium underline "}
                    >Next.js
                    </text>
                </div>
                <text className={"font-['Noto_Sans_JP'] text-black text-[20px] font-medium underline cursor-pointer"}
                      onClick={() => router.push('https://vercel.com/')}>Vercel
                </text>
                <text className={"font-['Noto_Sans_JP'] text-black text-[20px] font-medium underline cursor-pointer"}
                      onClick={() => router.push('https://motion.dev/')}>Framer motion
                </text>
            </div>
        </div>

    );
}
