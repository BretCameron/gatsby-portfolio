import React from "react"
import BlogCard from "./BlogCard"
import articles from "../data/articles"

// TO DO: optimise images, add support for smaller height screens
// limit zoom in ??? or prevent "0" card option, because that bugs
// bug prevented - now, maybe when zoom changes the "resizing" function should fire?

class BlogSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: Object.values(articles),
      leftmostCard: 0,
      rightmostCard: 1,
      sliderInterval: 3,
      slide: 0,
      numberOfCards: Object.values(articles).length,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.addBlogs = this.addBlogs.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleClass = this.handleClass.bind(this);
    this.handleTabIndex = this.handleTabIndex.bind(this);
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
    let spaceAvailable = Math.floor(window.innerWidth / 360);
    if (spaceAvailable === 0) { spaceAvailable += 1 };
    const currentCardsVisible = rightmostCard - leftmostCard;
    const newLeftmostCard = Math.round(leftmostCard / spaceAvailable) * spaceAvailable;
    this.setState({
      leftmostCard: newLeftmostCard,
      rightmostCard: newLeftmostCard + spaceAvailable,
      sliderInterval: spaceAvailable,
      slide: newLeftmostCard / spaceAvailable,
    });
  }

  handleClass(index) {
    const { articles, leftmostCard, rightmostCard } = this.state;
    if (index >= leftmostCard && index < rightmostCard) {
      return "blog-card"
    } else {
      return "blog-card-inactive"
    }
  }

  handleTabIndex(index) {
    const { articles, leftmostCard, rightmostCard } = this.state;
    if (index >= leftmostCard && index < rightmostCard) {
      return index + 1;
    } else {
      return -1;
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
            class={this.handleClass(index)}
            tabIndex={this.handleTabIndex(index)}
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
    let numberOfActions = Math.ceil((numberOfCards - rightmostCard + leftmostCard) / sliderInterval) + 1;
    if (numberOfActions >= 1) {
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
              margin: `10px 0 50px 0`,
              cursor: `pointer`,
              border: `none`,
              background: `none`,
              color: `#DDD`,
              opacity: `${index === slide ? 1 : 0.2}`,
            }}>
            {el}
          </button>
        )
      });
    };

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

          <button
            type="button"
            style={{
              background: `none`,
              color: `${this.state.slide === 0 ? 'grey' : `white`}`,
              border: `none`,
              cursor: `pointer`,
              margin: `0 20px`
            }}
            onClick={this.handlePrevious}>{"<"}</button>
          {this.createCircles()}
          <button
            type="button"
            style={{
              background: `none`,
              color: `${this.state.slide === Math.floor(this.state.numberOfCards / this.state.sliderInterval) ? 'grey' : `white`}`,
              border: `none`,
              cursor: `pointer`,
              margin: `0 20px`
            }}
            onClick={this.handleNext}>{">"}</button>
        </div>
      </>
    )
  }
}

export default BlogSlider