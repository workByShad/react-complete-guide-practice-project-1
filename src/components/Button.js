const Button = () => {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        // console.log('hello');
      }}
    >
      Submit
    </button>
  );
};

export default Button;
