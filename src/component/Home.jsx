import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pastSlice";

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [serchParams, setSearchParems] = useSearchParams();
  const pasteId = serchParams.get("pasteId");
  const dispatch = useDispatch();

  console.log(pasteId);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now.toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    //after creation and updation
    setTitle('');
    setValue('');
    setSearchParems({});

  }

  return (
    <>
      <div className="flex flex-row gap-7 justify-between">
        <input
          className="pl-4 rounded-2xl w-[63%] bg-black "
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => createPaste}
          className="p-2 rounded-2xl py-2 px-4 hover:bg-sky-700 hover:font-bold hover:border-sky-700 bg-black"
        >
          {
            pasteId ? "Update My Paste" : "Create My Paste"
          }
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-125 p-4 bg-black"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => e.target.value}
          rows={20}
        />
      </div>
    </>
  )
}

export default Home
