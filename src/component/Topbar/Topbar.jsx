import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../translations';
import "./Topbar.scss";

const Topbar = () => {
    const { language } = useLanguage();

    return (
        <div className='topbar'>
            <div className="topbar-content">
                <div className="app-title">
                    <h2 style={{
                        color: language === 'kn' ? '#ff6b35' : '#333',
                        fontFamily: language === 'kn' ? 'Noto Sans Kannada, sans-serif' : 'inherit'
                    }}>
                        {t('dashboard', language)} - SDP
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Topbar