import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const messages = [
  {
    sender: "AI",
    time: "10:30 AM",
    text: "Good morning! You had a strong 5-mile run yesterday. Ready to discuss this week's plan?",
  },
  {
    sender: "You",
    time: "10:31 AM",
    text: "Thanks! Yes, what are my targets for this week?",
  },
  {
    sender: "AI",
    time: "10:31 AM",
    text: "Here are your targets. I've focused on building aerobic base while touching on some threshold work.",
  },
];

const quickPrompts = [
  "Summarize my last run",
  "What's my goal for this week?",
  "Explain cardiac drift",
  "Suggest a recovery workout",
];

export function Chat() {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex items-center border-b border-surface-light dark:border-surface-dark p-4 shrink-0">
        <div className="text-text-primary-light dark:text-text-primary-dark w-12">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <h1 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary-light dark:text-text-primary-dark">
            AI Coach
          </h1>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Online
          </p>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-full h-10 w-10 text-text-primary-light dark:text-text-primary-dark">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <main className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 space-y-4 overflow-y-auto p-4 md:p-6">
            {messages.map((message, index) => (
              <Message key={index} {...message} />
            ))}
          </div>
          <div className="flex items-center gap-4 border-t border-surface-light dark:border-surface-dark p-4 bg-background-light dark:bg-background-dark">
            <div className="flex flex-1 items-center rounded-full bg-surface-light dark:bg-surface-dark px-4">
              <Input
                className="w-full h-12 bg-transparent text-text-primary-light dark:text-text-primary-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark border-none focus:ring-0"
                placeholder="Ask the coach..."
              />
              <button className="flex items-center justify-center rounded-full h-8 w-8 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
            </div>
            <Button className="flex items-center justify-center rounded-full h-12 w-12 bg-primary text-white shrink-0">
              <span className="material-symbols-outlined">send</span>
            </Button>
          </div>
        </main>
        <aside className="w-[360px] border-l border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark p-6 hidden lg:flex flex-col gap-8">
          <div className="rounded-xl border border-surface-light dark:border-surface-dark bg-background-light dark:bg-surface-dark/20 p-6">
            <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary-light dark:text-text-primary-dark mb-4">
              This Week's Targets
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-text-secondary-light dark:text-text-secondary-dark">
                  Volume
                </span>
                <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                  8h 30m
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-text-secondary-light dark:text-text-secondary-dark">
                  Intensity Split
                </span>
                <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                  80% Z2, 20% Z4+
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-text-secondary-light dark:text-text-secondary-dark">
                  Key Session
                </span>
                <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                  4x8 min Threshold
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-text-secondary-light dark:text-text-secondary-dark">
                  Rest Days
                </span>
                <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                  2
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary-light dark:text-text-primary-dark mb-4">
              Quick Prompts
            </h3>
            <div className="flex flex-col gap-3">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  className="flex h-10 w-full items-center justify-start gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark px-4 text-left hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                >
                  <p className="text-sm font-medium leading-normal text-text-primary-light dark:text-text-primary-dark">
                    {prompt}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Message({ sender, time, text }) {
  const isUser = sender === "You";
  return (
    <div className={`flex items-end gap-3 ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="AI Coach" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      <div className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-[360px]">
          {sender} · {time}
        </p>
        <p
          className={`text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 ${
            isUser
              ? "rounded-br-none bg-primary text-white"
              : "rounded-bl-none bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark"
          }`}
        >
          {text}
        </p>
      </div>
      {isUser && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="You" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
