import React, { useState } from 'react'
import { createContent } from '../../api/contentApi'
import { Form, Button } from 'react-bootstrap'

const ContentForm = ({ getContent }) => {

   const [contentName, setContentName] = useState("");

   const saveContent = async (e) => {
      e.preventDefault();

      try{
         const contentData = {
            name: contentName
         }
         await createContent(contentData);
         getContent();

         setContentName('');

      } catch (err) {
         console.log(err);
      }
   }

   return (
      <Form className='mt-5' onSubmit={saveContent}>
         <Form.Group className='d-flex justify-content-center'>
            <Form.Control className='w-25 m-1' type="text" placeholder="Content Name" value={contentName} onChange={(e) => setContentName(e.target.value)}/>
            <Button className='m-1' type="submit">Save new content</Button>
         </Form.Group>
      </Form>
   )
}

export default ContentForm
