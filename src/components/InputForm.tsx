const InputForm = () => {
  return (
    <div className="p-5 text-center">
      <input
        className="px-5 py-4 rounded border-2 border-black"
        placeholder="Enter To Do Items here"
      />
      <button className="px-10 py-4 mx-3 bg-sky-500 rounded font-bold hover:bg-sky-400">
        Add
      </button>
    </div>
  );
};

export default InputForm;
