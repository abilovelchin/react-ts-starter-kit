import { Link } from 'react-router-dom';

const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-sm bg-white p-5">
      <h6 className="font-medium">React TS Starter Kit</h6>
      <span className="font-medium text-gray-400">
        by{' '}
        <a target="_blank" href="https://abilov.az" className="text-indigo-400">
          @abilovelchin
        </a>
      </span>

      <span className="mt-3 text-gray-400 border p-2 rounded">
        Example
        <Link to="/users" className="text-blue-400 underline mx-2">
          Users
        </Link>
        page
      </span>
    </div>
  );
};

export default IndexPage;
