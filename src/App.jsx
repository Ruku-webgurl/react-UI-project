import React from 'react'
import Page1 from './Pages/Page1'
import Page2 from './About/Page2'


const App = () => {

  const users = [
    {
      img: "https://i.pinimg.com/736x/9d/97/2a/9d972a3fcdeb46139892066ff872c2a6.jpg",
      intro: "“Love is not necessary; power is the only true necessity.” 13. “Love gives birth to sacrifice, which brings hatred and lets you know pain.",
      tag: "Obito x Rin"

    },
    {
      img: "https://i.pinimg.com/736x/0e/f9/fc/0ef9fcb740198f9a92e17f762c325419.jpg",
      intro: "There are no better people to trust than your friends. You can entrust anything to them and be sure that they’ll do it for you. Trust and loyalty are the basic foundations of friendship.",
      tag: "Obito x Rin"

    },
    {
      img: "https://i.pinimg.com/736x/e8/6e/03/e86e036f14f71704f0cef9d0cbd9b715.jpg",
      intro: "“Love is not necessary; power is the only true necessity.” 13. “Love gives birth to sacrifice, which brings hatred and lets you know pain.",
      tag: "Obito x Rin"

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