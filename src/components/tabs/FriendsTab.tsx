import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getPendingFriendRequests, acceptFriendRequest, rejectFriendRequest } from '../../api';

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

interface PendingRequest {
  id: string;
  senderName: string;
  senderEmail: string;
  message?: string;
  createdAt: string;
}

export const FriendsTab = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([]);

  useEffect(() => {
    loadPendingRequests();
  }, []);

  const loadPendingRequests = async () => {
    try {
      const requests = await getPendingFriendRequests();
      setPendingRequests(requests);
    } catch (error) {
      console.error('Failed to load pending requests:', error);
    }
  };

  const handleInvite = () => {
    toast({
      title: "Invitation Sent",
      description: `An invitation has been sent to ${email}`,
    });
    setEmail("");
  };

  const handleAccept = async (requestId: string) => {
    try {
      await acceptFriendRequest(requestId);
      // Refresh the pending requests list
      loadPendingRequests();
    } catch (error) {
      console.error('Failed to accept request:', error);
    }
  };

  const handleReject = async (requestId: string) => {
    try {
      await rejectFriendRequest(requestId);
      // Refresh the pending requests list
      loadPendingRequests();
    } catch (error) {
      console.error('Failed to reject request:', error);
    }
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

      {/* Pending Friend Requests Section */}
      {pendingRequests.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Pending Friend Requests</h2>
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <div 
                key={request.id} 
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{request.senderName}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{request.senderEmail}</p>
                  {request.message && (
                    <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                      "{request.message}"
                    </p>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAccept(request.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
