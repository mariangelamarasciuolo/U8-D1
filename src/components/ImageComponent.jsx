import ButtonComponent from "./ButtonComponent";

const ImageComponent = (props) => (
  <div>
    <img src={props.src} alt={props.alt} />
    <ButtonComponent title={props.title} btnText={props.btnText} />
  </div>
);
export default ImageComponent;
