import algoliasearch from "algoliasearch/lite";
import { createRef, default as React, useState, useMemo } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import { ThemeProvider } from "styled-components";
import StyledSearchBox from "./styled-search-box";
import StyledSearchResult from "./styled-search-result";
import StyledSearchRoot from "./styled-search-root";
import useClickOutside from "./use-click-outside";
import { useStaticQuery, graphql } from "gatsby";

const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
};

const Search = ({ indices }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          ALGOLIA_APP_ID
          ALGOLIA_SEARCH_KEY
        }
      }
    }
  `);

  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = useMemo(
    () =>
      algoliasearch(data.site.siteMetadata.ALGOLIA_APP_ID, data.site.siteMetadata.ALGOLIA_SEARCH_KEY),
    []
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef}>
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  );
};

export default Search;
