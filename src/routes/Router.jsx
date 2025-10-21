import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Root from "../layout/Root";
import { Component } from "react";
import Content from "../components/Main/homelayout/Content";
import Homelayout from "../components/Main/homelayout/Homelayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: '/news/:id',
                        element: <Content />,
                        loader: () => fetch("/news.json")
                    }
                ]
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/career",
                element: <Career />
            }
        ]
    }

]);