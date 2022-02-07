/* eslint-disable import/prefer-default-export */
import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = site.siteMetadata;

  return { title };
};
