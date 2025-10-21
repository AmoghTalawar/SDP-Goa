import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../translations';
import "./Topbar.scss";

const Topbar = () => {
    const { language } = useLanguage();

    return (
        <div className='topbar'>
            <div className="topbar-content">
                {/* Dashboard - SDP title removed as requested */}
            </div>
        </div>
    );
}

export default Topbar