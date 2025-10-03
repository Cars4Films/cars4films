import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { HealthProvider } from "@/contexts/HealthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
// import { InfoPage } from "@/pages/InfoPage";
import { ItemListPage } from "@/pages/ItemListPage";
import { ItemDetailPage } from "@/pages/ItemDetailPage";
import { ItemFormPage } from "@/pages/ItemFormPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <HealthProvider>
          <Router>
            <Navbar />
            <Routes>
              {/* HomePage has its own layout without .app wrapper */}
              <Route path="/" element={<HomePage />} />

              {/* All other pages use the standard app layout */}
              <Route
                path="*"
                element={
                  <div className="app">
                    <main className="main-content">
                      <Routes>
                        <Route path="/items" element={<ItemListPage />} />
                        <Route path="/items/:id" element={<ItemDetailPage />} />
                        <Route
                          path="/items/:id/edit"
                          element={<ItemFormPage />}
                        />
                        <Route path="/create" element={<ItemFormPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </main>
                  </div>
                }
              />
            </Routes>
            <Footer />
          </Router>
        </HealthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
