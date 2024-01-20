import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				I&rsquo;m a&nbsp;Driven and meticulous Financial and Accounting Specialist with 8+ Years of experience
analyzing financial data, reviewing cases, and generating reports. Personable professional skilled
in forecasting budgets, general accounting, developing financial models, and conducting
market/financial research. Adept at gathering requirements data, optimizing processes, and
coordinating teams to implement sales generation strategies.I possess a wide range of the following technical competencies: 
				<br />
				
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
