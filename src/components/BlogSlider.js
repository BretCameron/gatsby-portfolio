import React from "react"
import BlogCard from "./BlogCard"

class BlogSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { techHover: '' }
  }

  render() {
    return (
      <>
        <div style={{
          display: `flex`,
        }}>
          <BlogCard
            title="11 JavaScript Tricks You Won’t Find in Most Tutorials"
            subtitle="Useful tips for writing more concise and performant JavaScript"
            image="https://cdn-images-1.medium.com/max/2560/1*7cRAqUE493wd988uxuTIUg.png"
            link="https://medium.com/@bretcameron/12-javascript-tricks-you-wont-find-in-most-tutorials-a9c9331f169d?source=friends_link&sk=c7d22327023fd9056d3436e266fe4878"
            date="26/03/2019"
            readTime="9 min read"
          />
          <BlogCard
            title="What JavaScript Developers Can Learn from C++"
            subtitle="Types, memory and how learning a lower-level language can make you a better programmer"
            image="https://cdn-images-1.medium.com/max/2560/1*H-6HwCV0cvDKGfxl3FXk7A.png"
            link="https://medium.com/@bretcameron/what-javascript-developers-can-learn-from-c-3cdb93ab8658?source=friends_link&sk=07767387400fe33c589deb4d65597972"
            date="23/04/2019"
            readTime="9 min read"
          />
          <BlogCard
            title="Building my first headless CMS: what I wish I knew at the start"
            subtitle="The advantages I didn’t realise and the pain points I learnt the hard way"
            image="https://cdn-images-1.medium.com/max/2560/1*mN6b5pd9VDurgeGULsZ5BA.jpeg"
            link="https://medium.com/@bretcameron/building-my-first-headless-cms-what-i-wish-i-knew-at-the-start-1f3ef3a00bb8?source=friends_link&sk=a5b0a17357d381b3b78fc38c2b94957e"
            date="16/04/2019"
            readTime="7 min read"
          />
          <BlogCard
            title="Why I believe Gatsby.js has JavaScript’s best tools for image optimisation — and how to use them"
            subtitle="A beginner’s guide to using Gatsby.js and GraphQL for image optimisation"
            image="https://cdn-images-1.medium.com/max/2560/1*imOlCXHKx-yhN1S3i423SQ.jpeg"
            link="https://medium.freecodecamp.org/why-i-believe-gatsby-js-has-javascripts-best-tools-for-image-optimisation-and-how-to-use-them-939c82d05395?source=friends_link&sk=42113e42e8cd546a71368e8f47b3cbb5"
            date="16/04/2019"
            readTime="9 min read"
          />
          <BlogCard
            title="4 Templating Systems to Write Quicker, Cleaner HTML"
            subtitle="Alternatives to vanilla HTML"
            image="https://cdn-images-1.medium.com/max/2560/1*eSqtdMU3lTdgNFk9W-uaJQ.png"
            link="https://medium.com/@bretcameron/so-you-think-you-know-html-7813c03f8ff6?source=friends_link&sk=afbbf76fc354086fad06bed528836065"
            date="11/04/2019"
            readTime="11 min read"
          />
        </div>
      </>
    )
  }
}

export default BlogSlider