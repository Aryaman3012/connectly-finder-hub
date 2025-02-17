
import { NavLink, Outlet } from "react-router-dom";
import { Search, UserPlus, Share2, Users, History } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { icon: Search, label: "Search", path: "/" },
  { icon: UserPlus, label: "Intros", path: "/intros" },
  { icon: Share2, label: "Integrations", path: "/integrations" },
  { icon: Users, label: "Friends", path: "/friends" },
  { icon: History, label: "History", path: "/history" },
];

export const MainLayout = () => {
  return (
    <div className="container mx-auto flex h-[calc(100vh-80px)]">
      <aside className="w-64 border-r p-4 space-y-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 p-2 rounded-lg transition-colors",
                "hover:bg-secondary",
                isActive ? "bg-secondary text-primary" : "text-muted-foreground"
              )
            }
          >
            <tab.icon className="h-5 w-5" />
            {tab.label}
          </NavLink>
        ))}
      </aside>
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
