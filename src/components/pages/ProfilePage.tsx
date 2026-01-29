import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, Mail, Building } from "lucide-react";

export const ProfilePage = () => {
  // Mock user data - will be replaced with Supabase auth later
  const user = {
    firstName: "Demo",
    lastName: "User",
    email: "demo@example.com",
    imageUrl: "",
    createdAt: new Date().toISOString(),
  };

  return (
    <div className="container max-w-3xl mx-auto py-8">
      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback>{user.firstName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>{user.email}</span>
          </div>
        </div>
      </Card>

      <div className="mt-8 grid gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Activity Overview</h2>
          <div className="text-sm text-muted-foreground">
            <p>Join date: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
