import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';
import './index.css'
import styled from 'styled-components';
import { Container } from '../../golobalStyle';
import { useTheme } from "../../hook/useTheme"
function Accordian () {
  const {theme}=useTheme()
  const [faqs, setfaqs] = useState([
    {
      question: 'lorem ipsum khdkj okdt msgt ijsdg',
      answer: 'None. We don\'t address hardware issues.',
      open: true
    },
    {
      question: 'lorem ipsum khdkj okdt msgt ijsdg',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'How many questions does it take to make a successful FAQ Page?',
      answer: 'This many.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <AccordianC theme={theme}>
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}

<h4>
        Question not on the list? Contact out help desk for further enquiries
      </h4>
      </div>
      
    </AccordianC>
  );
}

export default Accordian;



// STYLE 
export const AccordianC=styled(Container)`


    color:${({theme})=>theme=="dark" ? "white":"#000"};
    
    ${Container}
   
`
