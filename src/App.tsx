
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/Header";
import { MainLayout } from "@/components/MainLayout";
import { SearchTab } from "@/components/tabs/SearchTab";
import { IntrosTab } from "@/components/tabs/IntrosTab";
import { IntegrationsTab } from "@/components/tabs/IntegrationsTab";
import { FriendsTab } from "@/components/tabs/FriendsTab";
import { HistoryTab } from "@/components/tabs/HistoryTab";

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ThemeProvider defaultTheme="system" storageKey="connectly-theme">
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header />
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<SearchTab />} />
                <Route path="intros" element={<IntrosTab />} />
                <Route path="integrations" element={<IntegrationsTab />} />
                <Route path="friends" element={<FriendsTab />} />
                <Route path="history" element={<HistoryTab />} />
              </Route>
            </Routes>
            <Toaster />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default App;
