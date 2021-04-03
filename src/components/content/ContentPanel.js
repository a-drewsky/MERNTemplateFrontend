import React, { useEffect, useState } from 'react'
import { getAllContent } from '../../api/contentApi';
import ContentForm from './ContentForm'
import ContentList from './ContentList'
import { Form } from 'react-bootstrap'

const ContentPanel = () => {

   const [content, setContent] = useState([]);
   const [errorMessage, setErrorMessage] = useState("");

   const getContent = async () => {
      try{
         const contentRes = await getAllContent();
         setContent(contentRes.data);
      } catch (err) {
         console.log(err);
         setErrorMessage(err.response.data.message);
      }
   }

   useEffect(() => {
      getContent();
   }, [])

   return (
      <>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Form.Text className='text-danger'>{errorMessage}</Form.Text>
         </Form.Group>
         <ContentForm getContent={getContent} />
         <ContentList contents={content} />
      </>
   )
}

export default ContentPanel
