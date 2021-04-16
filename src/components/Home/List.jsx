import { Link } from 'react-router-dom';

import { components } from '../../constants';
import emptyImage from '../../images/empty-component.svg';

export default function List() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {components.map(component => (
        <li className="text-white cursor-pointer">
          <Link to={component.route}>
            <figure>
              <img
                className="w-full rounded-md"
                src={component.imgUrl ? component.imgUrl : emptyImage}
                alt={component.imgAlt}
              />
            </figure>
            <figcaption className="py-2" style={{ minHeight: '39px' }}>
              {component.name}
            </figcaption>
          </Link>
        </li>
      ))}
    </ul>
  );
}
