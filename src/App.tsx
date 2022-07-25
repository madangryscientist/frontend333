import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home/home";
import Community from "./333community/community";
import { QueryClient, QueryClientProvider } from "react-query";
import Faq from "./faq/faq";
import Contact from "./contact/contact";
import Store from "./store/store";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
