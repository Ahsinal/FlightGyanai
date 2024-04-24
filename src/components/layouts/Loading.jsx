import { FadeLoader, GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-overlay flex-center-center">
      <div className="">
        <FadeLoader color="#269215" size={50} />
      </div>
    </div>
  );
};

export default Loading;
