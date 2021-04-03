import React from 'react'
import { Row } from 'react-bootstrap'

const ContentList = ({ contents }) => {

   const renderContent = () => {
      return contents.map((content, index) => {
         return <li className='list-group-item' key={index}>{content.name}</li>
      })
   }

   return (
      <Row className='d-flex justify-content-center mt-5'>
         <ul className='list-group'>
            {renderContent()}
         </ul>
      </Row>
   )
}

export default ContentList
