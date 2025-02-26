import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { searchConnections } from "@/api";
import { SearchResult } from "@/types";
import { toast } from "@/components/ui/use-toast";

export const SearchTab = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getCurrentUserId = () => {
      const storedUserId = localStorage.getItem("userId") || sessionStorage.getItem("userId");
      if (storedUserId) {
        setUserId(storedUserId);
      } else {
        console.warn("User ID not found. User may need to log in.");
        toast({
          title: "Authentication Required",
          description: "Please log in to search your network.",
          variant: "destructive",
        });
      }
    };
    
    getCurrentUserId();
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Error",
        description: "Please enter a search query",
        variant: "destructive",
      });
      return;
    }

    if (!userId) {
      toast({
        title: "Error",
        description: "User ID is required for search",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await searchConnections(query, userId);
      setResults(response.results);
    } catch (error) {
      toast({
        title: "Search Failed",
        description: "Failed to fetch search results. Please try again.",
        variant: "destructive",
      });
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
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
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1"
        />
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? (
            <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>

      {results.length > 0 && (
        <Card className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.connection_id}>
                  <TableCell className="font-medium">{result.name}</TableCell>
                  <TableCell>{result.current_title}</TableCell>
                  <TableCell>{result.current_organization}</TableCell>
                  <TableCell className="text-right">
                    {result.relevance_score.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "Coming Soon",
                          description: "Connection feature will be available soon!",
                        });
                      }}
                    >
                      Connect
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {isLoading && (
        <div className="flex justify-center">
          <div className="animate-pulse text-muted-foreground">
            Searching...
          </div>
        </div>
      )}

      {!isLoading && results.length === 0 && query && (
        <div className="text-center text-muted-foreground">
          No results found. Try a different search query.
        </div>
      )}
    </div>
  );
};
