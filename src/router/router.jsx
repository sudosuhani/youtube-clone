import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, VideoDetails } from "../components";
import Layout from "../Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="watch/:id" element={<VideoDetails />} />
        </Route>
    )
)

export default router;