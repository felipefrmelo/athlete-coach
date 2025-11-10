import { chatMessages } from "~/data/ai-coach-chat";

export function ChatMessage({
  message,
}: {
  message: (typeof chatMessages)[0];
}) {
  const isUser = message.sender === "user";
  const avatarUrl =
    message.sender === "ai"
      ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAfHGiRCVy360GGdLUVtFat9Ez9O5FMmYIK21GWFbpbZoztWIod6hWAe7Mo0xzS-R789fMDMusIjab83EX24ilr0xiHXJZMPMVQnH7uLcELqAPHhBkxs1LLXhYNErAPhyPDt4T8Er8JKS-UHHlQhcJJj8TvQB127gxTf7zynSl-yN2wAsx5bAUln89zKa5qkA2fN1BPjBO_RM1RGOFc0QjHnBIfkZt8C3_7QMZeWGTJJLd44DORplnwqC_KykMkZ2OCMImtmB38XKI"
      : "https://lh3.googleusercontent.com/aida-public/AB6AXuCIt49oxKuGAfcrGcwm-N6La5KiRCO2INHm7gcVofkCEH_QzKL0TXjoD7KQDI62VxI0ATmPXXzsh0sVhQ17caqvI-zk4Npe4LbwNtRxYl21CTEndzsp00nPZxeHjRTHhqEKsgXYmtuN4uVBQ5OaK8fwjjztSdy7mzdcjDUuTBkf-_gkLAWP3QW2HXmYBZAPMylWhqAL9mu4JlWCOrv4WQPsRryJAXe9CzJpnmSHlIwsCP4eI9OKdeRTeLWEhPX_KdZjJpqT-G9sNBI";

  return (
    <div className={`flex items-end gap-3 ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0 border border-surface-light dark:border-surface-dark"
          style={{ backgroundImage: `url("${avatarUrl}")` }}
        />
      )}
      <div
        className={`flex flex-col gap-1 ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-[360px]">
          {message.sender === "ai" ? "Strava AI Coach" : "You"} · {message.time}
        </p>
        <p
          className={`text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 ${
            isUser
              ? "rounded-br-none bg-primary text-white"
              : "rounded-bl-none bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark"
          }`}
        >
          {message.message}
        </p>
      </div>
      {isUser && (
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: `url("${avatarUrl}")` }}
        />
      )}
    </div>
  );
}
