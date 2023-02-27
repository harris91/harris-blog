import Link from 'next/link'

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: 'About', to: '/about' }]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black dark:text-gray-50 nav cursor-pointer 
            hover:bg-gray-200 dark:hover:bg-gray-700 transition-all py-1 px-3 rounded-full">
            <Link href={link.to}>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
