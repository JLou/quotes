import React from "react";
import quotes from "../quotes.json";
import QuoteInterface from "../model/Quote";
import Quote from "../quote";

const getQuotes = (authorId: string, quotes: QuoteInterface[]) =>
  quotes.filter(q => q.authorId == authorId);

const Author = ({ match }: any) => {
  return (
    <>
      {getQuotes(match.params.name, quotes).map(q => (
        <Quote {...q} />
      ))}
    </>
  );
};

Author.propTypes = {};

export default Author;
