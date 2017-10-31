import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchTwitts} from '../util/index'

class SearchHistory extends Component{
    constructor(props) {
        super(props);

        this.handleSearchHistory = this.handleSearchHistory.bind(this);
    }


    handleSearchHistory(e) {
        const search = e.target.id;
        const {searchTwitter} = this.props;

        searchTwitter(search);
    }


    render() {

        return (
            <div className="search-history text-left">
                <span className="mui--text-dark-secondary mui--text-body1">Search history: </span>
                <span >
                    { this.props.SearchHistory.map((query, index) => (
                        <span key={ index }>
                    { index !== 0 && ', '}
                            <span
                                id={ query }
                                className='search-history-element'
                                onClick={ this.handleSearchHistory }
                            >
                      { query }
                    </span>
                  </span>
                    )) }
            </span>
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        SearchHistory: state.SearchHistory
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchTwitter: searchTwitts}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(SearchHistory);

