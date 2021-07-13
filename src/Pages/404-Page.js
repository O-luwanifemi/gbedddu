import React from 'react';

import BoldText from "../Components/Bold_text.js"
import ErrorPageSmallText from '../Components/Error_pg_smallText.js';

export default function Page404() {
  return (
    <div id="error_text">
      <BoldText text="Welp! Page not found."/>
      <ErrorPageSmallText />
    </div>
  )
}
