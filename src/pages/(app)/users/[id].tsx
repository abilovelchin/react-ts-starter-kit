import { useParams } from 'react-router-dom';

const UserDetailPage: React.FC = () => {
  const { id } = useParams();

  return <div className="p-5">User ID: {id}</div>;
};

export default UserDetailPage;
