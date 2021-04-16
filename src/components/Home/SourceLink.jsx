export default function SourceLink() {
  return (
    <a
      href="https://github.com/neysidev/application-ui"
      target="_blank"
      rel="noreferrer"
      className="flex items-center p-2 mx-0.5 text-gray-500 rounded-full hover:text-gray-400 focus:outline-none"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    </a>
  );
}
