import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";
import { GraphQLClientProvider } from "./utils/GraphQLClientProvider";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
);

export default function App() {
  return (
    <GraphQLClientProvider>
      <RouterProvider router={router}></RouterProvider>
    </GraphQLClientProvider>
  );
}
