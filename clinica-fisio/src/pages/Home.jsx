import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUserMd, 
  FaHandHoldingMedical, 
  FaHospital,
  FaWalking,
  FaRunning,
  FaBrain,
  FaUserInjured,
  FaDumbbell,
  FaHeartbeat,
  FaStethoscope
} from 'react-icons/fa'
import React from 'react'

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <FaHandHoldingMedical className="logo-icon" />
            <span className="logo-text">Viva Bem</span>
          </Link>
          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#especialistas">Especialistas</a>
            <a href="#galeria">Galeria</a>
            <Link to="/contato" className="btn-agendar">Agendar</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          backgroundImage: 'url(/assets/clinica/fora-horizontal.png)'
        }}
      >
        <div className="hero-overlay">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Sua saúde em primeiro lugar</h1>
            <p>Tratamentos personalizados com profissionais especializados para seu bem-estar</p>
            <div className="hero-buttons">
              <Link to="/contato" className="btn-primary">
                Agende sua Consulta
              </Link>
              <a href="#servicos" className="btn-secondary">
                Conheça Nossos Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>+1000</h3>
            <p>Pacientes Atendidos</p>
          </div>
          <div className="stat-item">
            <h3>15</h3>
            <p>Anos de Experiência</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Satisfação</p>
          </div>
          <div className="stat-item">
            <h3>12</h3>
            <p>Especialistas</p>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="sobre" ref={ref}>
        <motion.div 
          className="sobre-content"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <div className="sobre-text">
            <h2>Sobre a Clínica Viva Bem</h2>
            <p>
              Há 15 anos, a Clínica Viva Bem é referência em fisioterapia e reabilitação.
              Nossa equipe multidisciplinar trabalha com as técnicas mais modernas e equipamentos
              de última geração para garantir sua recuperação e bem-estar.
            </p>
            <div className="sobre-features">
              <div className="feature">
                <FaUserMd className="feature-icon" />
                <h4>Profissionais Qualificados</h4>
              </div>
              <div className="feature">
                <FaHospital className="feature-icon" />
                <h4>Estrutura Moderna</h4>
              </div>
              <div className="feature">
                <FaHandHoldingMedical className="feature-icon" />
                <h4>Atendimento Humanizado</h4>
              </div>
            </div>
          </div>
                      <div className="sobre-image">
              <img src="/assets/clinica/logo1.png" alt="Clínica Viva Bem" />
            </div>
        </motion.div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="servicos">
        <h2>Nossos Serviços</h2>
        <div className="servicos-grid">
          {[
            {
              title: "Fisioterapia Ortopédica",
              description: "Tratamento especializado para lesões musculares e articulares",
              icon: "🦴"
            },
            {
              title: "Fisioterapia Esportiva",
              description: "Recuperação e prevenção de lesões para atletas",
              icon: "⚽"
            },
            {
              title: "Pilates Clínico",
              description: "Fortalecimento e reabilitação com método Pilates",
              icon: "💪"
            },
            {
              title: "RPG",
              description: "Reeducação Postural Global para alinhamento corporal",
              icon: "🧘‍♀️"
            },
            {
              title: "Acupuntura",
              description: "Tratamento da dor e equilíbrio energético",
              icon: "🎯"
            },
            {
              title: "Fisioterapia Neurológica",
              description: "Reabilitação para pacientes neurológicos",
              icon: "🧠"
            }
          ].map((servico, index) => (
            <motion.div 
              key={index}
              className="servico-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="servico-icon">{servico.icon}</span>
              <h3>{servico.title}</h3>
              <p>{servico.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Especialistas Section */}
      <section id="especialistas" className="especialistas">
        <h2>Nossa Equipe</h2>
        <div className="especialistas-grid">
          {[
            {
              nome: "Dra. Sofia Mendes",
              cargo: "Fisioterapeuta Especialista",
              especialidade: "Ortopedia e Traumatologia",
              descricao: "Especialista em reabilitação ortopédica com mais de 12 anos de experiência. Pós-graduada em Terapia Manual e Posturologia.",
              icons: [
                { icon: FaUserInjured, label: "Reabilitação" },
                { icon: FaWalking, label: "Recuperação" }
              ]
            },
            {
              nome: "Dr. Lucas Oliveira",
              cargo: "Fisioterapeuta Especialista",
              especialidade: "Fisioterapia Esportiva",
              descricao: "Mestre em Fisioterapia Esportiva, especializado em recuperação de atletas e prevenção de lesões. Experiência com equipes profissionais.",
              icons: [
                { icon: FaRunning, label: "Esportes" },
                { icon: FaDumbbell, label: "Fortalecimento" }
              ]
            },
            {
              nome: "Dra. Isabella Santos",
              cargo: "Fisioterapeuta Especialista",
              especialidade: "Neurologia",
              descricao: "Especialista em reabilitação neurológica, com formação internacional em técnicas avançadas de tratamento. Experiência com pacientes de todas as idades.",
              icons: [
                { icon: FaBrain, label: "Neurologia" },
                { icon: FaHeartbeat, label: "Reabilitação Neural" }
              ]
            }
          ].map((especialista, index) => (
            <motion.div 
              key={index}
              className="especialista-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="especialista-icons">
                {especialista.icons.map((item, i) => (
                  <div key={i} className="icon-item">
                    {React.createElement(item.icon, { className: "especialista-icon" })}
                    <span className="icon-label">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="especialista-info">
                <h3>{especialista.nome}</h3>
                <p className="cargo">{especialista.cargo}</p>
                <p className="especialidade">{especialista.especialidade}</p>
                <p className="descricao">{especialista.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="gallery">
        <h2>Conheça Nossa Estrutura</h2>
        <div className="gallery-grid">
          {[
            {
              imagem: "/assets/clinica/consultorio-1.png",
              descricao: "Sala de Fisioterapia Moderna"
            },
            {
              imagem: "/assets/clinica/academia1.png",
              descricao: "Academia Equipada"
            },
            {
              imagem: "/assets/clinica/dentro.png",
              descricao: "Área Interna da Clínica"
            }
          ].map((item, num) => (
            <motion.div 
              key={num}
              className="gallery-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.imagem} alt={item.descricao} />
              <div className="gallery-item-overlay">
                <p>{item.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', padding: '4rem 2rem' }}
        >
          <h2>Pronto para começar seu tratamento?</h2>
          <p>Agende sua avaliação e dê o primeiro passo para sua recuperação</p>
          <Link to="/contato" className="btn-primary">
            Agendar Avaliação
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Clínica Viva Bem</h3>
            <p>Sua saúde é nossa prioridade</p>
            <div className="social-links">
              {/* Adicione seus links de redes sociais aqui */}
            </div>
          </div>
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#especialistas">Especialistas</a>
            <a href="#galeria">Galeria</a>
          </div>
          <div className="footer-contact">
            <h4>Contato</h4>
            <p><FaMapMarkerAlt /> Av. Principal, 123 - Centro</p>
            <p><FaPhone /> (11) 1234-5678</p>
            <p><FaWhatsapp /> (11) 98765-4321</p>
            <p><FaClock /> Seg-Sex: 7h às 20h</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Clínica Viva Bem. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home 