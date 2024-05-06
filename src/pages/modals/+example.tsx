import { useModals } from '@/router';

const TestModal: React.FC = () => {
  const modals = useModals();

  return (
    <div className="bg-black/30 fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <pre>const modals = useModals()</pre>
        <pre>modals.open('path')</pre>
        <pre>modals.close()</pre>

        <button
          type="button"
          onClick={() => modals.close()}
          className="text-sm text-white bg-black py-1 px-3 rounded mt-4"
        >
          Close modal
        </button>
      </div>
    </div>
  );
};
export default TestModal;
