const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <div className="relative h-32 w-32">
          <div
            className="absolute h-full w-full animate-spin rounded-full border-[3px] border-gray-100/10 border-b-primary_main border-r-primary_main"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute h-full w-full animate-spin rounded-full border-[3px] border-gray-100/10 border-t-primary_main"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          />
        </div>
        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-primary_main/10 via-transparent to-primary_main/5 blur-sm" />
      </div>
    </div>
  );
};

export default Loading;
