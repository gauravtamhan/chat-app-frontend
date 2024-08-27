import { Conversation, User } from './models';

const users: User[] = [
  {
    id: 8022,
    name: { first: 'Tim', last: 'Burton' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/men/1.jpg',
  },
  {
    id: 5379,
    name: { first: 'Lewis', last: 'Lawson' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/men/4.jpg',
  },
  {
    id: 7141,
    name: { first: 'Serenity', last: 'Collins' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/0.jpg',
  },
  {
    id: 2137,
    name: { first: 'Brennan', last: 'Douglas' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/men/18.jpg',
  },
  {
    id: 8326,
    name: { first: 'Diane', last: 'Dixon' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/44.jpg',
  },
  {
    id: 3037,
    name: { first: 'Carrie', last: 'Thompson' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/2.jpg',
  },
  {
    id: 7488,
    name: { first: 'Bertha', last: 'Dunn' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/8.jpg',
  },
  {
    id: 8790,
    name: { first: 'Felicia', last: 'Larson' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/60.jpg',
  },
  {
    id: 6080,
    name: { first: 'Alvin', last: 'Mckinney' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/men/14.jpg',
  },
  {
    id: 8211,
    name: { first: 'Jennifer', last: 'Kim' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/7.jpg',
  },
];

export const conversations: Conversation[] = [
  {
    id: 'ngz1wa',
    participants: [users[0]],
    lastMessage: 'Hey there! Looking forward to chatting with you soon.',
    lastUpdatedAt: '2024-08-27T00:40:24.609Z',
    messages: [],
  },
  {
    id: '8gdlfd',
    participants: [users[1]],
    lastMessage: 'Hey there! Looking forward to chatting with you soon.',
    lastUpdatedAt: '2024-08-27T00:40:24.609Z',
    messages: [],
  },
  {
    id: 'j8z9jy',
    participants: [users[2]],
    lastMessage: 'Hey there! Looking forward to chatting with you soon.',
    lastUpdatedAt: '2024-08-27T00:40:24.609Z',
    messages: [],
  },
  {
    id: 'rm6s8g',
    participants: [users[3]],
    lastMessage: 'Hey there! Looking forward to chatting with you soon.',
    lastUpdatedAt: '2024-08-27T00:40:24.609Z',
    messages: [],
  },
  {
    id: 'xoyp8w',
    participants: [users[4]],
    lastMessage: 'Hey there! Looking forward to chatting with you soon.',
    lastUpdatedAt: '2024-08-27T00:40:24.609Z',
    messages: [],
  },
];
