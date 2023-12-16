import { FunctionComponent, useEffect, useState } from 'react'
import { Container, TextField, makeStyles } from '@material-ui/core'
import MDEditor from "@uiw/react-md-editor";
import { GetBlog, addBlog, editBlog } from '../../api/blog';
import { Formik, FormikValues, FormikHelpers } from 'formik';
import { BlogDetails } from '../../api/models/Blog';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container:{
    textAlign: "center",
    padding: "1rem 5rem 5rem 5rem",
    minHeight: "70vh"
  },
  imageContainer:{
    maxHeight: "22rem"
  },
  articleText:{
    textAlign: "left",
    fontSize: "1.2rem"
  },
  subscribeContainerForm:{
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem",
    gap: 15,
    "& button":{
      padding: ".5rem",
      backgroundColor: "#119da4ff",
      color: "white",
      borderRadius: ".2rem"
    },
    "& input":{
      borderRadius: ".2rem",
      backgroundColor: "white"
    }
  },
}))


interface AdminBlogEditPageProps {}

interface BlogEdit {
  title: string;
  summary: string;
  summaryImageLink: string;
  blogText: string;
}

const AdminBlogEditPage: FunctionComponent<AdminBlogEditPageProps> = () => {
  
    const styles = useStyles();
    const params = useParams();
    const blogId = params.blogId;

    const [blog, setBlog] = useState<BlogDetails>();

    
    async function initBlogs(){
      const blogsResponse = await GetBlog(Number.parseInt(blogId || "")) as BlogDetails;
      setBlog(blogsResponse); 
    }


    function validate(values : FormikValues){
        const errors = {} as BlogEdit;
        const imageRegex = /\.(jpeg|jpg|gif|png)$/i;

        if (!values.title) {
            errors.title = 'Required';
        } else if (values.title.length > 254) {
            errors.title = 'Title is too long (maximum 254 characters)';
        }
        if (!values.summary) {
            errors.summary = 'Required';
        } else if (values.summary.length > 200) {
            errors.summary = 'Summary is too long (maximum 500 characters)';
        }
        if (!values.summaryImageLink) {
            errors.summaryImageLink = 'Required';
        } else if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+[\w-]+(\/[\w- ;,./?%&=]*)?$/i.test(values.summaryImageLink)) {
            errors.summaryImageLink = 'Invalid URL';
        } 
        else if (!imageRegex.test(values.summaryImageLink)) {
          errors.summaryImageLink = 'Invalid image URL';
        }
        else if (values.summaryImageLink.length > 600) {
            errors.summaryImageLink = 'Image link is too long (maximum 600 characters)';
        }
        if (!values.blogText) {
            errors.blogText = 'Required';
        }

        return errors;
    }

    const onSubmit = async (values: BlogEdit, { setSubmitting, resetForm  }: FormikHelpers<BlogEdit>) => {
      await editBlog(blogId, values.title, values.summary, values.summaryImageLink, values.blogText);
      setSubmitting(false);
    };

     useEffect(() => {
      initBlogs();
    }, []);

    if(!blog)
      return <p>Loading</p>
    
    return (
    <>
      <Container className={styles.container}>
          <h1>Edit Blog</h1>
          <Formik 
            initialValues={{ title: blog.name, summary: blog.summary, summaryImageLink: blog.image, blogText: blog.content }}
            validate={validate} 
            onSubmit={onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
              <form className={styles.subscribeContainerForm} onSubmit={handleSubmit}>                    
                  <TextField
                    name="title"
                    label='Title'
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    helperText={errors.title}
                    error={touched.title && errors.title != undefined}
                    inputProps={{ maxLength: 254 }}
                  />
        
                  <TextField
                      inputProps={{ maxLength: 254 }}
                      type='text'
                      multiline={true}
                      minRows={3}
                      label='Summary Text'
                      name="summary"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.summary}
                      error={touched.summary && errors.summary != undefined}
                      helperText={touched.summary && errors.summary}
                    />
                  
                    <TextField
                        name="summaryImageLink"
                        label='Summary Image Link'
                        variant="filled"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.summaryImageLink}
                        helperText={touched.summaryImageLink && errors.summaryImageLink}
                        error={touched.summaryImageLink && errors.summaryImageLink != undefined}
                        inputProps={{ maxLength: 600 }}
                    />
              
                  <MDEditor 
                    textareaProps={{name: 'blogText'}}
                    height={700} 
                    value={values.blogText} 
                    onChange={(value, event) => handleChange(event)} 
                    style={{border: touched.blogText && errors.blogText ? "1px solid red" : "none"}}
                  />
                  
                  <button type='submit'>Submit</button>
              </form>
              )}
          </Formik>

      </Container>
    </>
  )
}

export default AdminBlogEditPage
