const RenderedUser = (props) => {
  if (!props.username || !props.age) {
    return;
  }

  return (
    <div>
      <div className="border placeholder">
        {props.username} ({props.age} years old)
      </div>
    </div>
  );
};

export default RenderedUser;
