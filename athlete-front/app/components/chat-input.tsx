export function ChatInput() {
  return (
    <div className="flex items-center gap-4 border-t border-surface-light dark:border-surface-dark p-4 bg-background-light dark:bg-background-dark">
      <div className="flex flex-1 items-center rounded-full bg-surface-light dark:bg-surface-dark px-4">
        <input
          className="w-full h-12 bg-transparent text-text-primary-light dark:text-text-primary-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark border-none focus:ring-0"
          placeholder="Ask the coach..."
          type="text"
        />
        <button className="flex items-center justify-center rounded-full h-8 w-8 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary">
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
      <button className="flex items-center justify-center rounded-full h-12 w-12 bg-primary text-white shrink-0">
        <span className="material-symbols-outlined">send</span>
      </button>
    </div>
  );
}
