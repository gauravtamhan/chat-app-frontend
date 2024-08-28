import { Conversation } from '../api/models';
import { Actions, AppActions } from './actions';
import { conversations } from '../api/data';

interface AppState {
  selectedConversationId?: string;
  conversations: Conversation[];
}

export const initialState: AppState = {
  conversations,
};

export default function reducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case Actions.SET_SELECTED_CONVERSATION_ID: {
      return {
        ...state,
        selectedConversationId: action.payload,
      };
    }
    case Actions.ADD_CONVERSATION: {
      return {
        ...state,
        selectedConversationId: action.payload.id,
        conversations: [action.payload, ...state.conversations],
      };
    }
    case Actions.REMOVE_CONVERSATION_BY_ID: {
      return {
        ...state,
        conversations: state.conversations.filter(
          ({ id }) => id !== action.payload
        ),
      };
    }
    case Actions.ADD_MESSAGE: {
      const conversations = state.conversations.map((convo) => {
        const isSelectedConvo = convo.id === state.selectedConversationId;

        if (isSelectedConvo) {
          return {
            ...convo,
            lastMessage: action.payload.content,
            lastUpdatedAt: action.payload.timestamp,
            threads: convo.threads.map((thread, i, array) => {
              const isLast = i === array.length - 1;
              return isLast
                ? {
                    ...thread,
                    messages: [...thread.messages, action.payload],
                  }
                : thread;
            }),
          };
        } else {
          return convo;
        }
      });

      return {
        ...state,
        conversations,
      };
    }
    default: {
      return state;
    }
  }
}
