import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    const [contentHeight, setContentHeight] = useState('calc(100vh - 140px)');

    useEffect(() => {
        const calculateHeight = () => {
            const header = document.querySelector('header.header__wrapper');
            const footer = document.querySelector('footer#footer');
            if (header && footer) {
                const headerHeight = header.offsetHeight;
                const footerHeight = footer.offsetHeight;
                setContentHeight(`calc(100vh - ${headerHeight + footerHeight + 62}px)`);
            }
        };

        calculateHeight();
        window.addEventListener('resize', calculateHeight);
        return () => window.removeEventListener('resize', calculateHeight);
    }, []);

    const styles = {
        page: {
            width: '100%',
            height: contentHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            position: 'relative',
            overflow: 'hidden'
        },
        content: {
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '2rem',
            maxWidth: '600px',
            width: '100%'
        },
        title: {
            fontSize: '8rem',
            fontWeight: 700,
            color: 'var(--secondary-color)',
            marginBottom: '1rem',
            lineHeight: 1
        },
        subtitle: {
            fontSize: '2rem',
            color: 'var(--text-color)',
            marginBottom: '1.5rem'
        },
        text: {
            fontSize: '1.2rem',
            color: 'var(--text-color)',
            marginBottom: '2rem'
        },
        button: {
            display: 'inline-block',
            color: 'var(--text-color)',
            textDecoration: 'underline',
            fontWeight: 400,
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.content}>
                <h1 style={styles.title}>404</h1>
                <h2 style={styles.subtitle}>Seite nicht gefunden</h2>
                <p style={styles.text}>Die von Ihnen gesuchte Seite konnte leider nicht gefunden werden.</p>
                <Link to="/" style={styles.button}>Zurück zur Startseite</Link>
            </div>
        </div>
    );
} 