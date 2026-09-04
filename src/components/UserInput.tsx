import { RiAddCircleFill } from "@remixicon/react";
import "./UserInput.css";

type UserInputProps = {
  handleAdd: (userInput: string) => void;
};

export default function UserInput({ handleAdd }: UserInputProps) {
  function handleSubmit(formData: FormData) {
    const userInput = formData.get("userInput") as string;
    handleAdd(userInput);
  }

  return (
    <div className="user-input-conditioner">
      <form action={handleSubmit}>
        <input
          className="user-input"
          name="userInput"
          placeholder="What is your plan today?  "
          minLength={3}
          maxLength={50}
        />
        <button className="submit-button" type="submit">
          <RiAddCircleFill size={30} />
        </button>
      </form>
    </div>
  );
}
