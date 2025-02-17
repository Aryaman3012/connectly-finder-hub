
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const HistoryTab = () => {
  const mockHistory = [
    {
      id: 1,
      query: "Find software engineers in San Francisco",
      timestamp: "2024-02-20T10:00:00",
      results: 15,
    },
    // Add more mock history items
  ];

  return (
    <ScrollArea className="h-[600px] w-full rounded-md border p-4">
      <div className="space-y-4">
        {mockHistory.map((item) => (
          <Card key={item.id} className="p-4 card-hover">
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
  );
};
