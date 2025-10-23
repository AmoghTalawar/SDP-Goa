import React from 'react'
import "./TabChange.scss"
import { t } from "../../translations"

const TabChange = ({
    tabList, setStep, step
}) => {
    return (
        <div className='tablist'>
            {tabList && tabList.map((data, key) => (
                <div key={key} className='tablist-tab'>
                    <button
                    className={step == data.step ? "active" : "inactive"}
                      onClick={() => setStep(data.step)}
                      >{t(data.name)}</button>
                </div>
            ))
            }
        </div>
    )
}

export default TabChange