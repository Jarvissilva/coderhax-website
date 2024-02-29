import { useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Loader from "components/loader";
import fetchApi from "helpers/fetchApi";

const Search = () => {
  const [formData, setFormData] = useState({
    searchQuery: "",
    category: "javascript",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchSnippets = async (e) => {
    if (e.target.value.length >= 1) {
      if (!/^([\w\p{P}\p{S}]+\s)*[\w\p{P}\p{S}]+$/i.test(e.target.value)) {
        setIsLoading(false);
        setSearchResults(null);
        return setMessage("Search query contain special characters");
      }
      setIsLoading(true);
      const res = await fetchApi(
        `/snippets/search?value=${e.target.value}&category=${formData.category}`
      );
      if (!res.success) setMessage(res.message);
      setSearchResults(res.success ? res.snippets : null);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full relative space-y-2">
        <form className="flex items-center gap-3 p-[clamp(.75rem,2vw,1rem)] bg-white border border-gray-200 rounded-md">
          <div>
            <IoSearchOutline size={30} />
          </div>
          <div className="grow">
            <input
              type="text"
              name="searchQuery"
              value={formData.searchQuery}
              placeholder="Search for codes"
              onKeyUp={searchSnippets}
              onChange={(e) =>
                setFormData({ ...formData, searchQuery: e.target.value })
              }
              className="w-full h-full outline-none"
              autoFocus
              required
            />
          </div>
          <div>
            <select
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="bg-white text-sm text-center p-2 border border-gray-200 rounded-md outline-none appearance-none focus:ring focus:ring-gray-200 cursor-pointer"
            >
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c">C</option>
            </select>
          </div>
        </form>
        {formData.searchQuery && (
          <div className="w-full max-h-[60vh] flex flex-col gap-3 p-[clamp(.75rem,2vw,1rem)] bg-white border border-gray-200 rounded-md absolute overflow-auto">
            {isLoading ? (
              <Loader />
            ) : searchResults ? (
              searchResults.map((searchResult) => (
                <Link
                  href={`/snippets/${searchResult.category}/${searchResult.slug}`}
                  className="flex justify-between items-center bg-slate-100 text-gray-600 p-[clamp(1rem,1vw,1.2rem)] rounded-md hover:text-white hover:bg-blue-500"
                  key={searchResult._id}
                >
                  <div>
                    <p className="text-md font-bold">{searchResult.title}</p>
                  </div>
                  <div>
                    <MdOutlineArrowForwardIos size={20} />
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center">{message}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
