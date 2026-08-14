type UserInputProps = {
  handleAdd: (userInput: string) => void;
};

export default function UserInput({ handleAdd }: UserInputProps) {
  function handleSubmit(formData: FormData) {
    const userInput = formData.get("userInput");
    handleAdd(userInput as string);
  }

  return (
    <div className="user-input-conditioner">
      <form action={handleSubmit}>
        <input
          className="user-input"
          name="userInput"
          defaultValue="What is your plan today?  "
        />
        <button className="submit-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
