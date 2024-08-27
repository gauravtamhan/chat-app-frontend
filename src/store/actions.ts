import { Conversation, Message } from '../api/models';

export enum Actions {
  SET_SELECTED_CONVERSATION_ID = 'SET_SELECTED_CONVERSATION_ID',
  ADD_CONVERSATION = 'ADD_CONVERSATION',
  REMOVE_CONVERSATION_BY_ID = 'REMOVE_CONVERSATION_BY_ID',
  ADD_MESSAGE = 'ADD_MESSAGE',
}

type SetSelectedConversationIdType = {
  type: Actions.SET_SELECTED_CONVERSATION_ID;
  payload: Conversation['id'];
};
type AddConversationType = {
  type: Actions.ADD_CONVERSATION;
  payload: Conversation;
};
type RemoveConversationById = {
  type: Actions.REMOVE_CONVERSATION_BY_ID;
  payload: Conversation['id'];
};
type AddMessageType = { type: Actions.ADD_MESSAGE; payload: Message };

export type AppActions =
  | SetSelectedConversationIdType
  | AddConversationType
  | RemoveConversationById
  | AddMessageType;

export function setSelectedConversationId(
  id: Conversation['id']
): SetSelectedConversationIdType {
  return { type: Actions.SET_SELECTED_CONVERSATION_ID, payload: id };
}

export function addConversation(payload: Conversation): AddConversationType {
  return { type: Actions.ADD_CONVERSATION, payload };
}

export function removeConversationById(
  id: Conversation['id']
): RemoveConversationById {
  return { type: Actions.REMOVE_CONVERSATION_BY_ID, payload: id };
}

export function addMessage(payload: Message): AddMessageType {
  return { type: Actions.ADD_MESSAGE, payload };
}
