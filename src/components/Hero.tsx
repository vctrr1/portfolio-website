import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Prism as SyntexHighLighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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
          <motion.h1 className="hero-title" variants={fadeInUp}>
            Victor Emanoel
          </motion.h1>
          <motion.h2 variants={fadeInUp}>
            <span className="hero-subtitle">Desenvolvedor Full Stack</span>
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Sou um desenvolvedor full stack apaixonado por criar experiências
            digitais incríveis. Vamos construir algo incrível juntos!
          </motion.p>
          <motion.div className="hero-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="btn-primary"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
            >
              Veja meus projetos
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
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
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntexHighLighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "1rem",
                borderRadius: "15px",
                border: "1px solid var(--card-border)",
                height: "100%",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
              }}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Victor",
  role: "Desenvolvedor Fullstack",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL", "Python"],
    frameworks: [ 
     "React",
     "Next.js", 
     "Node.js", 
     "Express", 
     "Prisma", 
     "TailwindCSS"
    ],
  },
  caracteristicas: [
    "entusiasta de arquitetura limpa",
    "adepto de testes e boas práticas",
    "fã de dark mode",
    "explorador de tecnologias open-source",
    "API integrator nato",
  ],
  declaracaoDeMissao:
    "Transformar ideias em soluções escaláveis e código limpo que dá orgulho de manter",
  disponibilidade: "Disponível para novos projetos e colaborações"
};`}
            </SyntexHighLighter>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
