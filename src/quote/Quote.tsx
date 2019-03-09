import React from "react";
import "./Quote.scss";

interface QuoteProp {
  citation: string;
  author: string;
}

export const Quote = ({ citation, author }: QuoteProp) => (
  <blockquote className="quote">
    <p className="quote__citation">{citation}</p>
    <cite className="quote__author">{author}</cite>
  </blockquote>
);
