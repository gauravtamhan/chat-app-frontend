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
        conversations: [...state.conversations, action.payload],
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
    // TODO: Need to handle cases where its a new message/conversation/thread
    case Actions.ADD_MESSAGE: {
      const selectedConversation = state.conversations.find(
        ({ id }) => id === state.selectedConversationId
      );

      if (selectedConversation === undefined) return { ...state };

      selectedConversation.threads[
        selectedConversation.threads.length - 1
      ].messages.push(action.payload);

      selectedConversation.lastMessage = action.payload.content;

      return {
        ...state,
        conversations: [...state.conversations, selectedConversation],
      };
    }
    default: {
      return state;
    }
  }
}
