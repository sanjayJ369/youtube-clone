interface LeyoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LeyoutProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default Layout;
