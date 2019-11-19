import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, SearchField } from 'react-bootstrap-table';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import queryString from 'query-string';
import moment from 'moment';
import './matchList.css';

import * as action from '../../Store/Action';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { MATCH_DETAILS_PAGE } from '../../config/links';
import LoaderComponent from '../../component/Loader/Loader';

class MatchListPage extends Component {


    componentWillMount() {
        const queryParams = queryString.parse(this.props.location.search);
        if (queryParams.season && queryParams.season !== null) {
            console.log(queryParams);
            if (queryParams.season === 'all') {
                this.props.onFetchAll();
            } else {
                const year = Number(queryParams.season);
                if (!isNaN(year) && (year >= 2008 && year <= 2019)) {
                    this.props.onFetchYearwise(year)
                } else {
                    this.props.history.push('/');
                }
            }
        } else {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.onResetFetchAll();
        this.props.onResetFetchYearwise();
    }
    createCustomSearchField = (props) => {
        return (
            <SearchField
                className='CustomSearchBox'
                placeholder='Search something' />
        );
    }

    options = {
        paginationPosition: 'top',
        firstPage: 'First', // First page button text
        lastPage: 'Last', // Last page button text 
        searchPosition: 'left',
        searchField: this.createCustomSearchField
    };
    render() {
        const buttonFormatter = (cell, row) => {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Button
                        style={{ fontSize: '14px' }}
                        size="md"
                        color="primary"
                        onClick={() => this.props.history.push(MATCH_DETAILS_PAGE + '?matchid=' + row.id)}>View</Button>
                </div>);
        };

        const dateField = (cell, row) => {
            return (
                <div style={{ textAlign: 'center' }}>
                    {moment(row.date).format('DD-MMM-YYYY')}
                </div>);
        };

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
                    <div className='TableContainer'>
                        <BootstrapTable data={this.props.allMatch} options={this.options} striped search pagination>
                            <TableHeaderColumn width='60px' dataField='id' isKey={true}>Serial</TableHeaderColumn>
                            <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
                            <TableHeaderColumn width='80px' dataField='season'>Season</TableHeaderColumn>
                            <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
                            <TableHeaderColumn dataField='team1'>Team 1</TableHeaderColumn>
                            <TableHeaderColumn dataField='team2'>Team 2</TableHeaderColumn>
                            <TableHeaderColumn dataField='winner'>Winner</TableHeaderColumn>
                            <TableHeaderColumn width='80px' dataFormat={buttonFormatter}>Action</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                    <div className='DummyHeight'></div>
                    <Footer />
                </div>
            );
        }
        return pageContent;
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
        onFetchAll: () => dispatch(action.fetchAll()),
        onFetchYearwise: (year) => dispatch(action.fetchYearwise(year)),
        onResetFetchAll: () => dispatch(action.resetFetchAll()),
        onResetFetchYearwise: () => dispatch(action.resetFetchYearwise())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchListPage)