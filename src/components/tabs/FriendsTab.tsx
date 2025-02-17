
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    <div className="max-w-md mx-auto space-y-6">
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
    </div>
  );
};
