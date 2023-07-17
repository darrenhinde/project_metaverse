'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { brandVars } from '../constants/index.js';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title={`|About ${brandVars.name} `} textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white"></span>
         We are driven by a mission to make data accessible, understandable,
         and actionable for businesses of all sizes. 
         Our goal is to bridge the gap between raw data and meaningful insights, 
         enabling businesses to make 
         {' '}
         <span className="font-extrabold text-white">smarter decisions, faster</span>
         {'. '} 
        
         
          We understood early on that data isn't just about numbers;
           it's about the stories those numbers tell, the insights they provide,
            and the power they offer to transform businesses.      
          By bringing the latest technology and best data practices to our clients, 
          we aim to revolutionize the way businesses operate, one byte at a time.
          In everything we do, we're committed to transparency, integrity, 
          and the highest standards of professional service. 
          Because 
          {' '}
          <span className="font-extrabold text-white">when you succeed, we succeed.</span>
           {' '}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
