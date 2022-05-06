const Loading = () => {
  return (
    <div className="flex justify-center align-middle">
      <div className="animate-ping h-3 w-3 bg-blue-600 rounded-full"></div>
      <div className="animate-ping h-3 w-3 bg-blue-600 rounded-full mx-4"></div>
      <div className="animate-ping h-3 w-3 bg-blue-600 rounded-full"></div>
    </div>
  )
}

export default Loading;
