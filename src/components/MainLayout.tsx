type MainLayoutProps = {
  children: React.ReactNode;
  className: string;
};

const MainLayout = ({ children, className = "" }: MainLayoutProps) => {
  return (
    <div
      className={`w-full h-full inline-block  bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8  ${className}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
