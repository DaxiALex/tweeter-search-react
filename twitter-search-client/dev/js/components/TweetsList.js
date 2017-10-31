import React, {Component} from 'react';


 export default class TweetList extends Component{
   printResult(){

     let props = this.props.SearchResult
     let tweets = [];
     if(!props){
       return <div className="mui--text-light-secondary"><h1>Search to get results </h1></div>
     }
     if(props.type==="LOADING_RESULT"){
       return <div className="mui--text-light-secondary"><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></div>
     }
     if(props.type==="PARAMETER_ERROR"){
       return <div className="mui--text-light-secondary"><h1>Enter valid key</h1></div>
     }
     if(props.type==="SERVICE_ERROR"){
       return <div className="mui--text-light-secondary"><h1>Service error try again</h1></div>
     }
     if(props.payload.Results.length===0){
       return <div className="mui--text-light-secondary"><h1>No results</h1></div>
     }
     tweets = props.payload.Results;
     
     

       return <div className="" id="tweet-list">{tweets.map((tweet, index) => {
           return (

                   <div key={index} className="tweet" >
                     <table>
                       <tbody>
                       <tr>
                         <td className="tweet-img-cell">
                           <img className="tweet-img"  src={tweet.profile_image_url}/>
                         </td>
                         <td className="tweet-data-cell">
                           <span className="user-name mui--text-title">
                            <a href={"https://twitter.com/" +tweet.screen_name}>{tweet.name + " "}</a>
                       </span>
                           <span className="mui--text-dark-secondary mui--text-body2"> {"@" + tweet.screen_name} </span>
                           <div className="tweet-text mui--text-subhead">{tweet.text}</div>
                         </td>
                       </tr>
                       </tbody>
                     </table>

                   </div>
           )
       })}</div>
   }
   render(){

     return(<div  id="tweet-list" >{this.printResult()}</div>)
   }
 }
