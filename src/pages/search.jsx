import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, navigate } from "gatsby"
import queryString from "query-string"

class x404Page extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    custom404: PropTypes.element,
    location: PropTypes.object,
  }

  constructor(props) {
    super(props)
    const { data, location } = this.props
    const pagePaths = data.allSitePage.nodes.map(node => node.path)
    const urlState = queryString.parse(location.search)

    const initialPagePathSearchTerms = urlState.filter ? urlState.filter : ``

    this.state = {
      showCustom404: false,
      initPagePaths: pagePaths,
      pagePathSearchTerms: initialPagePathSearchTerms,
      pagePaths: this.getFilteredPagePaths(
        pagePaths,
        initialPagePathSearchTerms
      ),
    }
    this.showCustom404 = this.showCustom404.bind(this)
    this.handlePagePathSearch = this.handlePagePathSearch.bind(this)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  showCustom404() {
    this.setState({ showCustom404: true })
  }

  handleSearchTermChange(event) {
    const searchValue = event.target.value

    this.setSearchUrl(searchValue)

    this.setState({
      pagePathSearchTerms: searchValue,
    })
  }

  handlePagePathSearch(event) {
    event.preventDefault()
    const allPagePaths = [...this.state.initPagePaths]
    this.setState({
      pagePaths: this.getFilteredPagePaths(
        allPagePaths,
        this.state.pagePathSearchTerms
      ),
    })
  }

  getFilteredPagePaths(allPagePaths, pagePathSearchTerms) {
    const searchTerm = new RegExp(`${pagePathSearchTerms}`)
    return allPagePaths.filter(pagePath => searchTerm.test(pagePath))
  }

  setSearchUrl(searchValue) {
    const {
      location: { pathname, search },
    } = this.props

    const searchMap = queryString.parse(search)
    searchMap.filter = searchValue

    const newSearch = queryString.stringify(searchMap)

    if (search !== `?${newSearch}`) {
      navigate(`${pathname}?${newSearch}`, { replace: true })
    }
  }

  render() {
    const { pathname } = this.props.location
    let newFilePath
    if (pathname === `/`) {
      newFilePath = `src/pages/index.js`
    } else if (pathname.slice(-1) === `/`) {
      newFilePath = `src/pages${pathname.slice(0, -1)}.js`
    } else {
      newFilePath = `src/pages${pathname}.js`
    }

    return this.state.showCustom404 ? (
      this.props.custom404
    ) : (
      <div>
        <h1>Search</h1>
        <p>
          {`There's not a page yet at `}
          <code>{pathname}</code>
        </p>


        {this.state.initPagePaths.length > 0 && (
          <div>
            <form onSubmit={this.handlePagePathSearch}>
              <label>
                Search:
                <input
                  type="text"
                  id="search"
                  placeholder="Search pages..."
                  value={this.state.pagePathSearchTerms}
                  onChange={this.handleSearchTermChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <ul>
              {this.state.pagePaths.map(
                (pagePath, index) =>
                  index < 100 && (
                    <li key={pagePath}>
                      <Link to={pagePath}>{pagePath}</Link>
                    </li>
                  )
              )}
              {this.state.pagePaths.length > 100 && (
                <p style={{ fontWeight: `bold` }}>
                  ... and {this.state.pagePaths.length - 100} more.
                </p>
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default x404Page

export const xpagesQuery = graphql`
  query xPagesQuery {
    allSitePage(filter: { path: { ne: "/dev-404-page/" } }) {
      nodes {
        path
      }
    }
  }
`
