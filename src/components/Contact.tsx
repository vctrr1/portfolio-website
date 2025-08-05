import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        Entre em Contato
      </motion.h2>
      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form className="contact-form">
          <motion.input
            type="text"
            name="name"
            placeholder="Nome"
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.textarea
            name="message"
            placeholder="Mensagem"
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.button
            className="submit-button"
            type="submit"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
