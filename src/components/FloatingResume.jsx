import React, { useState } from 'react';
import { FileDown, CheckCircle, Info, X } from 'lucide-react';

export default function FloatingResume() {
  const [toastMessage, setToastMessage] = useState(null);

  const handleResumeClick = async () => {
    try {
      const response = await fetch('/resume.pdf', { method: 'HEAD' });
      if (response.ok) {
        // Resume exists! Open/download it
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Maitra_Varuna_G_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        showToast('Resume file setup: Place "resume.pdf" inside the /public folder to enable instant download.');
      }
    } catch (err) {
      showToast('Resume file setup: Place "resume.pdf" inside the /public folder to enable instant download.');
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 99,
        }}
      >
        <button
          onClick={handleResumeClick}
          aria-label="Download Resume"
          className="floating-resume-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 22px',
            borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.92rem',
            boxShadow: '0 8px 30px rgba(99, 102, 241, 0.45), 0 0 20px rgba(56, 189, 248, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            cursor: 'pointer',
          }}
        >
          <FileDown size={18} />
          <span>Download Resume</span>
        </button>
      </div>

      {/* Elegant Glass Toast Notification if file is not yet placed */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '28px',
            zIndex: 101,
            background: 'rgba(16, 21, 38, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--accent-cyan)',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.25)',
            borderRadius: '16px',
            padding: '16px 20px',
            maxWidth: '360px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <Info size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '4px',
              }}
            >
              Resume Link Configured
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              {toastMessage}
            </div>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            style={{
              color: 'var(--text-muted)',
              padding: '2px',
              cursor: 'pointer',
            }}
          >
            <X size={16} />
          </button>
        </div>
      )}

      <style>{`
        .floating-resume-btn:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 12px 35px rgba(99, 102, 241, 0.6), 0 0 25px rgba(56, 189, 248, 0.45) !important;
        }
        .floating-resume-btn:active {
          transform: translateY(0) scale(0.98);
        }
        @media (max-width: 640px) {
          .floating-resume-btn {
            bottom: 20px !important;
            right: 20px !important;
            padding: 10px 18px !important;
            font-size: 0.86rem !important;
          }
        }
      `}</style>
    </>
  );
}
