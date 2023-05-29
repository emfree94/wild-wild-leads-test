import React from 'react'
import Drawer from 'react-modern-drawer'
import {Field, Form, Formik} from 'formik'
import * as Yup from "yup";
import CloseButton from './CloseButton'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CloseIcon} from '../../styles/icons/icons'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schemaValidationForm = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too short name!")
    .max(20, "Too long name!")
    .required("Введите данные"),
  email: Yup.string().email("Invalid email").required("Введите данные"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Введите данные"),
});

const inputSchema = [
  {
    id: 'firstName',
    type: 'text',
    placeholder: 'Имя'
  },
  {
    id: 'phone',
    type: 'number',
    placeholder: 'Телефон'
  },  {
    id: 'email',
    type: 'email',
    placeholder: 'Email'
  },
]


const ConsultationDrawer = ({isOpen, toggleDrawer}) => {

  const handleSubmit = (isValid, dirty) => {

    if(!isValid || !dirty) {
      toast.error('Проверьте введненные данные', {
        icon: <CloseIcon />
      })
    }
  }

  const RenderInput = ({id, errors, touched, type, placeholder, values}) => {
    const valueLength = !values[id].length

    return (
      <div className='consultation_drawer--content' key={id}>
        <div className="consultation_drawer--content__block">
          <div className="consultation_drawer--content__block--input-wrapper">
            <Field
              type={type}
              name={id}
              id={id}
            />
          </div>
        </div>

        <div className="consultation_drawer--content__placeholder">
          {valueLength && placeholder}
          {valueLength  && (
            <div className="consultation_drawer--content__placeholder--required">*</div>
          )}
        </div>
        {errors[id] && touched[id] ? (
          <div className='consultation_drawer--content__error'>{errors[id]}</div>
        ): null}
      </div>
    )
  }

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction='right'
      lockBackgroundScroll='true'
      className='consultation_drawer'
    >
     <div className="consultation_drawer--menu">
       <h5 className="consultation_drawer--menu__title">
         Закажите бесплатную <br/>  консультацию по сайту
       </h5>

       <Formik
         initialValues={{
           firstName: "",
           email: "",
           phone: "",
         }}
         validationSchema={schemaValidationForm}
         onSubmit={(values, actions) => {

         }}
        >

         {({
             errors,
             touched,
             values,
             isValid,
             dirty
           }) => (
           <Form>
             {inputSchema.map(({id, type, placeholder}) => (
               <RenderInput
                 key={id}
                 errors={errors}
                 id={id}
                 type={type}
                 placeholder={placeholder}
                 touched={touched}
                 values={values}
               />
             ))}
             <button
               className="buttons__consultation second"
               type='submit'
               onClick={() => handleSubmit(isValid, dirty)}
             >
               <span className='buttons__consultation--befor hover'></span>
               <div className="buttons__consultation--name">Заказать</div>
             </button>
           </Form>
         )}

       </Formik>
      </div>
      <CloseButton toggleDrawer={toggleDrawer} />
    </Drawer>
  )
}

export default ConsultationDrawer
