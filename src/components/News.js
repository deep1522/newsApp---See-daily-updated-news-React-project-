import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Newsitem from './Newsitem';

export default class News extends Component {
    static defaultProps={
        country:'in',
        pagesize:8,
        category:'General'

    }
    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state={
            articles:[],
            loading:false,
            page:1

        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c0ff4dde5394727a76deb474a508d2b&page=1&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data=await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})

    }
    handlePrevClick=async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c0ff4dde5394727a76deb474a508d2b&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data=await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles,
            loading:false
        })


    }
    handleNextClick =async()=>{
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c0ff4dde5394727a76deb474a508d2b&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data=await fetch(url)
        let parsedData=await data.json()
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles,
            loading:false
        })
        

    }
    }
    
    render() {
    return (
    <div className="container my-3">

        <h1 className="text-center" style={{margin:'0px 40px'}}>NEWS24 top headlines--</h1>
        {this.state.loading && <spinner/>}
        <div className="row" >
            {!this.state.loading && this.state.articles.map((Element)=>{
                return <div className="col-md-4" key={Element.url}>
                <Newsitem title={Element.title?Element.title.slice(0,45):""} description={Element.description?Element.description.slice(0,88):""} imageURL={Element.urlToImage} Url={Element.url} author={Element.author} date={Element.publishedAt}/>
                </div>

            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-outline-dark"  onClick={this.handleNextClick}>Next &rarr;</button>
        </div>


    </div>
        
    )

}
}

