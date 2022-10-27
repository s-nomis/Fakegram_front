import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import PostExpanded from "./components/posts/PostExpanded";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Post from "./pages/Post";
import Profil from "./pages/Profil";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

function App() {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                exact
                path="/p/:id"
                element={
                    <PrivateRoute>
                        <Post />
                    </PrivateRoute>
                }
            />
            <Route
                exact
                path="/:username"
                element={
                    <PrivateRoute>
                        <Profil />
                    </PrivateRoute>
                }
            />
            <Route
                exact
                path="/:username/saved"
                element={
                    <PrivateRoute>
                        <Profil activeTab="Enregistrements" />
                    </PrivateRoute>
                }
            />
            <Route
                exact
                path="/account/edit"
                element={
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                }
            />
            <Route
                exact
                path="/account/password/change"
                element={
                    <PrivateRoute>
                        <ChangePassword />
                    </PrivateRoute>
                }
            />
            <Route
                exact
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                exact
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />

            <Route
                path="*"
                element={
                    <PrivateRoute>
                        <Page404 />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export default App;
