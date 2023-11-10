import React from "react";

interface SearchResultProps {
  searchQuery: string;
  searchResults: Array<string>;
}

const SearchResults: React.FC<SearchResultProps> = ({
  searchQuery,
  searchResults,
}) => {
  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
