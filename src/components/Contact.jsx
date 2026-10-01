import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, Database, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const contactEmail = 'maitravarman@gmail.com';
  const contactPhone = '+91 6380431471';
  const contactPhoneClean = '+916380431471';
  const linkedinUrl = 'https://linkedin.com/in/maitra-varuna-92629225a';
  const locationText = 'Coimbatore, Tamil Nadu';

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setStatusMessage(data.message || 'Your message has been safely saved in the database.');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(
          data.error || 'Could not connect to MongoDB server. You can still email directly below.'
        );
      }
    } catch (err) {
      setSubmitStatus('error');
      setStatusMessage(
        'Backend server connection pending. Please ensure "npm run dev" or "npm run server" is running, or use direct email.'
      );
    }
  };

  const handleFallbackEmail = () => {
    const mailSubject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name || 'Portfolio Visitor'}`);
    const mailBody = encodeURIComponent(
      `Hi Maitra,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${contactEmail}?subject=${mailSubject}&body=${mailBody}`;
  };

  const contactCards = [
    {
      label: 'Email',
      value: contactEmail,
      actionText: 'Compose Email',
      href: `mailto:${contactEmail}`,
      icon: Mail,
      accent: 'var(--accent-indigo)',
      allowCopy: true,
      target: '_self',
    },
    {
      label: 'Phone',
      value: contactPhone,
      actionText: 'Direct Call',
      href: `tel:${contactPhoneClean}`,
      icon: Phone,
      accent: 'var(--accent-cyan)',
      allowCopy: false,
      target: '_self',
    },
    {
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/maitra-varuna-92629225a',
      actionText: 'View Profile',
      href: linkedinUrl,
      icon: LinkedinIcon,
      accent: 'var(--accent-purple)',
      allowCopy: false,
      target: '_blank',
    },
    {
      label: 'Current Location',
      value: locationText,
      actionText: 'Tamil Nadu, India',
      href: '#contact',
      icon: MapPin,
      accent: 'var(--accent-emerald)',
      allowCopy: false,
      target: '_self',
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Send size={14} />
            <span>Direct Outreach</span>
          </div>
          <h2 className="section-title">Let’s Connect</h2>
          <p className="section-subtitle">
            “Have an opportunity, project, or collaboration in mind? Feel free to get in touch.”
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '36px',
            alignItems: 'stretch',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Info Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: `${card.accent}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${card.accent}33`,
                        flexShrink: 0,
                      }}
                    >
                      <CardIcon size={22} color={card.accent} />
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginBottom: '2px',
                        }}
                      >
                        {card.label}
                      </div>

                      <a
                        href={card.href}
                        target={card.target}
                        rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
                        style={{
                          fontSize: '0.98rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          transition: 'color 0.2s ease',
                          wordBreak: 'break-word',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      >
                        {card.value}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {card.allowCopy && (
                      <button
                        onClick={copyEmail}
                        title="Copy Email Address"
                        style={{
                          padding: '8px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: copied ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    )}

                    <a
                      href={card.href}
                      target={card.target}
                      rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="btn btn-secondary"
                      style={{
                        padding: '8px 14px',
                        fontSize: '0.8rem',
                      }}
                    >
                      {card.actionText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Send a Message Form */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '10px',
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MessageSquare size={16} />
                    <span>DIRECT INQUIRY</span>
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-emerald)',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    <Database size={12} />
                    <span>MongoDB Atlas Connected</span>
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>
                Send a Message
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Stores your inquiry directly into the MongoDB database with timestamped records.
              </p>

              {/* Success Notification */}
              {submitStatus === 'success' && (
                <div
                  style={{
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={20} color="var(--accent-emerald)" />
                    <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                      Inquiry Stored Successfully!
                    </span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    {statusMessage}
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="btn btn-secondary"
                    style={{
                      alignSelf: 'flex-start',
                      padding: '8px 16px',
                      fontSize: '0.82rem',
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* Error Notice with Fallback */}
              {submitStatus === 'error' && (
                <div
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '20px',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                    <AlertCircle size={18} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.86rem', color: '#fca5a5', lineHeight: 1.5 }}>
                      {statusMessage}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleFallbackEmail}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '9px',
                      fontSize: '0.84rem',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={15} />
                    <span>Open in Email Application Instead</span>
                  </button>
                </div>
              )}

              {submitStatus !== 'success' && (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="contact-inputs-row">
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                          marginBottom: '6px',
                        }}
                      >
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        disabled={submitStatus === 'submitting'}
                        placeholder="e.g. John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          outline: 'none',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                          marginBottom: '6px',
                        }}
                      >
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        disabled={submitStatus === 'submitting'}
                        placeholder="e.g. john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          outline: 'none',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      required
                      disabled={submitStatus === 'submitting'}
                      placeholder="e.g. Project Opportunity / Interview Invitation"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={submitStatus === 'submitting'}
                      placeholder="Type your message here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '14px',
                      marginTop: '8px',
                      fontSize: '0.95rem',
                      opacity: submitStatus === 'submitting' ? 0.75 : 1,
                    }}
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Saving to MongoDB...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit to Database</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 550px) {
          .contact-inputs-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
