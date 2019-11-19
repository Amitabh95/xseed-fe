import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.HeaderWrapper}>
            <div className={styles.HeaderContent}>
                <div className={styles.HeaderTitleWrapper}>
                    IPL Match Data
                </div>
            </div>
        </div>
    )
};
export default Header;