import Layout from '@/components/Layout';
import ChatContent from '@/Components/ChatContent';

export default function Chat({ children }) {
  const mockUserData = [
    { id: 1, name: "User 1", lastMessage: "Last message 1" },
    { id: 2, name: "User 2", lastMessage: "Last message 2" },
    // Add more mock users as needed
  ];

  return (
    <Layout>
      <ChatContent mockUserData={mockUserData}>
        {children}
      </ChatContent>
    </Layout>
  );
}
