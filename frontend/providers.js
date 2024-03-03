"use client"
import { Provider } from "react-redux";
import { store } from "./store";
import { SSRProvider } from "react-bootstrap";

export function Providers({ children }) {
    return (
        <Provider store={store}>
            <SSRProvider>{children}</SSRProvider>
        </Provider>
    );
}