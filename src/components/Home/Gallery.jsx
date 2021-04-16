import Menu from './Menu';
import List from './List';

export default function Gallery() {
  return (
    <main className="py-3 mx-5 my-8">
      <Menu />
      <hr className="my-3 rounded border-black-500" />
      <List />
    </main>
  );
}
