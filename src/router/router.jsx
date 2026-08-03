import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "../components";
import Layout from "../Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
        </Route>
    )
)

export default router;