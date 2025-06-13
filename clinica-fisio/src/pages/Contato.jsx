import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaHandHoldingMedical } from 'react-icons/fa'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    doresCostas: false,
    fisioterapiaAntes: false,
    mensagem: '',
    horarioPreferido: ''
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
    // Aqui você pode adicionar a lógica de envio do formulário
  }

  return (
    <div className="page-contato">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <FaHandHoldingMedical className="logo-icon" />
            <span className="logo-text">Viva Bem</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Início</Link>
            <Link to="/#servicos">Serviços</Link>
            <Link to="/#especialistas">Especialistas</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="contato-hero">
        <motion.div 
          className="contato-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para cuidar da sua saúde</p>
        </motion.div>
      </section>

      <div className="contato-container" style={{
          backgroundColor: '#f0f7ff',
          minHeight: '100vh',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <motion.div 
          className="contato-info-cards"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          <div className="info-card" style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            textAlign: 'center',
            flex: '1',
            minWidth: '250px'
          }}>
            <FaMapMarkerAlt style={{
              fontSize: '2rem',
              color: '#3182ce',
              marginBottom: '1rem'
            }} />
            <h3>Localização</h3>
            <p>Av. Principal, 123 - Centro</p>
            <p>São Paulo - SP</p>
          </div>
          <div className="info-card">
            <FaPhone style={{
              fontSize: '2rem',
              color: '#3182ce',
              marginBottom: '1rem'
            }} />
            <h3>Telefones</h3>
            <p>(11) 1234-5678</p>
            <p>(11) 98765-4321</p>
          </div>
          <div className="info-card">
            <FaClock style={{
              fontSize: '2rem',
              color: '#3182ce',
              marginBottom: '1rem'
            }} />
            <h3>Horário de Atendimento</h3>
            <p>Segunda a Sexta: 7h às 20h</p>
            <p>Sábado: 8h às 12h</p>
          </div>
        </motion.div>

        <div className="contato-content" style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
          <div className="contato-form-container" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <motion.div 
              className="form-wrapper"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2>Agende sua Avaliação</h2>
              {enviado ? (
                <motion.div 
                  className="mensagem-sucesso"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>Agendamento Realizado!</h3>
                  <p>Entraremos em contato em breve para confirmar sua avaliação.</p>
                  <button 
                    className="btn-novo-agendamento"
                    onClick={() => setEnviado(false)}
                  >
                    Fazer Novo Agendamento
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contato-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nome">Nome Completo*</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Digite seu nome"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">E-mail*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefone">Telefone*</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="horarioPreferido">Horário Preferido</label>
                      <select
                        id="horarioPreferido"
                        name="horarioPreferido"
                        value={formData.horarioPreferido}
                        onChange={handleChange}
                      >
                        <option value="">Selecione um horário</option>
                        <option value="manha">Manhã (7h às 12h)</option>
                        <option value="tarde">Tarde (13h às 18h)</option>
                        <option value="noite">Noite (18h às 20h)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group full-width">
                      <label htmlFor="mensagem">Descreva seu problema ou objetivo</label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Conte-nos como podemos ajudar"
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-row checkboxes">
                    <div className="form-group checkbox">
                      <input
                        type="checkbox"
                        id="doresCostas"
                        name="doresCostas"
                        checked={formData.doresCostas}
                        onChange={handleChange}
                      />
                      <label htmlFor="doresCostas">Sente dores nas costas?</label>
                    </div>

                    <div className="form-group checkbox">
                      <input
                        type="checkbox"
                        id="fisioterapiaAntes"
                        name="fisioterapiaAntes"
                        checked={formData.fisioterapiaAntes}
                        onChange={handleChange}
                      />
                      <label htmlFor="fisioterapiaAntes">Já fez fisioterapia antes?</label>
                    </div>
                  </div>

                  <button type="submit" className="btn-enviar">
                    Solicitar Agendamento
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato 