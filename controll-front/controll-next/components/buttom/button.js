import React, { useState } from "react";
import axios from "axios";
function Button({ item }) {
  const [sub, setSub] = useState(false);
  const [music, setMusic] = useState("");
  const handleRequest = async (value) => {
    let res = await axios.get(
      `http://192.168.1.174/commands/${item.category}`,
      {
        headers: { data: value },
      }
    );
    if (res.data.message) {
      alert(res.data.message);
    }
    if (res.data.music) {
      setMusic(res.data.music);
    }
    return res;
  };

  return (
    <>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await handleRequest(item.name);
          if (item.sub) {
            setSub(!sub);
          }
        }}
        className="rounded-lg z-20  bg-blue-300 shadow-2xl flex flex-row items-center overflow-hidden w-40 mt-8"
      >
        <div className="w-16 bg-blue-100 py-3 px-2 ">
          <img src={item.image} alt={item.name} />
        </div>
        <p className=" w-full ">{item.name}</p>
      </button>
      {item.sub && (
        <>
          {sub && <p>{music}</p>}
          <div
            className={` bg-slate-200 h-0 w-8/12 rounded-lg px-3 flex items-center justify-between ${
              sub ? "py-8" : "py-0"
            }  transition-all overflow-hidden`}
          >
            {item.sub.map((i) => {
              return (
                <>
                  <button
                    onClick={async () => await handleRequest(i.name)}
                    className="mx-1 w-9/12 rounded-lg h-10 bg-slate-100 flex justify-center items-center"
                  >
                    <img src={i.image} alt={i.name} />
                  </button>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Button;
