import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import  React from "react";
// import ReactDOM from 'react-dom';
function Shimmer() {
    return (<div>
      <ul id="skeleton-list" className="e-card">
          <li>
              <div className='cardProfile'>
                  <SkeletonComponent shape="Circle" width="40px" shimmerEffect='Pulse'></SkeletonComponent>
              </div>
              <div>
                  <SkeletonComponent width="60%" height='15px' shimmerEffect='Pulse'></SkeletonComponent><br></br>
                  <SkeletonComponent width="40%" height='15px' shimmerEffect='Pulse'></SkeletonComponent>
              </div>
          </li>
          <li>
              <div className='cardProfile'>
                  <SkeletonComponent shape="Circle" width="40px" shimmerEffect='Pulse'></SkeletonComponent>
              </div>
              <div>
                  <SkeletonComponent width="60%" height='15px' shimmerEffect='Pulse'></SkeletonComponent><br></br>
                  <SkeletonComponent width="40%" height='15px' shimmerEffect='Pulse'></SkeletonComponent>
              </div>
          </li>
      </ul>
    </div>);
}
export default Shimmer;
