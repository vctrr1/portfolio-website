import { motion } from "framer-motion";
import webSite1 from "/projects/blog-app.png";
import webSite2 from "/projects/wed-list.png";
import webSite3 from "/projects/barbershop.png";
import webSite4 from "/projects/restaurant-page.png";
import webSite5 from "/projects/utools.png";

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

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} //é como o initial mas so começa a animar quando entra na viewport
      viewport={{ once: true }} //exibe a animação apenas uma vez
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="projects-title"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Meus Projetos
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url(${webSite1})` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <h3>Blog.app</h3>
          <p>
            Blog App Vite é uma plataforma moderna de blogs desenvolvida com
            Vite, React e tecnologias web atuais. Permite criar, editar e
            compartilhar posts de forma rápida e intuitiva, com uma interface
            responsiva e amigável. Ideal para quem busca praticidade e
            performance na publicação
          </p>
          <div className="project-tech">
            <span className="tech">React</span>
            <span className="tech">TypeScript</span>
            <span className="tech">TailwindCSS</span>
            <span className="tech">Supabase</span>
          </div>
        </motion.div>
        {/** card 2 */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url(${webSite2})` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <h3>Wedding List</h3>
          <p>
            Um site moderno e intuitivo para listas de presentes de casamento,
            facilitando a organização dos noivos e a participação dos
            convidados. Com design responsivo e navegação simples, transforma o
            planejamento dos itens da sua casa nova em uma experiência prática e
            elegante.
          </p>
          <div className="project-tech">
            <span className="tech">Next.js</span>
            <span className="tech">TypeScript</span>
            <span className="tech">TailwindCSS</span>
            <span className="tech">MongoDB</span>
            <span className="tech">Auth.js</span>
          </div>
        </motion.div>
        {/** card 3*/}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url(${webSite3})` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <h3>Barbershop</h3>
          <p></p>
          <div className="project-tech">
            <span className="tech">React</span>
            <span className="tech">TypeScript</span>
            <span className="tech">TailwindCSS</span>
            <span className="tech">Supabase</span>
          </div>
        </motion.div>
        {/** card 4*/}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url(${webSite4})` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <h3>Delivery Site</h3>
          <p></p>
          <div className="project-tech">
            <span className="tech">React</span>
            <span className="tech">TypeScript</span>
            <span className="tech">TailwindCSS</span>
            <span className="tech">Supabase</span>
          </div>
        </motion.div>
        {/** card 5*/}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url(${webSite5})` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <h3>Utools</h3>
          <p></p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
            <span>Supabase</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
