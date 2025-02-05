import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import All from "./Components/Pages/All"
import Fullstack from "./Components/Pages/Fullstack"
import Datascience from "./Components/Pages/Datascience"
import Cybersecurity from "./Components/Pages/Cybersecurity"
import Career from "./Components/Pages/Career"
import Navbar from "./Components/Navbar"
import Header from './Components/Header'
import "./App.css"

const App = () => {
  const cards=[
    {
      id: 1,
      image: 'https://lytechx.com/wp-content/uploads/2023/11/Web-Development-Company-in-India-2-1200x801.jpg',
      heading: 'Best Full-Stack Development Project Ideas in 2024',
      category: 'Fullstack',
      link:"https://www.guvi.in/blog/full-stack-development-project-ideas/"
    },
    {
      id: 2,
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp',
      heading: 'How Long Would It Take to Be a Full Stack Developer?',
      category: 'Fullstack',
      link:'https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/'
    },
    {
      id: 3,
      image: 'https://www.coddletech.com/sites/default/files/styles/slideshow/public/2150062008_1.jpg?itok=lgq9rDX0',
      heading: 'Top 10 Full-Stack Developer Frameworks in 2024',
      category: 'Fullstack',
      link:'https://www.guvi.in/blog/full-stack-developer-frameworks/'
    },
    {
      id: 4,
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
      heading: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
      category: 'datasci',
      link:'https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/'

    },
  
    {
      id: 5,
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp',
      heading: '12 Real-World Data Science Examples: Power Of Data Science',
      category: 'datasci',
      link:"https://www.guvi.in/blog/real-world-data-science-examples/"
    },
    {
      id: 6,
      image: 'https://blog.mitsde.com/wp-content/uploads/2024/02/image-7.png',
      heading: 'How to become a Data Scientist after Mechanical Engineering?',
      category: 'datasci',
      link:"https://www.guvi.in/blog/how-to-become-data-scientist-after-mechanical-engineering/"
    },
    {
      id: 7,
      image: 'https://media.licdn.com/dms/image/D4D12AQFiLQQcbiAKXQ/article-cover_image-shrink_600_2000/0/1691474199565?e=2147483647&v=beta&t=8mCxxgM0Sh-YejqgPJuAhTs9c4CHLFmNNEF5TXuka8I',
      heading: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
      category: 'cybersec',
      link:'https://www.guvi.in/blog/coding-for-cybersecurity/'
    },
    {
      id: 8,
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
      heading: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
      category: 'cybersec',
      link:'https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/'
    },
    {
      id: 9,
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
      heading: 'What Is Hacking? Types of Hacking & More',
      category: 'cybersec',
      link:'https://www.guvi.in/blog/what-is-hacking/'
    },
    {
      id: 10,
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career-768x432.webp',
      heading: '8 Mistakes To Avoid When You Begin a Data Science Career',
      category: 'career',
      link:"https://www.guvi.in/blog/mistakes-to-avoid-in-a-data-science-career/"
    },
    {
      id: 11,
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Featured-Image-Data-Engineering-Career-Roadmap_-Things-You-Should-Know-About.webp',
      heading: 'Data Engineering Career Roadmap: 7 Things You Should Know About!',
      category: 'career',
      link:"https://www.guvi.in/blog/data-engineering-career-roadmap/"
    },
    {
      id: 12,
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
      heading: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
      category: 'career',
      link:"https://www.guvi.in/blog/top-it-jobs-for-commerce-students/"
    }
  ]
  const[filtercards,setfiltercards]=useState(cards);

  const cardsfunc=(category)=>{
    if(category=="all")
      setfiltercards(cards)
    else{
      const filter=cards.filter(card => card.category === category);
      setfiltercards(filter);
    }
  }

  return (<>
   
    <div>
 
   <BrowserRouter>
   <Header />
   <Navbar cardsfunc={cardsfunc} />
   <Routes>
   <Route  path="/" element={<All cards={filtercards}/>}/>
<Route path="/fullstack" element={<Fullstack cards={filtercards} />} />
<Route path="/datascience" element={<Datascience cards={filtercards} />}/>
<Route path="/cybersecurity" element={<Cybersecurity cards={filtercards} />}/>
<Route path="/datascience" element={<Datascience cards={filtercards} />}/>
<Route path="/career" element={<Career cards={filtercards} />}/>
<Route path="*" element={<h1 className='text-center '>
  404 Error <br /> Page not found
</h1>
}/>
   </Routes>
   
   
   </BrowserRouter></div>
   </>)
}

export default App