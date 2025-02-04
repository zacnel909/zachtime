/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Zach Time`,
    siteUrl: `https://zachtime.xyz`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "zachtime.xyz",
      },
    },
  ]
};