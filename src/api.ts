import { SearchResult } from './types';
import { API_BASE_URL } from './env.ts';


// Search API functions
export const searchConnections = async (query: string, userId: string): Promise<{
  status: string;
  results: SearchResult[];
  queryId: string;
}> => {
  const response = await fetch(`${API_BASE_URL}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, userId }),
    credentials: 'include',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Search API Error:', errorText);
    throw new Error('Search failed');
  }

  return response.json();
};

export const getSearchHistory = async (queryId: string) => {
  const response = await fetch(`${API_BASE_URL}/search/${queryId}`, {
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch search history');
  }

  return response.json();
};

// Friend Request API functions
interface FriendRequestPayload {
  receiverEmail: string;
  message?: string;
}

export const sendFriendRequest = async (payload: FriendRequestPayload) => {
  const response = await fetch(`${API_BASE_URL}/friend-requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to send friend request');
  }

  return response.json();
};

export const acceptFriendRequest = async (requestId: string) => {
  const response = await fetch(`${API_BASE_URL}/friend-requests/accept`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ request_id: requestId }),
    credentials: 'include',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('API Error:', errorText);
    throw new Error('Failed to accept friend request');
  }

  return response.json();
};

export const rejectFriendRequest = async (requestId: string) => {
  const response = await fetch(`${API_BASE_URL}/friend-requests/reject`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ request_id: requestId }),
    credentials: 'include',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('API Error:', errorText);
    throw new Error('Failed to reject friend request');
  }

  return response.json();
};

export const getAllFriendRequests = async () => {
  const response = await fetch(`${API_BASE_URL}/friend-requests`, {
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch friend requests');
  }

  return response.json();
};

export const getPendingFriendRequests = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/friend-requests/pending`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({}),
      credentials: 'include',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`Failed to fetch pending friend requests: ${response.status}`);
    }

    const data = await response.json();
    return data.requests || [];
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
};
