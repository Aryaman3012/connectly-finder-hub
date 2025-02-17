
import { UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 border-b glass-card">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-primary">ConnectlyHub</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};
