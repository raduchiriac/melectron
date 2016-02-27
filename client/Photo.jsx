Photo = React.createClass({
  render() {
    return (
      <li>
        <img src={"https://farm"+this.props.photo.farm+".staticflickr.com/"+this.props.photo.server+"/"+this.props.photo.id+"_"+this.props.photo.secret+".jpg"} />
        <p>Title: {this.props.photo.title}</p>
      </li>
    );
  }
});
