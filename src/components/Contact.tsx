import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Mensagem enviada com sucesso!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      formRef.current?.reset();
    } catch {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Erro ao enviar mensagem. Tente novamente mais tarde.`,
      });
    }
  };

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
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Nome"
            whileFocus={{ scale: 1.02 }}
            required
            onChange={handleInputChange}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            whileFocus={{ scale: 1.02 }}
            required
            onChange={handleInputChange}
          />
          <motion.textarea
            name="message"
            placeholder="Mensagem"
            whileFocus={{ scale: 1.02 }}
            required
            onChange={handleInputChange}
          />
          <motion.button
            className="submit-button"
            type="submit"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Enviando..." : "Enviar Mensagem"}
          </motion.button>
          {formStatus.message && (
            <motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              }`}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
