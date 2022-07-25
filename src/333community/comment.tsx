import { FormikErrors, useFormik } from "formik";
import "./comment.scss";
interface CommentFormProps {
  id: number;
  onComment: () => void;
}

interface NewComment {
  communityId: number;
  comment: string;
}
export const Comment = ({ id, onComment }: CommentFormProps) => {
  const formik = useFormik<NewComment>({
    initialValues: {
      comment: "",
      communityId: id,
    },
    onSubmit: async (values, { resetForm }) => {
      const result = await fetch("https://localhost:7072/Community/Comment", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });

      const response = await result.json();
      resetForm();
      onComment();
    },

    validate: (values) => {
      console.log(values);
      const errors = {} as FormikErrors<NewComment>;
      if (values.comment.length > 500) {
        errors.comment = "Question Should be 500 Characters or Less";
      }
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="outerCommentInput">
          <div>
            <label htmlFor="comment">comments</label>
          </div>
          <textarea
            className="commentInput"
            id="comment"
            name="comment"
            rows={3}
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
        </div>
        <button className="onSubmit" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
};
