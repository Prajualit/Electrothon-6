import React from 'react'
import { motion } from "framer-motion";
import { TitleText } from "../../components/Tracks_new/CustomTexts";
import { staggerContainer } from "../../components/Tracks_new/motion";
import styles from "../../components/Tracks_new/style";


const Winners = () => {
  return (
    <div id="left-prize" className="mb-10 flex flex-col space-y-10 justify-center items-center w-full ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col text-white`}
      >
        <TitleText
          title={
            <>
              <div className=" looked text-4xl lg:text-7xl font-bold tracking-wider lg:my-6 mb-2">
                Winners
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <div className='w-[80%] h-[500px] flex rounded-3xl bg-[#ffcaca11] '>
        <div className='w-full space-y-10 flex flex-col items-center justify-end h-full'>
          <div className='flex flex-col space-y-3 items-center text-white '>
            <span className='text-[48px] font-bold text-center leading-none'>HarvestBerg Solutions</span>
            <span className=''>By Heisenberg</span>
          </div>
          <div className='w-full h-1/3 rounded-t-xl rounded-es-3xl bg-[#9eb0ae] flex items-center justify-center text-[60px] font-bold'>
            2
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-end h-full space-y-10'>
          <div className='flex flex-col items-center text-white '>
            <span className='text-[48px] font-bold'>Bridgeline</span>
            <span className=''>By CrypticCypher</span>
          </div>
          <div className='w-full h-1/2 flex items-center justify-center rounded-t-xl bg-[#e2c037] text-[60px] font-bold'>
            1
          </div>
        </div>
        <div className='w-full flex flex-col space-y-10 items-center justify-end h-full'>
          <div className='flex flex-col space-y-3 items-center text-white '>
            <span className='text-[48px] font-bold text-center leading-none'>EcoBeach</span>
            <span className=''>By Echo</span>
          </div>
          <div className='w-full rounded-ee-3xl rounded-t-xl h-1/4 bg-[#f47e3f] flex items-center justify-center text-[60px] font-bold'>
            3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winners
