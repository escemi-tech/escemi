import React from "react";

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>,
  ]);
};
