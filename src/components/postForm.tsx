import { useFormik } from "formik";
import { CSSProperties } from "react";
import { Post } from "../data";
import * as Yup from "yup";

type PostSchema = Record<keyof Post, Yup.AnySchema>;

const PostSchema = Yup.object().shape({
  title: Yup.string().min(4).max(25).required(),
  content: Yup.string().max(100).required(),
  author: Yup.string().required(),
});

interface Props {
  onSubmit: (post: Post) => void;
}

function PostForm(props: Props) {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik<Post>({
      initialValues: { title: "", content: "", author: "" },
      validationSchema: PostSchema,
      onSubmit: props.onSubmit,
    });

  return (
    <form style={rootStyle} onSubmit={handleSubmit}>
      <label style={labelStyle} htmlFor="title">
        Title
      </label>
      <input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {errors.title && touched.title && (
        <p style={errorMessageStyle}>{errors.title}</p>
      )}

      <label style={labelStyle} htmlFor="content">
        Content
      </label>
      <input
        id="content"
        name="content"
        type="text"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.content && touched.content && (
        <p style={errorMessageStyle}>{errors.content}</p>
      )}
      <label style={labelStyle} htmlFor="author">
        Author
      </label>
      <input
        id="author"
        name="author"
        type="text"
        value={values.author}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.author && touched.author && (
        <p style={errorMessageStyle}>{errors.author}</p>
      )}
      <button style={{ marginTop: "1rem" }} type="submit">
        Spara
      </button>
    </form>
  );
}
const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  marginBottom: "2rem",
};

const labelStyle: CSSProperties = {
  marginTop: ".5rem",
};

const errorMessageStyle: CSSProperties = {
  color: "red",
  margin: 0,
};

export default PostForm;
