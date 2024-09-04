'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const cardVariants = {
  initial: {
    rotateX: 0,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Initial subtle shadow
  },
  hover: {
    rotateX: 20,
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.9)', // Darker shadow upon hover
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    y: 50, // Start below the card
  },
  hover: {
    opacity: 1,
    y: 0, // Move to the bottom of the card
  },
};

const HoverCard = () => {
  return (
    <div className='max-w-7xl mx-auto py-20'>
      <div className='mx-36'>

      <div className='md:grid hidden md:grid-cols-3'>
        <Java />
        <Bedrock />
        <Terraria />
      </div>
      <div className='grid md:hidden space-y-20 grid-cols-1'>
        <Image src='/assets/java.jpg' alt='Java' width={300} height={300} />
        <Image src='/assets/bedrock.jpg' alt='Bedrock' width={300} height={300} />
        <Image src='/assets/terraria-card.jpg' alt='Terraria' width={300} height={300} />
      </div>
      </div>
    </div>
  );
}

const Java = () => {
  return (
    <motion.div
      className="relative perspective-container h-96 w-72 mx-auto"
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="relative h-[450px] w-[550px] rounded-lg flex items-end justify-center bg-cover bg-center overflow-hidden"
        variants={cardVariants}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center',
          backgroundImage: 'url(/assets/java.jpg)', // Background image
        }}
      >
      
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 z-20 transform"
        variants={imageVariants}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <Image
          src="/assets/minecraft-character.webp"
          alt="Minecraft characters"
          width={700} // Increased image size
          height={700}
          className=""
        />
        <Image 
          src="/assets/mc-java.png"
          alt="Terraria logo"
          width={300}
          height={300}
          className="absolute bottom-0 right-0"
        />
      </motion.div>
    </motion.div>
  );
};
const Bedrock = () => {
  return (
    <motion.div
      className="relative perspective-container h-96 w-72 mx-auto"
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <motion.div
        className="relative h-[450px] w-[550px] rounded-lg flex items-end justify-center bg-cover bg-center overflow-hidden"
        variants={cardVariants}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center',
          backgroundImage: 'url(/assets/bedrock.jpg)', // Background image
        }}
      >
      
      </motion.div>
      <motion.div
        className="absolute bottom-0 z-20 transform"
        variants={imageVariants}
        transition={{ type: 'spring', stiffness: 250, damping: 15 }}
      >
        <Image
          src="/assets/minecraft-bedrock-character.png"
          alt="Minecraft characters"
          width={700} // Increased image size
          height={700}
          className=""
        />
        <Image 
          src="/assets/mc-bedrock.png"
          alt="Terraria logo"
          width={300}
          height={300}
          className="absolute bottom-0 right-0"
        />
      </motion.div>
    </motion.div>
  );
};
const Terraria = () => {
  return (
    <motion.div
      className="relative perspective-container h-96 w-72 mx-auto"
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <motion.div
        className="relative h-[450px] w-[550px] rounded-lg flex items-end justify-center bg-cover bg-center overflow-hidden"
        variants={cardVariants}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center',
          backgroundImage: 'url(/assets/terraria-card.jpg)', // Background image
        }}
      >
      
      </motion.div>
      <motion.div
        className="absolute bottom-0 z-20 transform"
        variants={imageVariants}
        transition={{ type: 'spring', stiffness: 250, damping: 15 }}
      >
        <Image
          src="/assets/terraria-character.webp"
          alt="Minecraft characters"
          width={700} // Increased image size
          height={700}
          className=""
        />
        <Image 
          src="/assets/terraria-logo.png"
          alt="Terraria logo"
          width={300}
          height={300}
          className="absolute bottom-0 right-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default HoverCard;
