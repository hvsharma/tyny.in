import type { NextPage } from "next";
import { BaseSyntheticEvent, useState } from "react";

const Home: NextPage = () => {
  
  const [linkToShorten, setLinkToShorten] = useState<string>("");
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);

  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setDisableSubmit(true);
    console.log(e);
  }

  return <div className="flex flex-col justify-center items-center min-h-screen">
    <div id="form-container" className="w-full">
      <div className="p-4 mb-4 flex flex-col items-center">
        <input
          tabIndex={0}
          className="rounded-sm w-full"
          placeholder="Paste link here..."
          type="text"
          onChange={(e) => (setLinkToShorten(e.target.value))}
          value={linkToShorten}
          required={true}
        />
        <input
          tabIndex={0}
          className="mt-10 btn-primary w-96"
          disabled={disableSubmit || !linkToShorten || (linkToShorten.trim().length === 0)}
          type="button"
          value="Make it Short!"
          onClick={onSubmit} />
      </div>
    </div>
  </div>
};

export default Home;
