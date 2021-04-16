export default function Header() {
  return (
    <header className="py-1 mx-5">
      <h1 className="py-3 text-5xl font-bold">Application UI</h1>
      <p className="text-black-300">
        Hi guys, I decided to create different user interfaces <br />
        to learn better{' '}
        <a
          className="transition font-semibold border-b text-green-400 border-green-300 hover:border-green-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>
      </p>
    </header>
  );
}
