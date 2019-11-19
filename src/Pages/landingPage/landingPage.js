import React, { Component } from 'react';
import styles from './landingPage.module.css';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { MATCH_LIST_PAGE } from '../../config/links';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className={styles.LandingPageContent}>
                    <div className={styles.SelectSeasonText}>Select IPL Season</div>
                    <div className={styles.YearButtonContainer}>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=all')}>
                            <div className={styles.YearButtonText}>
                                All
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2019')}>
                            <div className={styles.YearButtonText}>
                                2019
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2018')}>
                            <div className={styles.YearButtonText}>
                                2018
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2017')}>
                            <div className={styles.YearButtonText}>
                                2017
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2016')}>
                            <div className={styles.YearButtonText}>
                                2016
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2015')}>
                            <div className={styles.YearButtonText}>
                                2015
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2014')}>
                            <div className={styles.YearButtonText}>
                                2014
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2013')}>
                            <div className={styles.YearButtonText}>
                                2013
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2012')}>
                            <div className={styles.YearButtonText}>
                                2012
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2011')}>
                            <div className={styles.YearButtonText}>
                                2011
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2010')}>
                            <div className={styles.YearButtonText}>
                                2010
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2009')}>
                            <div className={styles.YearButtonText}>
                                2009
                            </div>
                        </button>
                        <button className={styles.YearButtonWrapper} onClick={() => this.props.history.push(MATCH_LIST_PAGE + '?season=2008')}>
                            <div className={styles.YearButtonText}>
                                2008
                            </div>
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};

export default LandingPage;