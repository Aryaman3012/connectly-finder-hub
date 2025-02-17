
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
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
import { ProfilePage } from "@/components/pages/ProfilePage";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ThemeProvider defaultTheme="system" storageKey="connectly-theme">
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header />
            <Routes>
              <Route path="/sign-in" element={
                <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                  <SignIn routing="path" path="/sign-in" />
                </div>
              } />
              <Route path="/sign-up" element={
                <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                  <SignUp routing="path" path="/sign-up" />
                </div>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/" element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }>
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
