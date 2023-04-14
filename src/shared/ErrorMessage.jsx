const ErrorMessage = ({ touched, message }) => {
  return touched && message ? (
    <div className="errMessage">{message}</div>
  ) : null;
};

export default ErrorMessage;
