import React, {Component} from 'react';
import {valueChanged} from '../redux/actions/Input-value-action';
import {connect} from 'react-redux';
import {addSearchHistory} from '../redux/actions/Last-query-action';
import { Link } from 'react-router-dom';
import SearchHistory from './SearchHistory'



class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.focus = true;
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.addSearchHistory(this.props.ButtonReducer);
        this.props.searchTwitter(this.props.ButtonReducer)

    }

    handleChange(event){
        this.props.valueChanged(event.target.value)
    }
    render() {
        return (
            <div className=" ">
                <form className="mui-form search-form">
                    <div className="mui--text-dark-secondary mui--text-headline mui--text-center">
                        What do you want to find?
                    </div>
                    <div  className="mui-row">
                        <div className="mui-textfield mui-col-md-11">
                            <input type="text"
                                   placeholder={this.props.placeholder}
                                   value={this.props.ButtonReducer || ""}
                                   onChange={this.handleChange}/>
                        </div>

                        <div hidden={!this.props.mainPage}>
                            <button type="submit"
                                    className="mui-btn mui-btn--raised mui-btn--primary mui-col-md-1"
                                    onClick={this.handleClick}
                                    autoFocus={this.focus}> <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>

                        <div hidden={this.props.mainPage}>
                            <Link className="mui-btn mui-btn--raised mui-btn--primary mui-col-md-1"
                                  type="submit"
                                  to='/search'
                                  onClick={this.handleClick}><i className="fa fa-search" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    <SearchHistory/>
                </form>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        ButtonReducer: state.ButtonReducer
    };
}

export default connect(mapStateToProps, { valueChanged, addSearchHistory })(SearchForm);



