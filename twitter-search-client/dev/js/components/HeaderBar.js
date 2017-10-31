import React, {Component} from 'react';


class HeaderBar extends Component{
    render(){
        return (<div className="mui-appbar">
            <table width="100%">
                <tbody>
                <tr>
                    <td className="mui--appbar-height mui--text-center" >
                        <h1><i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter Search</h1>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>)
    }
}

export default HeaderBar