import React from "react";
import "./Quote.scss";
import { Link } from "react-router-dom";
import QuoteProp from "../model/Quote";

export const Quote = ({ citation, author, authorId }: QuoteProp) => (
  <blockquote className="quote">
    <p className="quote__citation">{citation}</p>
    <cite className="quote__author">
      <Link to={`/author/` + authorId}>{author}</Link>
    </cite>
  </blockquote>
);
