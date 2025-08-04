import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span className="greeting">👋 Olá, eu sou</span>
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeInUp}>
            Victor Emanoel
          </motion.h1>
          <motion.h2 variants={fadeInUp}>
            <span className="hero-subtitle">Desenvolvedor Front-end</span>
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Sou um desenvolvedor front-end apaixonado por criar experiências
            digitais incríveis. Vamos construir algo incrível juntos!
          </motion.p>
          <motion.div className="hero-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="btn-primary"
              whileTap={{ scale: 0.95 }}
            >
              Veja meus projetos
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileTap={{ scale: 0.95 }}
            >
              Entre em contato
            </motion.a>
          </motion.div>
          <motion.div className="hero-socials" variants={staggerContainer}>
            <motion.a target="_blank" href="https://github.com/vctrr1">
              <FaGithub />
            </motion.a>
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/victtoremmanoel/"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
