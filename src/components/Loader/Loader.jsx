import { PulseLoader } from "react-spinners";
import s from "./Loader.module.scss";
const Loader = ({ loading }) => {
  return (
    <div className={loading ? s.loader : ""}>
      <PulseLoader
        color="#f804e9"
        loading={loading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
