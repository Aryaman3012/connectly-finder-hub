
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockHistory = [
  {
    id: 1,
    query: "Find software engineers in San Francisco",
    timestamp: "2024-02-20T10:00:00",
    results: 15,
  },
  {
    id: 2,
    query: "People who work at Google",
    timestamp: "2024-02-19T15:30:00",
    results: 8,
  },
  {
    id: 3,
    query: "Startup founders in New York",
    timestamp: "2024-02-18T09:15:00",
    results: 12,
  },
];

export const HistoryTab = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-4 mb-6">
        <p className="text-sm text-muted-foreground">
          Your search history helps you track and revisit your network exploration.
          Click on any past search to run it again.
        </p>
      </Card>

      <ScrollArea className="h-[500px] w-full rounded-md border p-4">
        <div className="space-y-4">
          {mockHistory.map((item) => (
            <Card key={item.id} className="p-4 cursor-pointer hover:bg-secondary/50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium">{item.query}</h4>
                  <p className="text-sm text-muted-foreground">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
                <span className="text-sm text-primary">{item.results} results</span>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
