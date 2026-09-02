"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
  type SyntheticEvent,
} from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  ChevronDown,
  Flower2,
  Heart,
  LoaderCircle,
  LockKeyhole,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useSendBlessing } from "@/hooks/useSendBlessing";

interface SendBlessingProps {
  isOpen: boolean;
  onClose: () => void;
}

const ATTENDANCE_OPTIONS = [
  {
    value: "Sẽ tham dự",
    label: "Chắc chắn rồi!",
  },
  {
    value: "Có thể tham dự",
    label: "Tôi chưa chắc chắn",
  },
  {
    value: "Rất tiếc không thể đến",
    label: "Rất tiếc, tôi không thể",
  },
] as const;

const QUANTITY_OPTIONS = [
  { value: "1", label: "1 người" },
  { value: "2", label: "2 người" },
  { value: "3", label: "3 người" },
  { value: "4", label: "4 người" },
  { value: "cả nhà luôn", label: "Cả nhà luôn" },
] as const;

const NOT_ATTENDING_VALUE = "Rất tiếc không thể đến";

const fieldClassName =
  "w-full rounded-xl border border-[#d8c7b6] bg-white/75 px-4 py-3.5 text-sm text-[#4f393c] outline-none transition duration-300 placeholder:text-[#9c898b] hover:border-[#c89b50] focus:border-[#b77a22] focus:bg-white focus:ring-4 focus:ring-[#dca54c]/15 disabled:cursor-not-allowed disabled:bg-[#eee7df]/70 disabled:text-[#9c898b] sm:text-base";

const SendBlessing = ({ isOpen, onClose }: SendBlessingProps) => {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();

  const formRef = useRef<HTMLFormElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [status, setStatus] = useState("");

  const sendBlessingMutation = useSendBlessing();
  const codeFromUrl = searchParams.get("code");
  const isNotAttending = status === NOT_ATTENDING_VALUE;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    if (isNotAttending) {
      formData.set("QUANTITY_ATTENDING", "");
    }

    sendBlessingMutation.mutate(formData, {
      onSuccess: () => {
        formRef.current?.reset();
        setStatus("");

        window.setTimeout(() => {
          sendBlessingMutation.reset();
          onClose();
        }, 2500);
      },
    });
  };

  const handleClose = () => {
    if (sendBlessingMutation.isPending) return;

    sendBlessingMutation.reset();
    onClose();
  };

  const stopUnderlyingCardAction = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const handleBackdropMouseDown = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();

    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-ignore-card-action
          role="presentation"
          className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-[#241316]/70 p-3 backdrop-blur-md sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onPointerDown={stopUnderlyingCardAction}
          onPointerUp={stopUnderlyingCardAction}
          onMouseDown={handleBackdropMouseDown}
          onMouseUp={stopUnderlyingCardAction}
          onTouchStart={stopUnderlyingCardAction}
          onTouchEnd={stopUnderlyingCardAction}
          onClick={stopUnderlyingCardAction}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="blessing-form-title"
            aria-describedby="blessing-form-description"
            onPointerDown={stopUnderlyingCardAction}
            onPointerUp={stopUnderlyingCardAction}
            onMouseDown={stopUnderlyingCardAction}
            onMouseUp={stopUnderlyingCardAction}
            onTouchStart={stopUnderlyingCardAction}
            onTouchEnd={stopUnderlyingCardAction}
            onClick={stopUnderlyingCardAction}
            initial={
              reduceMotion
                ? false
                : {
                  opacity: 0,
                  y: 28,
                  scale: 0.97,
                }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                  opacity: 0,
                  y: 18,
                  scale: 0.98,
                }
            }
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-[#e3c997]/60 bg-[#fffaf2] shadow-[0_35px_100px_rgba(36,19,22,0.35)] sm:rounded-4xl"
          >
            <ModalDecorations />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              disabled={sendBlessingMutation.isPending}
              aria-label="Đóng biểu mẫu"
              className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-[#dca54c]/30 bg-white/80 text-[#721527] shadow-sm backdrop-blur transition duration-300 hover:rotate-90 hover:border-[#dca54c] hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#dca54c]/25 disabled:cursor-not-allowed disabled:opacity-50 sm:right-6 sm:top-6"
            >
              <X className="size-5" />
            </button>

            <div className="relative z-10 max-h-[94svh] overflow-y-auto px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12">
              <FormHeader />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 space-y-5 sm:mt-10 sm:space-y-6"
              >
                <FormField
                  id="invitation-code"
                  label="Mã lời mời"
                  required
                  hint={
                    codeFromUrl
                      ? "Mã đã được nhận diện từ thiệp mời của bạn."
                      : "Mã được in trên thiệp mời."
                  }
                >
                  <div className="relative">
                    <input
                      id="invitation-code"
                      type="text"
                      name="CODE"
                      required
                      readOnly={Boolean(codeFromUrl)}
                      defaultValue={codeFromUrl ?? ""}
                      autoComplete="off"
                      placeholder="Ví dụ: QV-DL-001"
                      className={`${fieldClassName} pr-11 uppercase ${codeFromUrl
                        ? "cursor-default bg-[#f4ede4]/80"
                        : ""
                        }`}
                    />

                    {codeFromUrl && (
                      <LockKeyhole className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#9a671d]" />
                    )}
                  </div>
                </FormField>

                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    id="attendance-status"
                    label="Khả năng tham dự"
                    required
                  >
                    <SelectField
                      id="attendance-status"
                      name="STATUS"
                      value={status}
                      onChange={setStatus}
                      placeholder="Chọn phản hồi"
                      options={ATTENDANCE_OPTIONS}
                      required
                    />
                  </FormField>

                  <FormField
                    id="attendance-quantity"
                    label="Số người tham dự"
                    required={!isNotAttending}
                    hint={
                      isNotAttending
                        ? "Không cần chọn khi bạn không thể tham dự."
                        : undefined
                    }
                  >
                    <SelectField
                      id="attendance-quantity"
                      name="QUANTITY_ATTENDING"
                      placeholder="Chọn số người"
                      options={QUANTITY_OPTIONS}
                      required={!isNotAttending}
                      disabled={isNotAttending}
                    />
                  </FormField>
                </div>

                <FormField
                  id="blessing-note"
                  label="Lời chúc dành cho cặp đôi"
                  required
                >
                  <textarea
                    id="blessing-note"
                    name="NOTE"
                    required
                    rows={4}
                    maxLength={500}
                    placeholder="Hãy gửi những lời chúc yêu thương đến Quang Vinh và Diễm Linh..."
                    className={`${fieldClassName} min-h-32 resize-none leading-7`}
                  />
                </FormField>

                {sendBlessingMutation.isError && (
                  <StatusMessage variant="error">
                    {sendBlessingMutation.error.message}
                  </StatusMessage>
                )}

                {sendBlessingMutation.isSuccess && (
                  <StatusMessage variant="success">
                    Cảm ơn bạn! Phản hồi đã được ghi nhận.
                  </StatusMessage>
                )}

                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={
                      sendBlessingMutation.isPending ||
                      sendBlessingMutation.isSuccess
                    }
                    className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-[#dca54c]/70 bg-[#721527] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#fff8ed] shadow-[0_16px_35px_rgba(114,21,39,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5d1020] hover:shadow-[0_20px_45px_rgba(114,21,39,0.32)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#dca54c]/30 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-65 sm:mx-auto sm:w-auto sm:min-w-64"
                  >
                    <span className="absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                    {sendBlessingMutation.isPending ? (
                      <>
                        <LoaderCircle className="size-4 animate-spin" />
                        <span>Đang gửi phản hồi</span>
                      </>
                    ) : sendBlessingMutation.isSuccess ? (
                      <>
                        <Check className="size-4" />
                        <span>Đã ghi nhận</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span>Gửi lời chúc</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="flex items-center justify-center gap-2 text-center text-[11px] leading-5 text-[#8c7779] sm:text-xs">
                  <Heart className="size-3.5 fill-[#721527]/10 text-[#721527]" />
                  Cảm ơn bạn đã dành thời gian phản hồi và gửi gắm yêu thương đến chúng mình.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FormHeader = () => (
  <header className="mx-auto max-w-lg text-center">
    <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full border border-[#dca54c]/40 bg-white/70 text-[#721527] shadow-[0_10px_25px_rgba(114,21,39,0.08)]">
      <Heart className="size-5 fill-[#721527]/10" />
    </div>

    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9a671d] sm:text-xs">
      Wedding RSVP
    </p>

    <h2
      id="blessing-form-title"
      className="font-serif text-3xl font-semibold text-[#721527] sm:text-4xl md:text-5xl"
    >
      Lời Chúc Phúc
    </h2>

    <div
      aria-hidden="true"
      className="my-4 flex items-center justify-center gap-3"
    >
      <span className="h-px w-12 bg-linear-to-r from-transparent to-[#dca54c]" />
      <Flower2 className="size-4 text-[#dca54c]" />
      <span className="h-px w-12 bg-linear-to-l from-transparent to-[#dca54c]" />
    </div>

    <p
      id="blessing-form-description"
      className="text-sm leading-6 text-[#796668] sm:text-base"
    >
      Sự hiện diện và lời chúc phúc từ bạn sẽ giúp ngày trọng đại của chúng mình thêm phần trọn vẹn.
    </p>

    <p className="mt-2 text-xs font-medium italic text-[#9a671d] sm:text-sm">
      Vui lòng phản hồi trước ngày 01/10/2026
    </p>
  </header>
);

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}

const FormField = ({
  id,
  label,
  required,
  hint,
  children,
}: FormFieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#6e474e] sm:text-sm"
    >
      {label}

      {required && (
        <span aria-hidden="true" className="ml-1 text-[#b77a22]">
          *
        </span>
      )}
    </label>

    {children}

    {hint && (
      <p className="mt-1.5 text-xs leading-5 text-[#927f81]">{hint}</p>
    )}
  </div>
);

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  name: string;
  placeholder: string;
  options: readonly SelectOption[];
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const SelectField = ({
  id,
  name,
  placeholder,
  options,
  value,
  required,
  disabled,
  onChange,
}: SelectFieldProps) => (
  <div className="relative">
    <select
      id={id}
      name={name}
      required={required}
      disabled={disabled}
      value={value}
      defaultValue={value === undefined ? "" : undefined}
      onChange={
        onChange ? (event) => onChange(event.target.value) : undefined
      }
      className={`${fieldClassName} cursor-pointer appearance-none pr-11 invalid:text-[#9c898b]`}
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="bg-white text-[#4f393c]"
        >
          {option.label}
        </option>
      ))}
    </select>

    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#9a671d]" />
  </div>
);

interface StatusMessageProps {
  variant: "success" | "error";
  children: React.ReactNode;
}

const StatusMessage = ({ variant, children }: StatusMessageProps) => {
  const isSuccess = variant === "success";

  return (
    <motion.div
      role={isSuccess ? "status" : "alert"}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${isSuccess
        ? "border-[#c5b078]/40 bg-[#f7f1df] text-[#67531f]"
        : "border-[#c99198]/45 bg-[#fff1f2] text-[#8b2635]"
        }`}
    >
      <span
        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${isSuccess
          ? "bg-[#9a671d] text-white"
          : "bg-[#8b2635] text-white"
          }`}
      >
        {isSuccess ? (
          <Check className="size-3" />
        ) : (
          <X className="size-3" />
        )}
      </span>

      <span className="leading-6">{children}</span>
    </motion.div>
  );
};

const ModalDecorations = () => (
  <div aria-hidden="true" className="pointer-events-none">
    <div className="absolute -left-24 -top-24 size-56 rounded-full border border-[#dca54c]/20" />
    <div className="absolute -left-14 -top-14 size-36 rounded-full border border-[#721527]/10" />

    <div className="absolute -bottom-28 -right-24 size-64 rounded-full bg-[#721527]/5 blur-2xl" />

    <Flower2
      strokeWidth={1}
      className="absolute -bottom-6 -left-5 size-24 rotate-12 text-[#dca54c]/15 sm:size-32"
    />

    <Sparkles className="absolute right-16 top-8 size-5 text-[#dca54c]/35 sm:right-20" />
  </div>
);

export default SendBlessing;
