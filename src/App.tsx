import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/Router"
import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner";
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
      <Toaster/>
    </QueryClientProvider>
  </>
}

export default App
