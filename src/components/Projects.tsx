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
        <a
          href="http://social-media-app-smoky-six.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
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
              performance na publicação.
            </p>
            <div className="project-tech">
              <span className="tech">React</span>
              <span className="tech">TypeScript</span>
              <span className="tech">TailwindCSS</span>
              <span className="tech">Supabase</span>
            </div>
          </motion.div>
        </a>
        {/** card 2 */}
        <a
          href="https://wedding-list-nextjs.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
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
              convidados. Com design responsivo e navegação simples, transforma
              o planejamento dos itens da sua casa nova em uma experiência
              prática e elegante.
            </p>
            <div className="project-tech">
              <span className="tech">Next.js</span>
              <span className="tech">TypeScript</span>
              <span className="tech">TailwindCSS</span>
              <span className="tech">MongoDB</span>
              <span className="tech">Auth.js</span>
            </div>
          </motion.div>
        </a>
        {/** card 3*/}
        <a
          href="https://barbershop-project-ruby.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
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
            <p>
              Plataforma web para agendamento online em barbearias. Permite que
              usuários encontrem barbearias, visualizem serviços, realizem
              reservas e acompanhem seus agendamentos de forma prática e
              intuitiva. (MOBILE ONLY).
            </p>
            <div className="project-tech">
              <span className="tech">Next.js</span>
              <span className="tech">TypeScript</span>
              <span className="tech">TailwindCSS</span>
              <span className="tech">NextAuth</span>
            </div>
          </motion.div>
        </a>
        {/** card 4*/}
        <a
          href="https://restaurant-page-cyan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
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
            <p>
              Plataforma web de pedidos para restaurantes. Permite ao usuário
              visualizar o cardápio, selecionar produtos, montar pedidos
              personalizados, acompanhar o status e escolher o método de
              consumo. Interface moderna e responsiva.
            </p>
            <div className="project-tech">
              <span className="tech">Next.js</span>
              <span className="tech">TypeScript</span>
              <span className="tech">TailwindCSS</span>
              <span className="tech">Prisma ORM</span>
            </div>
          </motion.div>
        </a>
        {/** card 5*/}
        <a
          href="https://u-tools-nextjs.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
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
            <p>
              uTools (Userful Tools) é uma plataforma web que reúne diversas
              ferramentas práticas e essenciais para o dia a dia em um só lugar.
              O projeto foi desenvolvido com foco em simplicidade, produtividade
              e experiência do usuário, oferecendo uma interface moderna e
              responsiva.
            </p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>TailwindCSS</span>
            </div>
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
