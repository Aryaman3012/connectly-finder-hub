
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { User } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 border-b glass-card">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-primary">
          Exsora
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/profile">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </Link>
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};
