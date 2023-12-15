
export default async function CreateCourse() {

  return(
    <div className="font-main flex flex-col text-center">
        <h1 className="mt-5 text-2xl">Create Course</h1>
        <form  className="max-w-md mx-auto">
        <div className=" relative mb-6 mx-12" data-te-input-wrapper-init>
                  <div className="w-56 relative group mt-2">
                      <input type="text" id="name" required className=" h-6 px-4 py-2 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"/>
                      <label for="text" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main ">Name</label>
                  </div>
                </div>

  <div className="mb-6">
    <label for="catagories" class="block mb-2 text-sm font-medium">Select an option</label>
<select id="catagories" class="bg-gradient-to-r from-main to-sub border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 ">
  <option selected>Choose a Catagories</option>
  <option value="Mathematics">Mathematics</option>
  <option value="Programming">Programming</option>
  <option value="Business">Business</option>
  <option value="Marketing">Marketing</option>
</select>
  </div>

  <div className="relative mb-6 mx-12" data-te-input-wrapper-init>
    <div className="w-56 relative group mt-20">
      <textarea
        id="description"
        name="description"
        required
        className="h-32 px-4  text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"
      ></textarea>
      <label
        htmlFor="description"
        className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main "
      >
        Description
      </label>
    </div>
  </div>

  <div className="mb-6">
    
<label class="block mb-2 text-sm font-medium" for="file_input">Upload file</label>
<input class=" w-full text-sm  border bg-gradient-to-r  border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_input" type="file"/>

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
