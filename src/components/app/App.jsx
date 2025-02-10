import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./reset.css";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page";
import { HeadphonePage } from "../../pages/headphone-page";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/headphones' element={<HeadphonesPage />}>
                  <Route index element={<div>Choose headphone</div>} />
                  <Route path=':headphoneId' element={<HeadphonePage />} />
                </Route>
                <Route path='/about' element={<div>about page</div>} />
                <Route path='/blocked' element={<Navigate to='/' />} />
                <Route path='/*' element={<div>pages</div>} />
              </Route>
            </Routes>
          </ThemeContextProvider>
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  );
};
