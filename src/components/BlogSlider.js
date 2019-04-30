import React from "react"
import BlogCard from "./BlogCard"
import articles from "../data/articles"

// TO DO: optimise images, add support for smaller height screens
// limit zoom in ??? or prevent "0" card option, because that bugs

class BlogSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: Object.values(articles),
      leftmostCard: 0,
      rightmostCard: 0,
      sliderInterval: 3,
      slide: 0,
      numberOfCards: Object.values(articles).length,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.addBlogs = this.addBlogs.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleOpacity = this.handleOpacity.bind(this);
    this.createCircles = this.createCircles.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const { articles, leftmostCard, rightmostCard } = this.state;
    const spaceAvailable = Math.floor(window.innerWidth / 360);
    const currentCardsVisible = rightmostCard - leftmostCard;
    const newLeftmostCard = Math.round(leftmostCard / spaceAvailable) * spaceAvailable;
    this.setState({
      leftmostCard: newLeftmostCard,
      rightmostCard: newLeftmostCard + spaceAvailable,
      sliderInterval: spaceAvailable,
      slide: newLeftmostCard / spaceAvailable,
    });
  }

  handleOpacity(index) {
    const { articles, leftmostCard, rightmostCard } = this.state;
    if (index >= leftmostCard && index < rightmostCard) {
      return 1
    } else {
      return 0.2
    }
  }

  addBlogs() {
    const { articles, leftmostCard, rightmostCard } = this.state;
    if (articles) {
      return articles.map((el, index) => {
        return (
          <BlogCard
            key={el.title}
            title={el.title}
            subtitle={el.subtitle}
            image={el.image}
            query={el.graphqlQuery}
            link={el.link}
            date={el.date}
            readTime={el.readTime}
            opacity={this.handleOpacity(index)}
          // how does an item know it is outside of the slider-container? if it is, reduce the opacity
          // we need to set a state for the index of the leftmost card
          // and maybe also the index of the right-most card (within visible range)
          />
        )
      })
    }
  }

  selectSlide(e) {
    // work out how to handle beginning and end
    // make sure the correct slide
    const index = Number(e.target.id);
    const { articles, leftmostCard, rightmostCard, numberOfCards, sliderInterval, slide } = this.state;
    if (slide !== index) {
      const newState = this.state;
      const cardsInFocus = rightmostCard - leftmostCard;
      newState.slide = index;
      newState.leftmostCard += sliderInterval * (index - slide);
      newState.rightmostCard += sliderInterval * (index - slide);
      this.setState(newState);
    }
  }


  handleNext() {
    const { articles, leftmostCard, rightmostCard, numberOfCards, sliderInterval, slide } = this.state;
    if (rightmostCard < numberOfCards) {
      const newState = this.state;
      newState.leftmostCard += sliderInterval;
      newState.rightmostCard += sliderInterval;
      newState.slide += 1;
      this.setState(newState);
    }
  }

  handlePrevious() {
    const { articles, leftmostCard, rightmostCard, numberOfCards, sliderInterval, slide } = this.state;
    if (leftmostCard > 0) {
      const newState = this.state;
      newState.leftmostCard -= sliderInterval;
      newState.rightmostCard -= sliderInterval;
      newState.slide -= 1;
      this.setState(newState);
    }
  }

  createCircles() {
    const { articles, leftmostCard, rightmostCard, numberOfCards, sliderInterval, slide } = this.state;
    const numberOfActions = Math.ceil((numberOfCards - rightmostCard + leftmostCard) / sliderInterval) + 1;
    const circleArray = new Array(numberOfActions).fill("•");
    return circleArray.map((el, index) => {
      return (
        <button
          type="button"
          key={index}
          id={index}
          onClick={this.selectSlide}
          style={{
            display: `inline-block`,
            padding: `0 0.5rem`,
            margin: 0,
            cursor: `pointer`,
            border: `none`,
            background: `none`,
            color: `#FFF`,
            opacity: `${index === slide ? 1 : 0.5}`,
          }}>
          {el}
        </button>
      )
    });

  }

  render() {
    return (
      <>
        <div style={{
          display: `flex`,
          height: `400px`,
          transition: `200ms ease-in-out`,
          justifyContent: `left`,
          transform: `translateX(-${this.state.leftmostCard * 302}px)`,
        }}>
          {this.addBlogs()}
        </div>
        <div style={{
          textAlign: `center`,
          userSelect: `none`,
        }}>
          {this.createCircles()}
        </div>
        {/* <button type="button" onClick={this.handlePrevious}>Previous</button> */}
        {/* <button type="button" onClick={this.handleNext}>Next</button> */}
      </>
    )
  }
}

export default BlogSlider