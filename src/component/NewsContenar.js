import React, { Component} from 'react';
import Nwes from './News';
import myText from './test1.json';

export default class NewsContenar extends Component {
    // constructor (){
    //   super ();
    //   console.log("i am constructor")
    //   this.state={
    //     articles: myText.articles
    //   }

    // }

  render() {
    return (
      <div className='container p-3 my-3 border '>
        <div className=''>
        <h1> Today news </h1>
        </div>
        <div className='row'>
        {myText.articles.map((element)=>{
          return <div className='col-md-4' key={element.url }>
          <Nwes title= {element.title} 
          description = {element.description} 
          imgUrl = {element.urlToImage}
          newsUrl={element.url}
          />
          </div>
        })}
          
        </div>
      </div>
    )
  }
}
