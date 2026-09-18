import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row group`}>
    <div
      className={`${styles.flexCenter} w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-[24px] bg-[#323f5d] shrink-0 group-hover:bg-[#3d4f73] group-hover:shadow-[0_0_15px_rgba(50,63,93,0.5)] transition-all duration-500`}
    >
      <p className="font-bold text-[16px] sm:text-[20px] text-white">
        0{number}
      </p>
    </div>
    <p className="flex-1 ml-[20px] sm:ml-[30px] font-normal text-[15px] sm:text-[18px] text-[#808080] group-hover:text-secondary-white leading-[26px] sm:leading-[32px] transition-colors duration-500">
      {text}
    </p>
  </div>
);

export default StartSteps;
