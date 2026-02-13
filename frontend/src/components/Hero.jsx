import { useNavigate } from "react-router-dom";
import { easeIn, motion, scale, spring, stagger} from "motion/react";
import { useRef } from "react"; 
export default function Hero() {

    const infoRef = useRef<HTMLDivElement | null>(null)

    const navigate = useNavigate();

    const GetstartedButtonClick=()=>{
        navigate('/home');
    };

    const ExploreButtonClick=()=>{
        infoRef.current?.scrollIntoView()
    };

  return (
    <section>
    <section className="flex justify-center items-center mx-auto">
      <motion.div 
      initial={{opacity:0,
        scale:0,
      }}
      whileInView={{
        opacity:1,
        scale:1
      }}
      transition={{
        duration:0.5,
      }}
      className="justify-center items-center text-5xl text-center font-bold text-shadow-indigo-50">
        Summarize Documents<br/><motion.span
        initial={{
          opacity:0
        }}
        whileInView={{
          opacity:1,
        }} 
        transition={{
          duration:1,
          delay:1,
        }}

        className="text-emerald-400">In Seconds </motion.span>
      </motion.div>
    </section>

      <section className="flex items-center justify-center">
      <div className="mt-5">
        <motion.div 
        initial={{
          translateY:100,
          opacity:0
        }}
        whileInView={{
          translateY:0,
          opacity:1
        }}
        transition={{
          duration:2,
          delay:1,
          type:spring
        }}
        className="text-2xl font-bold bg-gradient-to-l from-lime-800 to-lime-600 bg-clip-text text-transparent">
          Hassle Free, Fast, Secure
        </motion.div>
      </div>
      </section>
      <section className="flex flex-row items-center justify-center gap-4">
        <motion.button

        onClick={GetstartedButtonClick}
        initial={{
          opacity:0,
          scale:0
        }}
        whileInView={{
          opacity:1,
          scale:1
        }}
        transition={{
          delay:2,
          duration:1,
          type:spring
        }}
        className="flex flex-row items-center mt-10 text-shadow-white bg-green-100">
            <svg className="m-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>
          <span className="ml-1">Get Started</span>
        </motion.button>

        <motion.button
        onClick={ExploreButtonClick}
        initial={{
          opacity:0,
          scale:0
        }}
        whileInView={{
          opacity:1,
          scale:1
        }}
        transition={{
          delay:2,
          duration:1,
          type:spring
        }}
        className="flex flex-row mt-10 text-shadow-white bg-green-100 items-center"
        >
            <svg className="m-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
</svg>
          <span className="ml-1">Explore</span>
        </motion.button>
      </section>
    </section>
  );
}