type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className = "" }: MainLayoutProps) => {
  return (
    <div
      className={`w-full h-full inline-block bg-light dark:bg-dark px-8 py-24 xl:py-20 lg:py-16 md:py-12 sm:py-10 sm:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
