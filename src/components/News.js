import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  convertFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  constructor(props) {
    super(props)
    console.log('i m a constructor from news component')
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.convertFirstLetter(this.props.category)}-News App`
  }

  // is async wait ki wajah se api fetch hoke aa rhi h mtln india ki top news aa rhi h brna bo phke cricket bali aatii...

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=320637f874f9446399e6c1234c70e531&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.props.setProgress(10)
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews()
  }

  HandleNextClick = async () => {
    await this.setState({
      page: this.state.page + 1,
    })
    this.updateNews()
  }

  HandlePrevClick = async () => {
    await this.setState({
      page: this.state.page - 1,
    })
    this.updateNews()
  }
  render() {
    return (

      <div className='container my-3'>
        <h2 className='text-center my-2' style={{ margin: "35px 2px", marginTop: "90px", paddingTop: '50px' }}>News App -{this.convertFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
        // loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItems title={element.title?.slice(0, 45)} description={element.description?.slice(0, 80)}
                    source={element.source.name} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                </div>

              })}
            </div>
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }

}

export default News