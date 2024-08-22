export default function UploadOption({handleFileChange}:{handleFileChange:(a:any)=>void}) {
  return (
    <div className="flex items-center justify-center w-4/5 md:2/5 lg:w-1/5">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/30 "
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-white flex flex-col items-center">
            <span className="font-bold">Click to upload filter</span> or drag
            and drop
          </p>
          <p className="text-xs text-white ">JSON</p>
        </div>
        <input
          id="dropzone-file"
          onChange={handleFileChange}
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
}
