// import React from '/react';
// import ReactDOM from 'react-dom';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videoPlaying: exampleVideoData[1]

    };
  }

  //methods
  onVideoClick() {
    this.setState({
      videoPlaying: exampleVideoData[0]
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <em>search</em> view goes here
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <h5>
                <VideoPlayer video={this.state.videoPlaying} />
              </h5>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h5>
                <VideoList videos={exampleVideoData} />
              </h5>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
// var App = () => (
// <div>
//   <nav className="navbar">
//     <div className="col-md-6 offset-md-3">
//       <div>
//         <h5>
//           <em>search</em> view goes here
//         </h5>
//       </div>
//     </div>
//   </nav>
//   <div className="row">
//     <div className="col-md-7">
//       <div>
//         <h5>
//           <VideoPlayer video={exampleVideoData[0]} />
//         </h5>
//       </div>
//     </div>
//     <div className="col-md-5">
//       <div>
//         <h5>
//           <VideoList videos={exampleVideoData} />
//         </h5>
//       </div>
//     </div>
//   </div>
// </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
