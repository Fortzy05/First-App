import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { description, urls } = this.props.images;
    return (
      <div>
        <img ref={this.image} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
