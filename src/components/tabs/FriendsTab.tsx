
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const suggestedFriends = [
  {
    name: "Sarah Chen",
    title: "Product Manager at Google",
    connections: 12,
  },
  {
    name: "Michael Rodriguez",
    title: "Software Engineer at Meta",
    connections: 8,
  },
  {
    name: "Emily Wilson",
    title: "UX Designer at Apple",
    connections: 15,
  },
];

export const FriendsTab = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleInvite = () => {
    toast({
      title: "Invitation Sent",
      description: `An invitation has been sent to ${email}`,
    });
    setEmail("");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Invite Friends</h3>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="friend@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="w-full" onClick={handleInvite}>
            <Mail className="h-4 w-4 mr-2" />
            Send Invitation
          </Button>
        </div>
      </Card>

      <div>
        <h3 className="text-lg font-medium mb-4">Suggested Connections</h3>
        <div className="space-y-4">
          {suggestedFriends.map((friend) => (
            <Card key={friend.name} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{friend.name}</h4>
                  <p className="text-sm text-muted-foreground">{friend.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {friend.connections} mutual connections
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
