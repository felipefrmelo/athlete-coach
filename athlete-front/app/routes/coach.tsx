import { ChatInput } from "~/components/chat-input";
import { ChatMessage } from "~/components/chat-message";
import { chatMessages } from "~/data/ai-coach-chat";

export default function AiCoachChat() {
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
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 space-y-4 overflow-y-auto p-4 md:p-6">
          {chatMessages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        <ChatInput />
      </main>
    </div>
  );
}
