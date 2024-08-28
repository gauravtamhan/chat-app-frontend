import { Conversation, User, Message, Thread } from './models';

const users: User[] = [
  {
    id: 802,
    name: { first: 'Tim', last: 'Burton' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/men/1.jpg',
  },
  {
    id: 537,
    name: { first: 'Lewis', last: 'Lawson' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/men/4.jpg',
  },
  {
    id: 714,
    name: { first: 'Serenity', last: 'Collins' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/0.jpg',
  },
  {
    id: 213,
    name: { first: 'Brennan', last: 'Douglas' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/men/18.jpg',
  },
  {
    id: 832,
    name: { first: 'Diane', last: 'Dixon' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/44.jpg',
  },
  {
    id: 303,
    name: { first: 'Carrie', last: 'Thompson' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/2.jpg',
  },
  {
    id: 748,
    name: { first: 'Bertha', last: 'Dunn' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/8.jpg',
  },
  {
    id: 879,
    name: { first: 'Felicia', last: 'Larson' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/60.jpg',
  },
  {
    id: 608,
    name: { first: 'Alvin', last: 'Mckinney' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/men/14.jpg',
  },
  {
    id: 821,
    name: { first: 'Jennifer', last: 'Kim' },
    avatarUrl: 'https://randomuser.me/api/portraits/med/women/7.jpg',
  },
];

const messages: Message[][] = [
  [
    {
      id: '9413',
      type: 'incoming',
      content: 'Hey!',
      timestamp: '2024-07-17T18:24:12.000Z',
    },
    {
      id: '0479',
      type: 'incoming',
      content: 'Are we still on for dinner tomorrow evening?',
      timestamp: '2024-07-17T18:24:56.000Z',
    },
    {
      id: '1348',
      type: 'outgoing',
      content: 'Yep, I get off work at 5pm.',
      timestamp: '2024-07-17T18:27:21.000Z',
    },
    {
      id: '7849',
      type: 'outgoing',
      content: 'Want to meet there around 7pm?',
      timestamp: '2024-07-17T18:27:49.000Z',
    },
    {
      id: '9723',
      type: 'incoming',
      content: "Works for me. I'll try to get us a table on the patio.",
      timestamp: '2024-07-17T18:32:08.000Z',
    },
    {
      id: '4809',
      type: 'outgoing',
      content: 'Sounds good!',
      timestamp: '2024-07-17T18:34:33.000Z',
    },
  ],
  [
    {
      id: '4761',
      type: 'incoming',
      content:
        'I just emailed you the contract. Please review and let me know if you have any questions.',
      timestamp: '2024-02-21T14:17:21.000Z',
    },
    {
      id: '4762',
      type: 'outgoing',
      content: 'Will take a look later today, thanks!',
      timestamp: '2024-02-21T14:19:55.000Z',
    },
  ],
  [
    {
      id: '1208',
      type: 'incoming',
      content: 'Hello!',
      timestamp: '2024-03-04T01:06:08.000Z',
    },
  ],
  [
    {
      id: '6246',
      type: 'incoming',
      content: 'Hi',
      timestamp: '2024-04-19T00:43:48.000Z',
    },
  ],
  [
    {
      id: '6247',
      type: 'incoming',
      content: 'Is anyone there?',
      timestamp: '2024-05-31T02:05:53.000Z',
    },
  ],
  [
    {
      id: '6248',
      type: 'incoming',
      content: 'Hey there! Looking forward to chatting with you 🙂',
      timestamp: '2023-09-11T19:22:22.000Z',
    },
  ],
  [
    {
      id: '4763',
      type: 'outgoing',
      content:
        'Looks good! Lets set up a 30 minute call to go over a few details.',
      timestamp: '2024-02-21T18:40:20.000Z',
    },
    {
      id: '4764',
      type: 'outgoing',
      content: 'How does tomorrow morning look for you?',
      timestamp: '2024-02-21T18:41:25.000Z',
    },
  ],
  [
    {
      id: '9724',
      type: 'outgoing',
      content: 'Do you need anything from the store?',
      timestamp: '2024-08-18T20:01:22.000Z',
    },
    {
      id: '9725',
      type: 'incoming',
      content: `Yeah, could you please grab these:
        • eggs
        • milk
        • butter
        • flour
        • chocolate chips`,
      timestamp: '2024-08-18T20:04:22.000Z',
    },
    {
      id: '9726',
      type: 'outgoing',
      content:
        'Sure thing. Want me to grab the pre-made cookie dough too just in case?',
      timestamp: '2024-08-18T20:05:03.000Z',
    },
    {
      id: '9727',
      type: 'incoming',
      content: 'Hmm, yeah that might be good to have as well.',
      timestamp: '2024-08-18T20:05:53.000Z',
    },
  ],
];

const threads: Thread[][] = [
  [
    {
      startedAt: messages[0][0].timestamp,
      messages: messages[0],
    },
    {
      startedAt: messages[7][0].timestamp,
      messages: messages[7],
    },
  ],
  [
    {
      startedAt: messages[1][0].timestamp,
      messages: messages[1],
    },
    {
      startedAt: messages[6][0].timestamp,
      messages: messages[6],
    },
  ],
  [
    {
      startedAt: messages[2][0].timestamp,
      messages: messages[2],
    },
    {
      startedAt: messages[3][0].timestamp,
      messages: messages[3],
    },
    {
      startedAt: messages[4][0].timestamp,
      messages: messages[4],
    },
  ],
  [
    {
      startedAt: messages[5][0].timestamp,
      messages: messages[5],
    },
  ],
];

const getLastMessageByThreadIndex = (i: number) => {
  const a = threads[i];
  return a[a.length - 1].messages[a[a.length - 1].messages.length - 1].content;
};

const getLastUpdatedAtByThreadIndex = (i: number) => {
  const n = threads[i];
  const m = n[n.length - 1].messages;
  return m[m.length - 1].timestamp;
};

export const conversations: Conversation[] = [
  {
    id: 'ngz1wa',
    participants: [users[0]],
    lastMessage: getLastMessageByThreadIndex(0),
    lastUpdatedAt: getLastUpdatedAtByThreadIndex(0),
    threads: threads[0],
  },
  {
    id: '8gdlfd',
    participants: [users[1]],
    lastMessage: getLastMessageByThreadIndex(1),
    lastUpdatedAt: getLastUpdatedAtByThreadIndex(1),
    threads: threads[1],
  },
  {
    id: 'j8z9jy',
    participants: [users[2]],
    lastMessage: getLastMessageByThreadIndex(2),
    lastUpdatedAt: getLastUpdatedAtByThreadIndex(2),
    threads: threads[2],
  },
  {
    id: 'rm6s8g',
    participants: [users[3]],
    lastMessage: getLastMessageByThreadIndex(3),
    lastUpdatedAt: getLastUpdatedAtByThreadIndex(3),
    threads: threads[3],
  },
];
