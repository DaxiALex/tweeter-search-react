import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchTwitts} from '../util/index'
import TweetsList from '../components/TweetsList'
import {Link} from 'react-router-dom';

import HeaderBar from '../components/HeaderBar'
import SearchForm from '../components/SearchForm'


class PageRender extends Component {
    render() {
        return (<div className="dark">
            <HeaderBar/>
            <div className="mui-container-fluid dark ">
                <div className="mui-row">
                    <div className="mui-col-md-1">
                    </div>
                    <div className="mui-col-md-10 " >
                        <SearchForm searchTwitter={this.props.searchTwitter}
                                    ButtonReducer={this.props.ButtonReducer}
                                    mainPage={true}
                                    placeholder={"Enter a search query"}/>
                    </div>
                    <div className="mui-col-md-1">

                    </div>
                    <div className="mui-col-md-8 mui-col-md-offset-2 mui-col-xs-9">
                        <TweetsList SearchResult={this.props.SearchResult}/>
                    </div>
                </div>
            </div>
        </div>)
    }
}


function mapStateToProps(state) {
    return {
        SearchResult: state.SearchResults,
        ButtonReducer: state.ButtonReducer
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchTwitter: searchTwitts}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(PageRender);
