import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

const MainComp = () => {
    const ref = useRef(null)       
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center center", "start end"]
    })

    return (
        <>
            <motion.div className="flex flex-col items-center w-full h-[200rem] bg-blue-800" ref={ref}>
                <motion.div className="relative flex flex-col items-center w-11/12 h-[50rem] top-32 bg-red-900">
                    <motion.p whileInView={{scale: [1, 2, 2, 1, 1]}} transition={{duration: 2}} className="text-6xl font-bold absolute text-white">Parbéns Irmão!!!</motion.p> 
                    <motion.p whileInView={{scale: [1, 2, 2, 1, 1]}} transition={{duration: 2}} className="text-3xl font-bold absolute top-[90%] right-[40%] text-red-200">O terror da CIA e do Demiurgo(ETs e Reptilianos) ---- Em busca da verdade</motion.p>
                    <motion.img whileInView={{transform: "rotate(360deg)"}} className="w-[50rem] rounded-full absolute top-20 left-40" src="/Game-Of-Thrones-Drogon-Face-e155-scaled.webp"></motion.img>
                    <motion.img className="w-[25rem] rounded-3xl absolute top-20 right-40" src="/Design sem nome (1).png"></motion.img>
                    <p className="absolute top-[110%] text-2xl font-bold animate-bounce text-gray-800">Continua scrollando(kkkkk o user é muito burro)</p>
                </motion.div> 
                <motion.div className="mt-[20rem] w-full h-[50rem] bg-gray-400 relative flex flex-col items-center">
                    <motion.p whileInView={{scale: [1, 2, 2, 1, 1]}} transition={{duration: 2}} className="text-6xl text-blue-700 font-bold">Numero 1: Valeu por ser meu amigo</motion.p>
                    <motion.img whileInView={{transform: "rotate(360deg)"}} transition={{duration: 2}} className="w-[25rem] rounded-3xl absolute top-20 right-40" src="/Like.webp"></motion.img>
                    <motion.img whileInView={{transform: "rotate(360deg)"}} className="w-[25rem] rounded-3xl absolute top-20 left-40" src="/EU.png"></motion.img>
                    <motion.img className="w-[25rem] rounded-3xl absolute top-20 left-[30%]" src="/download.jpeg"></motion.img>
                    <motion.img className="w-[25rem] rounded-3xl absolute top-20 right-[30%]" src="/download (1).jpeg"></motion.img>
                    <p className="absolute top-[70%] text-6xl font-bold animate-bounce text-gray-800">Melhores Amigos</p>
                    <p className="absolute top-[78%] text-2xl font-bold animate-bounce text-gray-800">Valeu por me apresentar game of thrones VALAR MORGHULIS</p>
                </motion.div>
                <motion.div className="mt-[20rem] w-full h-[50rem] bg-gray-400 relative flex flex-col items-center">
                    <motion.p whileInView={{scale: [1, 2, 2, 1, 1]}} transition={{duration: 2}} className="text-6xl text-blue-700 font-bold">Numero 2: Cansei kkkkkkkk</motion.p>
                    <motion.img whileInView={{transform: "rotate(360deg)"}} transition={{duration: 2}} className="w-[25rem] rounded-3xl absolute top-20 left-[30%]" src="/hqdefault.jpg"></motion.img>
                    <motion.p whileInView={{scale: [1, 2, 2, 1, 1]}} transition={{duration: 2}} className="text-3xl text-white font-bold absolute top-[30%] left-[60%] z-10">24 anos? ta ficando véiokkkkkk</motion.p>
                    <motion.img whileInView={{transform: "rotate(360deg)"}} transition={{duration: 2}} className="w-[35rem] rounded-3xl absolute top-20 right-40" src="/images (5).jpeg"></motion.img>
                    <motion.p whileInView={{scale: [1, 2, 2, 1, 1]}} transition={{duration: 2}} className="text-3xl text-white font-bold absolute top-[30%] right-[60%] z-10">Isso é só metade do tempo pra ser um dev frontend olha que legal</motion.p>
                    <motion.img whileInView={{transform: "rotate(20deg)"}} className="w-[60rem] rounded-3xl absolute top-[70%] left-40" src="/vhagar-1600x900.webp"></motion.img>
                </motion.div>
                <motion.div className="mt-[20rem] w-full h-[50rem] bg-gray-400 relative flex flex-col items-center">
                    <motion.p whileInView={{scale: [1, 2, 2, 1, 1]}} transition={{duration: 2}} className="text-6xl text-blue-700 font-bold">Não se esqueça</motion.p>
                    <motion.img whileInView={{transform: "rotate(360deg)"}} transition={{duration: 2}} className="w-full rounded-3xl absolute top-20" src="/editedrami-malek-2015-tv-series-mr.-robot-poster-wallpaper.webp"></motion.img>
                    <p className="absolute top-[70%] text-6xl font-bold animate-bounce text-red-600">FVCK SOCIETY</p>
                    <p className="absolute top-[78%] text-2xl font-bold animate-bounce text-blue-400">Deus(jesus christ) Abençoe, bença</p>
                    <p className="absolute top-[120%] text-6xl font-bold animate-bounce text-white">PARABEINX</p>
                </motion.div>
            </motion.div>
        </>
    );
}
 
export default MainComp;