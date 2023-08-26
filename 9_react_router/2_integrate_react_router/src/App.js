import Welcome from "./components/welcome/Welcome";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import PetSearchNotFound from "./pages/petSearchNotFound";
import Root from "./components/root";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} element={<Welcome />}></Route>
      {/* <Route index={true} element={<HomePage />}></Route> */}
      <Route path="/all" element={<HomePage />}></Route>
      <Route path="/:type" element={<HomePage />}></Route>
      <Route path="/:type/:id" element={<PetDetailsPage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route
        path="/pet-details-not-found"
        element={<PetDetailsNotFound />}
      ></Route>
      <Route
        path="/pet-search-not-found"
        element={<PetSearchNotFound />}
      ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
