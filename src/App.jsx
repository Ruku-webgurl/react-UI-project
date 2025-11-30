import React from 'react'
import Page1 from './Pages/Page1'
import Page2 from './About/Page2'


const App = () => {

  const users = [
    {
      img: "https://i.pinimg.com/736x/9d/97/2a/9d972a3fcdeb46139892066ff872c2a6.jpg",
      intro: "Life isn’t permanent or predictable. You never know when you will run out of time. The best thing you can do is, to be honest with those around you and let them know how you really feel. You never know if you have a tomorrow to come.",
      tag: "Obito x Rin"

    },
    {
      img: "https://i.pinimg.com/736x/0e/f9/fc/0ef9fcb740198f9a92e17f762c325419.jpg",
      intro: "There are no better people to trust than your friends. You can entrust anything to them and be sure that they’ll do it for you. Trust and loyalty are the basic foundations of friendship.",
      tag: "Obito x Rin"

    },
    {
      img: "https://i.pinimg.com/736x/e8/6e/03/e86e036f14f71704f0cef9d0cbd9b715.jpg",
      intro: "There were undoubtedly many points in the series where Obito appeared to be the villain. However, we hope this collection of his best quotes was able to open your eyes to how essential he actually was for Naruto and his team to win"

    },
    {
      img: "https://i.pinimg.com/736x/f4/13/7d/f4137db7cc4ace01071573aa2eef87ae.jpg",
      intro: "Love and hate are two sides of the same coin. Once you learn to love something, you learn to hate anything that is a threat to the loved",
      tag: "Obito x Rin"

    },


  ]
  return (
    <div>
      <Page1 users={users} />
      <Page2 />
    </div>
  )
}

export default App