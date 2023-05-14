import { useModals } from "$src/router";

export default function TestModal() {
  const modals = useModals();
  return (
    <div className="bg-black/30 fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-5">
        <button type="button" onClick={() => modals.close()}>
          Close modal
        </button>
      </div>
    </div>
  );
}
