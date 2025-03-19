import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/Router"
import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
if (process.env.NODE_ENV === "development") {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
function App() {
  const client = new QueryClient()
  return <>
    <QueryClientProvider client={client}>
      <RouterProvider router={Router}></RouterProvider>
    </QueryClientProvider>
  </>
}

export default App
