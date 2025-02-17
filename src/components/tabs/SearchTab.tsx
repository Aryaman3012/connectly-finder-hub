
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SearchTab = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card className="p-4">
        <p className="text-sm text-muted-foreground">
          Try searching your network with queries like:
        </p>
        <ul className="mt-2 space-y-2 text-sm">
          <li>"Software engineers in San Francisco"</li>
          <li>"People who work at Google"</li>
          <li>"Connections in the fintech industry"</li>
          <li>"Startup founders in my network"</li>
        </ul>
      </Card>

      <div className="flex gap-4">
        <Input
          placeholder="Search your network..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
