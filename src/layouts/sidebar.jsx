const Sidebar = () => {
  return (
    <div className="flex h-full flex-col justify-between text-white/80">
      <div className="space-y-10">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div>My Accounts</div>
      </div>
      <div>Contact Us</div>
    </div>
  );
};

export default Sidebar;
