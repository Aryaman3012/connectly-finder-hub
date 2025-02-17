
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Upload } from "lucide-react";

export const IntegrationsTab = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Linkedin className="h-5 w-5 text-primary" />
            <CardTitle>LinkedIn Integration</CardTitle>
          </div>
          <CardDescription>
            Import your LinkedIn connections
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Upload your LinkedIn connections export file to sync your network.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Upload className="h-4 w-4 mr-2" />
            Upload Connections
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
