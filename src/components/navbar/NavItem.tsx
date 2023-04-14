interface NavItemProps {
  href: string;
  title: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, title, onClick }) => {
  return (
    <li>
      <a href={href} onClick={onClick} className="text-white">
        {title}
      </a>
    </li>
  );
};

export default NavItem;
