import React from 'react'
import {Helmet} from 'react-helmet'

const SEO = ({ title, description, pathSlug, keywords }) => {
    /* Need to get this to only remove the first description that React makes, and not the first one.
    
      useEffect(() => {
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.remove();
        }
    }) */
    const url = `https://localhost:3000/${pathSlug}`
      return (
  <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | TONYCRE8`}
        meta={[
          {
            name: 'description',
            content: description,
          },
/*           {
            name: 'keywords',
            content: keywords.join(),
          }, */
          {
              property: 'og:title',
              content: title
          },
          {
            name: 'og:description',
            content: description,
          },
          {
              property: 'og:url',
              content: url
          }
        ]}
        links={[
        {
                rel: 'canonical',
                href: url,
            },
        ]}
      />
   );
  }

export default SEO