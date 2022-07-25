interface CommentFormProps {
  id: number;
  onCount: () => void;
}

export const UsefulButton = ({ id, onCount }: CommentFormProps) => {
  async function count() {
    const result = await fetch("https://localhost:7072/Community/Count", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id }),
    });
    const response = await result.json();
    onCount();
  }
  return (
    <img
      onClick={() => count()}
      className="usefulButton"
      src="/images/like.svg"
      alt="like"
      width="24px"
      height="24px"
    />
  );
};
