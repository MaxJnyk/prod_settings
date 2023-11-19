import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {ThemeProvider} from "app/providers/ThemeProvider";

import "shared/config/i18next/i18next";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider >
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
