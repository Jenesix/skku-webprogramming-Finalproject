
export default async function CreateCourse() {

  return(
    <div className="font-main flex flex-col text-center">
        <h1>Create Course</h1>
        <form  className="max-w-md mx-auto">
        <div className=" relative mb-6" data-te-input-wrapper-init>
                  <div className="w-56 relative group mt-2">
                      <input type="text" id="name" required className=" h-6 px-4 py-2 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"/>
                      <label for="text" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main ">Email address</label>
                  </div>
                </div>

  <div className="mb-6">
    <label htmlFor="category" className="block text-sm font-medium text-gray-600">
      Category
    </label>
    <select
      id="category"
      name="category"
      required
      className="mt-1 p-2 w-full border rounded-md"
    >
      {/* Add your categories dynamically or hardcode options */}
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
    </select>
  </div>

  <div className="mb-6">
    <label htmlFor="description" className="block text-sm font-medium text-gray-600">
      Description
    </label>
    <textarea
      id="description"
      name="description"
      required
      className="mt-1 p-2 w-full border rounded-md"
    ></textarea>
  </div>

  <div className="mb-6">
    <label htmlFor="image" className="block text-sm font-medium text-gray-600">
      Upload Image
    </label>
    <input
      type="file"
      id="image"
      name="image"
      accept="image/*"
      required
      className="mt-1 p-2 w-full border rounded-md"
    />
  </div>

  <div className="flex flex-col items-center justify-center mt-4">
    <button
      type="submit"
      className="transition-all duration-300 transform hover:scale-105 rounded-3xl border-2 border-main text-main hover:text-white hover:bg-gradient-to-r from-main to-sub hover:border-main px-8 py-1.5"
    >
      Create Course
    </button>
      </div>
</form>

    </div>
  ) 
}
