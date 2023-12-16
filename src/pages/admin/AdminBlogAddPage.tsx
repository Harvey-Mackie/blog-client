import { FunctionComponent } from 'react'
import { Container, TextField, makeStyles } from '@material-ui/core'
import MDEditor from "@uiw/react-md-editor";
import { addBlog } from '../../api/blog';
import { Formik, FormikValues, FormikHelpers } from 'formik';

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


interface AdminBlogAddPageProps {}

interface BlogAdd {
  title: string;
  summary: string;
  summaryImageLink: string;
  blogText: string;
}

const AdminBlogAddPage: FunctionComponent<AdminBlogAddPageProps> = () => {
  
    const styles = useStyles();

    function validate(values : FormikValues){
        const errors = {} as BlogAdd;
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

    const onSubmit = async (values: BlogAdd, { setSubmitting, resetForm  }: FormikHelpers<BlogAdd>) => {
      await addBlog(values.title, values.summary, values.summaryImageLink, values.blogText);
      setSubmitting(false);
      resetForm();
    };

    return (
    <>
      <Container className={styles.container}>
          <h1>Add Blog</h1>
          <Formik 
            initialValues={{ title: '', summary: '', summaryImageLink: '', blogText: '' }}
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

export default AdminBlogAddPage
