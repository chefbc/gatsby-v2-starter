module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "chefbc", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "chefbc.com", // Site title.
  siteTitleAlt: "chefbc.com", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://chefbc.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/blog-cover6.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteAuthor: "Caspar Camille Rubin",
  siteSourceUrl: "https://unsplash.com/photos/fPkvU7RDmCo",
  siteSourceText: "Unsplash",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "ChefBC", // The author name used in the RSS file
  siteRssTitle: "`chefbc.com RSS Feed`,", // The rss feed name
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-30955144-5", // GA tracking ID.
  //disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/chefbc/",
    "https://twitter.com/chefbc001",
    "https://www.linkedin.com/in/caseycarlsen",
    "https://www.facebook.com/chefbc"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Search",
      url: "/",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Disclaimer",
      url: "/",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/chefbc001",
    //   iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    // },
    // {
    //   label: "Email",
    //   url: "mailto:chefbc@example.com",
    //   iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    // }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "chefbc.com" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  tagDetails: {
    cover: "https://source.unsplash.com/d9ILr-dbEdg/1280x500",
    author: "Agence Olloweb",
    sourceUrl: "https://unsplash.com/photos/d9ILr-dbEdg",
    sourceText: "Unsplash",
  },
  // tagCover: "https://source.unsplash.com/d9ILr-dbEdg/1280x500",
  // tagAuthor: "Agence Olloweb",
  // tagLink: "Agence Olloweb",
  // tagSource: "Unsplash",

  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
