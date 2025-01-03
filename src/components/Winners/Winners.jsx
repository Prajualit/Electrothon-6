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
      <div className='w-[80%] h-[600px] flex rounded-3xl bg-[#ffcaca11] '>
        <div className='w-full space-y-10 flex flex-col items-center justify-end h-full'>
          <div className='flex flex-col space-y-3 items-center text-white '>
            <img className='rounded-full scale-110 mb-3' src="https://electrothon6.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F37bbc16b525141d8ba22237d8aae592d%2Fprojects%2Fef82fea8ca2a4bc0a4b1172c1fba0d19%2Feb638c42-bd1d-41e1-bfe8-908cba7434c3.jpeg&w=64&q=75" alt="" />
            <span className='text-[48px] font-bold text-center leading-none'>HarvestBerg Solutions</span>
            <span className=''>By Heisenberg</span>
          </div>
          <div className='w-full h-1/3 rounded-t-xl flex-col rounded-es-3xl bg-[#9eb0ae] flex items-center justify-center font-bold'>
            <span className='text-[43px] font-bold'>1st Runners-up</span>
            <span className='text-[18px]'>$240</span>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-end h-full space-y-10'>
          <div className='flex flex-col items-center text-white '>
            <img className='rounded-full scale-110 mb-3' src="https://electrothon6.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F37bbc16b525141d8ba22237d8aae592d%2Fprojects%2Fee212dbec4cf4ce3ae866373c9f19fbe%2F152fe09f-0eb5-405d-8e70-1904793ac92a.jpeg&w=64&q=75" alt="" />
            <span className='text-[48px] font-bold'>Bridgeline</span>
            <span className=''>By CrypticCypher</span>
          </div>
          <div className='w-full h-1/2 flex flex-col items-center justify-center rounded-t-xl bg-[#e2c037] font-bold'>
            <span className='text-[48px] font-bold'>Winners</span>
            <span className='text-[20px]'>$360</span>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-10 items-center justify-end h-full'>
          <div className='flex flex-col items-center text-white '>
            <img className='scale-125 rounded-full mb-4' src="https://electrothon6.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F37bbc16b525141d8ba22237d8aae592d%2Fprojects%2F9971119d29fc4a6381b1230178d9a0d2%2F96074c5d-24ab-4c92-acb3-dc82c9eea318.jpeg&w=64&q=75" alt="" />
            <span className='text-[48px] font-bold text-center'>EcoBeach</span>
            <span className=''>By Echo</span>
          </div>
          <div className='w-full rounded-ee-3xl rounded-t-xl h-1/4 bg-[#f47e3f] flex items-center justify-center flex-col font-bold'>
            <span className='text-[40px] font-bold'>2nd Runners-up</span>
            <span className='text-[18px]'>$120</span>
          </div>
        </div>
      </div>
      <div className='w-[80%] h-[600px] flex rounded-3xl bg-[#ffcaca11]'></div>
    </div>
  )
}

export default Winners
