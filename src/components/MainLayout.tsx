
type MainLayoutProps = {
  children:React.ReactNode;
  className:string;
}


const MainLayout = ({ children, className = "" }:MainLayoutProps) => {
  return (
    <div
      className={`w-full h-full inline-block  bg-light p-32  ${className}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
