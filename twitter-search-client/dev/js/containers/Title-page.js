import {searchTwitts} from '../util/index'
import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TweetsList from '../components/TweetsList'
import HeaderBar from '../components/HeaderBar'
import SearchForm from '../components/SearchForm'


class TitlePage extends Component {


    componentDidMount() {
        this.props.searchTwitter("javascript")
    }


    render() {
        return (
            <div className="dark">
                <HeaderBar/>
                <br/>
                <div className="mui-container-fluid dark">
                    <div className="mui-row">
                        <div className="mui-col-md-1"></div>
                        <div className="mui-col-md-10 " >
                            <SearchForm searchTwitter={this.props.searchTwitter}
                                        placeholder={"javascript"}
                                        mainPage={false}/>
                        </div>
                        <div className="mui-col-md-1"></div>
                        <br/>
                        <div className="mui-col-md-8 mui-col-md-offset-2 mui-col-sm-9">
                            <TweetsList SearchResult={this.props.SearchResult}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        SearchResult: state.SearchResults
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchTwitter: searchTwitts}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(TitlePage);

















