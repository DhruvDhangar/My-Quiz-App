export default function ProgressSegments({ total, current, answered = [], onJump = () => {} }) {
  const segCount = total;
  return (
    <div className="flex justify-center mb-[20px]">
      <div className="flex gap-[32px]">
        {Array.from({ length: segCount }).map((_, i) => {
          const filled = answered[i] != null;
          const active = i === current;
          return (
            <div
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => onJump(i)}
              onKeyDown={(e)=> { if (e.key === "Enter") onJump(i); }}
              aria-label={`Jump to question ${i+1}`}
              className={`h-[6px] rounded-full transition-all ${active ? 'w-[214px] bg-[#0b3f49]' : 'w-[214px] bg-[#e9eef0]'} ${filled && !active ? 'bg-[#bfeaf0]' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}
