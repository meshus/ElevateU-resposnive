import Layout from '@/components/Layout';
import GroupsContent from '@/Components/GroupsContent';

export default function GroupChat({ children }) {
  const groups = [
    { id: 1, name: "Group 1", lastmessage: "Last message 1" },
    { id: 2, name: "Group 2", lastmessage: "Last message 2" },
    // Add more mock groups as needed
  ];

  return (
    <Layout>
      <GroupsContent groups={groups}>
        {children}
      </GroupsContent>
    </Layout>
  );
}
