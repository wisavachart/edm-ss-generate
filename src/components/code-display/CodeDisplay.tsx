const CodeDisplay = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex gap-16">
        <h1 className="font-semibold text-ct_3 text-[14px] ">
          EDM ID :<span className="text-ct_4"> 123456</span>
        </h1>
        <h1 className="font-semibold text-ct_3 text-[14px] ">
          Link : <span className="text-ct_4"> 456</span>{" "}
        </h1>
      </div>
      <div className="rounded-md bg-cb_4 h-[800px]"></div>
    </div>
  );
};

export default CodeDisplay;
