import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import AuthorImage from "../components/AuthorImage/AuthorImage";
import AuthorProfile from "../components/AuthorProfile/AuthorProfile";
import AuthorName from "../components/AuthorName/AuthorName";
import AuthorBio from "../components/AuthorBio/AuthorBio";
import AuthorMeta from "../components/AuthorMeta/AuthorMeta";
import AuthorLocation from "../components/AuthorLocation/AuthorLocation";
import AuthorWebsite from "../components/AuthorWebsite/AuthorWebsite";
import AuthorStats from "../components/AuthorStats/AuthorStats";
import Footer from "../components/Footer/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Layout from "../components/layout";
import PhotoDescription from "../components/PhotoDescription/PhotoDescription";


class Disclaimer extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { author, cover } = this.props.pageContext;
    const postEdges =
      this.props.data.allMdx &&
      this.props.data.allMdx.edges
        ? this.props.data.allMdx.edges
        : [];
    const authorsEdges =
      this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges
        ? this.props.data.allAuthorsJson.edges
        : [];
    // const getAuthor = () => authorsEdges[0].node;

    const get404 = {
      "name": "chefbc",
      "image": "/logos/logo.png",
      "url": "http://chefbc.com/",
    }

    //const {cover} = "/images/blog-cover6.jpg"


    return (
      <Layout location={this.props.location}>
        <Drawer className="disclaimer-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Disclaimer | ${config.siteTitle}`} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            <MainHeader className="author-head" cover={cover}>
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
            </MainHeader>
            <AuthorProfile className="inner">
              <AuthorImage author={get404} />
              <AuthorName name="Disclaimer" />
              <AuthorBio bio="text" />
            </AuthorProfile>

            {/* PostListing component renders all the posts */}
            <PostListing postEdges={postEdges} postAuthors={authorsEdges} />

            {/* The tiny footer at the very bottom */}
            <Footer
              copyright={config.copyright}
              promoteGatsby={config.promoteGatsby}
            />
          </SiteWrapper>
        </Drawer>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query Disclaimer($author: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            author
          }
        }
      }
    }
    allAuthorsJson(filter: { uid: { eq: $author } }) {
      edges {
        node {
          uid
          name
          image
          url
          bio
          location
          socialUrls
        }
      }
    }
  }
`;

export default Disclaimer;
