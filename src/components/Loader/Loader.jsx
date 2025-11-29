import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.wrap}>
      <ProgressBar
        visible={true}
        height="280"
        width="280"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass={css.bar}
        borderColor="#000000"
        barColor="gray"
      />
    </div>
  );
};
