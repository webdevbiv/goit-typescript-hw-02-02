import { PulseLoader } from "react-spinners";
import s from "./Loader.module.scss";

interface Props {
  loading: boolean;
}

const Loader: React.FC<Props> = ({ loading }) => {
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
