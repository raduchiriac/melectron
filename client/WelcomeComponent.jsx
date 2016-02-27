WelcomeComponent = React.createClass({
  getInitialState() {
    return {
      photos:[]
    };
  },
  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({photos: result.photos.photo});
    }.bind(this));
  },
  componentWillUnmount() {
    this.serverRequest.abort();
  },
  renderPhotos() {
    return this.state.photos.map((photo) => {
      return <Photo photo={photo} />;
    });
  },
  render() {
    return (
      <ul>
        {this.renderPhotos()}
      </ul>
    );
  }
});
