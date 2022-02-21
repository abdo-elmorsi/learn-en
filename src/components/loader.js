import React from 'react';
import Styles from '../styles/Loader.module.scss'
const Loader = () => {
    return (
        <div className={`${Styles.loader_wrapper}`}>
            <div className={`${Styles.loading_center}`}>
                <div className={`${Styles.loading_center_absolute}`}>
                    <div className={`${Styles.object} ${Styles.object_two}`}></div>
                    <div className={`${Styles.object} ${Styles.object_four}`}></div>

                    <div className={`${Styles.object} ${Styles.object_six}`}></div>
                    <div className={`${Styles.object} ${Styles.object_eight}`}></div>

                    <div className={`${Styles.object} ${Styles.object_big}`}></div>
                </div>
            </div>
        </div>
    )
}
export default Loader