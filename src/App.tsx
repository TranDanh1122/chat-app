import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/Router"
import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render"
if (process.env.NODE_ENV === "development") {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
function App() {
  return <>
    <RouterProvider router={Router}></RouterProvider>
  </>
}

export default App
