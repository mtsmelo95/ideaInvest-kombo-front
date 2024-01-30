export default function MenuLink({
    href,
    children,
  }: {
    href?: string;
    children: React.ReactNode;
  }) {
    return (
      <a
        href={href}
        className="text-base font-bold leading-5 text-primary whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-400"
      >
        {children}
      </a>
    );
  }