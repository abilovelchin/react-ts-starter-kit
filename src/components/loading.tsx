import { LoadingIcon } from '@/assets/icons';

import { cn } from '@/utils';

const Loading: React.FC<{ className?: string; text?: string; countdown?: number }> = ({
  className,
  text = ' Yüklənir...',
  countdown,
}) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center gap-x-2 flex-1 text-gray-500',
        className
      )}
    >
      <LoadingIcon className="animate-spin w-5 h-5" />
      {text}
      {countdown ?? <span>{countdown}</span>}
    </div>
  );
};

export { Loading };
