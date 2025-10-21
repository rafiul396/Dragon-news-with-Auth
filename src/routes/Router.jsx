import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Root from "../layout/Root";
import { Component } from "react";
import Content from "../components/Main/homelayout/Content";
import Homelayout from "../components/Main/homelayout/Homelayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Authlayoutcompo/AuthLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/news/:id",
                element: <Content />,
                loader: () => fetch('/news.json')
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
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    }
]);