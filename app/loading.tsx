

// Define props if needed, for now, we don't have any specific props
interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div
      
      className="flex h-screen items-center justify-center"
    >
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
