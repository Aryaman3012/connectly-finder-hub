export interface SearchResult {
  name: string;
  current_title: string;
  current_organization: string;
  description: string;
  score: number;
  connection_id: string;
  relevant_text: string;
  text_source: string;
  relevance_score: number;
}

export interface FriendRequest {
  _id: string;
  sender: {
    _id: string;
    name: string;
    email: string;
  };
  receiver: {
    _id: string;
    name: string;
    email: string;
  } | null;
  receiverEmail: string;
  message?: string;
  status: string;
  createdAt: string;
  respondedAt?: string;
} 