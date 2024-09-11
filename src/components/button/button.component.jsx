import './button.styles.scss';

const BUTTON_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}
const Button = ({ children, buttonType, ...buttonProps }) => {
  console.log(8, children, buttonType, buttonProps);

  return (
    <button className={`button-container ${BUTTON_CLASSES[buttonType]}`} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;