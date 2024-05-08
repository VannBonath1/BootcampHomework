import plusIcon from "../assets/plus.png";
import edit from "../assets/edit.png";
interface propsFloatButton {
  isToggle: () => void;
  isSelect: boolean;
}
const FloatButton: React.FC<propsFloatButton> = ({ isToggle, isSelect }) => {
  return (
    <>
      {isSelect === false && (
        <div onClick={isToggle}>
          <a href="#">
            <img className="plus-icon" src={plusIcon} alt="" />
          </a>
        </div>
      )}

      {isSelect === true && (
        <div onClick={isToggle}>
          <a href="#">
            <img className="plus-icon" src={edit} alt="" />
          </a>
        </div>
      )}
    </>
  );
};
export default FloatButton;
