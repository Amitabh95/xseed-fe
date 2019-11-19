import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import moment from 'moment';
import * as action from '../../Store/Action'
import styles from './matchDetails.module.css';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import LoaderComponent from '../../component/Loader/Loader';

class MatchDetailsPage extends Component {

    componentWillMount() {
        const queryParams = queryString.parse(this.props.location.search);
        if (queryParams.matchid && queryParams.matchid !== null) {
            if (!isNaN(Number(queryParams.matchid))) {
                this.props.onFetchSingle(queryParams.matchid);
            } else {
                this.props.history.push('/');
            }
        } else {
            this.props.history.push('/');
        }
    }
    render() {
        let pageContent;
        if (this.props.loading) {
            pageContent = (<div>
                <Header />
                <LoaderComponent type='unClickableBackdropLoader' color='#ffffff' />
                <Footer />
            </div>
            )
        } else {
            pageContent = (
                <div>
                    <Header />
                    {this.props.singleMatch ? <div className={styles.PageBody}>
                        <div className={styles.CardHeader}>
                            <div className={styles.CardHeaderText}>{this.props.singleMatch.team1} VS {this.props.singleMatch.team2}</div>
                        </div>
                        <div className={styles.CardBody}>
                            <div className={styles.CardBodyContent}>
                                <div className={styles.Line}>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Date</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.date}</span></span>
                                        {/* moment(this.props.singleMatch.date).format('DD-MMM-YYYY') */}
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Venue</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.venue}</span>
                                    </span>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>City</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.city}</span>
                                    </span>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Season</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.season}</span>
                                    </span>
                                </div>
                                <div className={styles.Line}>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Toss Winner</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.toss_winner}</span>
                                    </span>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Toss Decision</span> -{' '}
                                        <span style={{ textTransform: 'capitalize' }} className={styles.Answer}>{this.props.singleMatch.toss_decision}</span>
                                    </span>
                                </div>
                                <div className={styles.SubHeading}>Result</div>
                                <div className={styles.Line}>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Winner</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.winner}</span>
                                    </span>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Result</span> -{' '}
                                        <span style={{ textTransform: 'capitalize' }} className={styles.Answer}>{this.props.singleMatch.result}</span>
                                    </span>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Duckworth-Lewis Applied</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.dl_applied}</span>
                                    </span>
                                </div>
                                <div className={styles.Line}>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Man of the Match</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.player_of_match}</span>
                                    </span>
                                </div>
                                <div className={styles.Line}>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Won by </span>
                                        <span className={styles.Answer}>{this.props.singleMatch.win_by_runs}</span>
                                        <span className={styles.TopicName}> run(s)</span>
                                    </span>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Won by </span>
                                        <span className={styles.Answer}>{this.props.singleMatch.win_by_wickets}</span>
                                        <span className={styles.TopicName}> wicket(s)</span>
                                    </span>
                                </div>
                                <div className={styles.SubHeading}>Umpires</div>
                                <div className={styles.Line}>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Umpire 1</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.umpire1}</span>
                                    </span>
                                    <span className={styles.Col}>
                                        <span className={styles.TopicName}>Umpire 2</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.umpire2}</span>
                                    </span>
                                    <span className={styles.Col}>
                                    <span className={styles.TopicName}>Umpire 3</span> -{' '}
                                        <span className={styles.Answer}>{this.props.singleMatch.umpire3}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                    <Footer />
                </div>
            )
        }
        return pageContent;
    }

    componentWillUnmount() {
        this.props.onResetFetchSingle();
    }
};

const mapStateToProps = (state) => {
    return {
        allMatch: state.matchData.allMatch,
        singleMatch: state.matchData.singleMatch,
        loading: state.matchData.loading,
        error: state.matchData.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchSingle: (id) => dispatch(action.fetchSingle(id)),
        onResetFetchSingle: () => dispatch(action.resetFetchSingle())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchDetailsPage)