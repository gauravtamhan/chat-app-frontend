export interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  avatarUrl: string;
}

export interface Message {
  id: number;
  authorId: User['id'];
  content: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: string;
  lastUpdatedAt: string;
  messages: Message[];
}
