import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div style={styles.container}>
    <div style={styles.header}>
      <h1 style={styles.title}>You&apos;ve received a message from {email}</h1>
    </div>
    <div style={styles.content}>
      <p style={styles.message}>{message}</p>
    </div>
  </div>
);

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    padding: '20px',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '15px',
    borderRadius: '8px 8px 0 0',
    textAlign: 'center' as 'center',
  },
  title: {
    margin: 0,
    fontSize: '20px',
  },
  content: {
    padding: '15px',
    color: '#333333',
    backgroundColor: '#ffffff',
    borderRadius: '0 0 8px 8px',
  },
  message: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
};
