
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

export const IntrosTab = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Upload Contacts</h3>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-secondary/50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-4 text-primary" />
              <p className="mb-2 text-sm">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                CSV file (max. 10MB)
              </p>
            </div>
            <input type="file" className="hidden" accept=".csv" />
          </label>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="rounded-lg border bg-card p-4 text-card-foreground">
          <p className="text-sm text-muted-foreground">
            Ask me about making introductions or managing your network. For example:
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li>"Find potential connections in the tech industry"</li>
            <li>"Who should I introduce to Jane from Microsoft?"</li>
            <li>"Show me my strongest connections in San Francisco"</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
