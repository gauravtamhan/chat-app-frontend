export interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  avatarUrl: string;
}

export type MessageType = 'incoming' | 'outgoing';
export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: string;
}

export interface Thread {
  messages: Message[];
  startedAt: string;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: string;
  lastUpdatedAt: string;
  threads: Thread[];
}
