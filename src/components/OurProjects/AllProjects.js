import { Component } from 'react';
import s from '../OurProjects/OurProjects.module.css';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import arrowRightForDetails from '../images/arrowRightForDetails.svg';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class CompletedProjects extends Component {
  state = {
    items: Array.from({ length: 4 }),
    hasMore: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      this.fetchMoreData();
    }
  }

  fetchMoreData = () => {
    if (this.state.items.length >= 16) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 4 })),
      });
    }, 16);
  };

  render() {
    return (
      <div className={s.compleatedProjectsDiv}>
        <div className={s.compleatedProjects}>
          <h2 className={s.mainTitleProjects}>Completed projects</h2>
          {/* <hr /> */}
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            height={800}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {/* {this.state.items.map((id) => ( */}
            <ul className={s.listOfProjects}>
              <li className={s.itemProject}>
                <img
                  src={project1}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Furnace assembly for aluminum billets from the foundation up
                    to rock wool insulation and inox plates cladding. Assembly
                    of the fans, exhaust duct and gas system in Netherlands
                  </p>

                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Maintenance of furnace pusher wagons. Teeth
                    replacementrestoration. Frame cracks welding. Full
                    re-assembly of the wagons
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project3}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Supervision of the mechanical works, equipment installation
                    supervision (ID Fans, pneumatic transport systems, blowers,
                    compressors, dryers etc.), electrical works supervision.
                    Equipment setup/adjustment. USA
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project4}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Replacement of booster fan case, expansion joints,
                    replacement of ducts including curved and straight segments,
                    diameter 2800mm
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Construction of the bisarca rolfo semi-trailer from the
                    preparation of the templates to the dimensional check
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Cutting of the iron tube plate and assembly of a new
                    stainless steel plate in Japan
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Construction and pre-assembly in the workshop of an aluminum
                    furnace
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Maintenance of furnace pusher wagons. Teeth
                    replacement/restoration. Frame cracks welding. Wagons full
                    disassembly/assembly for revision/cleaning/reparing.
                    Restoration of the hydraulic piston basement/support. Wagons
                    motion test.
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Inspection of the ducts. Curved duct section dismantling,
                    restoration and mantling
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Supervision and montage activity in Martinique
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Supervision activity of montage bag filter in Indonesia
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Construction and montage activity of ESP in Poland
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Replacement of rolls on round cutting machine
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Air Intake installation for the gas turbine. Compressed air
                    systemcompressors, dryers, tanks, piping etc. installation,
                    comissioning. Mechanical supervision. Delivery control.
                    Quality control. Electrical supervision. Cold commissioning.
                    Congo
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Overhaul of the electrostatic precipitator. Full demolition
                    of the existing ESP until base columes. Restoration of the
                    crossbars. Replacing of all internal equipment, electrical
                    equipment, new HV/LV cabling, transformers replacing and
                    setup. PLCs setup. Mechanical supervision. Delivery control.
                    Quality control. Electrical supervision. Cold/hot
                    commissioning. Ukraine
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>

              <li className={s.itemProject}>
                <img
                  src={project2}
                  alt="technical control"
                  className={s.projectPhoto}
                />
                <span className={s.textProjects}>
                  <p className={s.projectText}>
                    Construction of the bisarca rolfo semi-trailer from the
                    preparation of the templates to the dimensional check
                  </p>
                  <button type="button" className={s.buttonToProject}>
                    Details{' '}
                    <img
                      src={arrowRightForDetails}
                      alt=""
                      className={s.arrowRightForDetails}
                    />
                  </button>
                </span>
              </li>
            </ul>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

//   return (
//     <div className={s.compleatedProjectsDiv}>
//       <div className={s.compleatedProjects}>
//         <h3 className={s.titleProjects}>Our work</h3>
//         <h2 className={s.mainTitleProjects}>Completed projects</h2>
//         <ul className={s.listOfProjects}>
//           <li className={s.itemProject}>
//             <img
//               src={project1}
//               alt="technical control"
//               className={s.projectPhoto}
//             />
//             <span className={s.textProjects}>
//               <p className={s.projectText}>
//               Furnace assembly for aluminum billets from the foundation up to rock wool insulation and inox plates cladding. Assembly of the fans, exhaust duct and gas system in Netherlands
//               </p>
//               <button type="button" className={s.buttonToProject}>
//                 Details <img src={arrowRight} alt="" className={s.arrowRight} />
//               </button>
//             </span>
//           </li>
//           <li className={s.itemProject}>
//             <img
//               src={project2}
//               alt="technical control"
//               className={s.projectPhoto}
//             />
//             <span className={s.textProjects}>
//               <p className={s.projectText}>
//               Maintenance of furnace pusher wagons. Teeth replacementrestoration. Frame cracks welding. Full re-assembly of the wagons
//               </p>
//               <button type="button" className={s.buttonToProject}>
//                 Details ->{' '}
//               </button>
//             </span>
//           </li>
//           <li className={s.itemProject}>
//             <img
//               src={project3}
//               alt="technical control"
//               className={s.projectPhoto}
//             />
//             <span className={s.textProjects}>
//               <p className={s.projectText}>
//               Supervision of the mechanical works, equipment installation supervision (ID Fans, pneumatic transport systems, blowers, compressors, dryers etc.), electrical works supervision. Equipment setup/adjustment. USA
//               </p>
//               <button type="button" className={s.buttonToProject}>
//                 Details ->{' '}
//               </button>
//             </span>
//           </li>
//           <li className={s.itemProject}>
//             <img
//               src={project4}
//               alt="technical control"
//               className={s.projectPhoto}
//             />
//             <span className={s.textProjects}>
//               <p className={s.projectText}>
//               Replacement of booster fan case, expansion joints, replacement of ducts including curved and straight segments, diameter 2800mm
//               </p>
//               <button type="button" className={s.buttonToProject}>
//                 Details ->{' '}
//               </button>
//             </span>
//           </li>
//         </ul>
//       </div>
//           </div>
//   );
// }
