import { Link } from 'react-router-dom';
import { components } from '../../constants';

export default function List() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {components.map(component => (
        <li key={component.id} className="relative">
          <Link
            to={component.route}
            className="absolute top-0 left-0 w-full h-full"
          />
          <figure>
            <img
              className="w-full rounded-md"
              style={{ minHeight: '157px' }}
              src={`/img/${component.image}`}
              alt={component.name}
            />
          </figure>
          <figcaption
            className="py-2 font-semibold"
            style={{ minHeight: '39px' }}
          >
            {component.name}
          </figcaption>
        </li>
      ))}
    </ul>
  );
}
