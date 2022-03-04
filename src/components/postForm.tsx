import { useFormik } from "formik";
import { CSSProperties } from "react";
import { Post, CreatePost } from "../data";
import * as Yup from "yup";
import InputField from "./inputField";

type PostSchema = Record<keyof CreatePost, Yup.AnySchema>;

const PostSchema = Yup.object().shape({
  title: Yup.string().min(4).max(25).required(),
  content: Yup.string().max(100).required(),
  author: Yup.string().required(),
});

interface Props {
  defaultPost?: Post;
  onSubmit: (post: CreatePost) => void;
}

const emptyPost: CreatePost = {
  title: "",
  content: "",
  author: "",
};

function PostForm(props: Props) {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik<CreatePost | Post>({
      initialValues: props.defaultPost || emptyPost,
      validationSchema: PostSchema,
      onSubmit: (post, { resetForm }) => {
        props.onSubmit(post);
        resetForm();
      },
    });

  return (
    <form style={rootStyle} onSubmit={handleSubmit}>
      <InputField
        label="Title"
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.title && errors.title}
      />

      <InputField
        label="Content"
        id="content"
        name="content"
        type="text"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.content && errors.content}
      />

      <InputField
        label="Author"
        id="author"
        name="author"
        type="text"
        value={values.author}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.author && errors.author}
      />
      <button
        style={{ marginTop: "1rem", borderRadius: ".2rem" }}
        type="submit"
      >
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
