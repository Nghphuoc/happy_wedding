import { SectionHeading } from "@/feature/InteractiveWedding/ui";
import SendBlessing from "@/feature/SendBlessing";
import { Fingerprint } from "lucide-react";
import { useEffect, useRef, useState, type SyntheticEvent } from "react";

interface QRSectionProps {
  onOpenChange?: (isOpen: boolean) => void;
}

function QRSection({ onOpenChange }: QRSectionProps) {
  const [isSendBlessingOpen, setIsSendBlessingOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const HOLD_DURATION = 1500;
  const PROGRESS_INTERVAL = 30;

  const stopCardAction = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const clearHold = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }

    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }

    setProgress(0);
  };

  const startHold = () => {
    clearHold();

    const startedAt = Date.now();

    progressTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      setProgress(Math.min((elapsed / HOLD_DURATION) * 100, 100));
    }, PROGRESS_INTERVAL);

    holdTimerRef.current = setTimeout(() => {
      clearHold();
      onOpenChange?.(true);
      setIsSendBlessingOpen(true);
    }, HOLD_DURATION);
  };

  useEffect(() => clearHold, []);

  return (
    <>
      <div
        data-ignore-card-action
        className="text-center bg-white p-4 rounded-md shadow-sm border border-[#721527]/10 w-full max-w-55"
        onPointerDown={stopCardAction}
        onPointerUp={stopCardAction}
        onPointerCancel={stopCardAction}
        onMouseDown={stopCardAction}
        onMouseUp={stopCardAction}
        onTouchStart={stopCardAction}
        onTouchEnd={stopCardAction}
        onClick={stopCardAction}
        onContextMenu={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <SectionHeading icon={Fingerprint} label="Gửi Lời Chúc" />

        <button
            type="button"
            onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startHold();
            }}
            onPointerUp={(e) => {
                e.stopPropagation();
                clearHold();
            }}
            onPointerLeave={(e) => {
                e.stopPropagation();
                clearHold();
            }}
            onPointerCancel={(e) => {
                e.stopPropagation();
                clearHold();
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto my-3 rounded-full flex items-center justify-center select-none touch-none cursor-pointer bg-[#721527]/5 border border-[#721527]/15 transition-transform active:scale-95"
            aria-label="Chạm và giữ để gửi lời chúc"
            >
            <div
                className="absolute inset-0 rounded-full"
                style={{
                background: `conic-gradient(#721527 ${progress * 3.6}deg, rgba(114, 21, 39, 0.08) 0deg)`,
                }}
            />

            <div className="absolute inset-0.75 rounded-full bg-white" />

            <Fingerprint
                className={`relative z-10 w-9 h-9 sm:w-11 sm:h-11 text-[#721527] transition-all duration-200 ${progress > 0 ? "scale-110" : ""}`}
                strokeWidth={1.5}
            />
        </button>

        <p className="text-[9px] sm:text-[10px] text-[#8c7462] italic">
          Chạm và giữ vân tay để gửi lời chúc.
        </p>
      </div>

      <SendBlessing
        isOpen={isSendBlessingOpen}
        onClose={() => {
          setIsSendBlessingOpen(false);
          onOpenChange?.(false);
        }}
      />
    </>
  );
}

export default QRSection;
