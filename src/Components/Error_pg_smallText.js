import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPageSmallText() {
  return (
    <p className="EP_smallText">
      Go <Link to="/" className="EP_goHome">HOME</Link> to get started...
    </p>
  )
}
