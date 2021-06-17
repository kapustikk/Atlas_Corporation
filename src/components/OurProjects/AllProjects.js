import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import AddSwiper from '../Swiper/Swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Fade from 'react-reveal/Fade';

import s from '../OurProjects/OurProjects.module.css';
import project1 from '../images/forProject1.jpg';
import project2 from '../images/forProject2.jpg';
import project3 from '../images/forProject3.jpg';
import project4 from '../images/forProject4.jpg';
import project5 from '../images/forProject5.jpg';
import project6 from '../images/assembly.jpg';
import project7 from '../images/forProject7.jpg';
import project8 from '../images/forProject8.jpg';
import project9 from '../images/forProject9.jpg';
import project10 from '../images/italPage2.jpg';
import project11 from '../images/forProject11.jpg';
import project12 from '../images/forProject12.jpg';
import project13 from '../images/forProject13.jpg';
import project14 from '../images/forProject14.jpg';
import project15 from '../images/forProject15.jpg';

import photo1ForProject1 from '../images/project1/photo1.jpg';
import photo2ForProject1 from '../images/project1/photo2.jpg';
import photo3ForProject1 from '../images/project1/photo3.jpg';
import photo4ForProject1 from '../images/project1/photo4.jpg';

import photo1ForProject2 from '../images/project2/photo1.jpg';
import photo2ForProject2 from '../images/project2/photo2.jpg';
import photo3ForProject2 from '../images/project2/photo3.jpg';
import photo4ForProject2 from '../images/project2/photo4.jpg';

import photo1ForProject3 from '../images/project3/photo1.jpg';
import photo2ForProject3 from '../images/project3/photo2.jpg';
import photo3ForProject3 from '../images/project3/photo3.jpg';
import photo4ForProject3 from '../images/project3/photo4.jpg';

import photo1ForProject4 from '../images/project4/photo1.jpg';
import photo2ForProject4 from '../images/project4/photo2.jpg';
import photo3ForProject4 from '../images/project4/photo3.jpg';
import photo4ForProject4 from '../images/project4/photo4.jpg';

import photo1ForProject5 from '../images/project5/photo1.jpg';
import photo2ForProject5 from '../images/project5/photo2.jpg';
import photo3ForProject5 from '../images/project5/photo3.jpg';
import photo4ForProject5 from '../images/project5/photo4.jpg';

import photo1ForProject6 from '../images/project6/photo1.jpg';
import photo2ForProject6 from '../images/project6/photo2.jpg';
import photo3ForProject6 from '../images/project6/photo3.jpg';
import photo4ForProject6 from '../images/project6/photo4.jpg';

import photo1ForProject7 from '../images/project7/photo1.jpg';
import photo2ForProject7 from '../images/project7/photo2.jpg';
import photo3ForProject7 from '../images/project7/photo3.jpg';
import photo4ForProject7 from '../images/project7/photo4.jpg';

import photo1ForProject8 from '../images/project8/photo1.jpg';
import photo2ForProject8 from '../images/project8/photo2.jpg';
import photo3ForProject8 from '../images/project8/photo3.jpg';
import photo4ForProject8 from '../images/project8/photo4.jpg';

import photo1ForProject9 from '../images/project9/photo1.jpg';
import photo2ForProject9 from '../images/project9/photo2.jpg';
import photo3ForProject9 from '../images/project9/photo3.jpg';
import photo4ForProject9 from '../images/project9/photo4.jpg';

import photo1ForProject10 from '../images/project10/photo1.jpg';
import photo2ForProject10 from '../images/project10/photo2.jpg';
import photo3ForProject10 from '../images/project10/photo3.jpg';
import photo4ForProject10 from '../images/project10/photo4.jpg';

import photo1ForProject11 from '../images/project11/photo1.jpg';
import photo2ForProject11 from '../images/project11/photo2.jpg';
import photo3ForProject11 from '../images/project11/photo3.jpg';
import photo4ForProject11 from '../images/project11/photo4.jpg';
import photo5ForProject11 from '../images/project11/photo5.jpg';

import photo1ForProject12 from '../images/project12/photo1.jpg';
import photo2ForProject12 from '../images/project12/photo2.jpg';
import photo3ForProject12 from '../images/project12/photo3.jpg';
import photo4ForProject12 from '../images/project12/photo4.jpg';
import photo5ForProject12 from '../images/project12/photo5.jpg';
import photo6ForProject12 from '../images/project12/photo6.jpg';

import photo1ForProject13 from '../images/project13/photo1.jpg';
import photo2ForProject13 from '../images/project13/photo2.jpg';
import photo3ForProject13 from '../images/project13/photo3.jpg';
import photo4ForProject13 from '../images/project13/photo4.jpg';

import photo1ForProject14 from '../images/project14/photo1.jpg';
import photo2ForProject14 from '../images/project14/photo2.jpg';
import photo3ForProject14 from '../images/project14/photo3.jpg';
import photo4ForProject14 from '../images/project14/photo4.jpg';
import photo5ForProject14 from '../images/project14/photo5.jpg';

import photo1ForProject15 from '../images/project15/photo1.jpg';
import photo2ForProject15 from '../images/project15/photo2.jpg';
import photo3ForProject15 from '../images/project15/photo3.jpg';
import photo4ForProject15 from '../images/project15/photo4.jpg';

import arrowRightForDetails from '../images/arrowRightForDetails.svg';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class CompletedProjects extends Component {
  state = {
    items: Array.from({ length: 4 }),
    hasMore: true,
    showSwiperOne: false,
    showSwiperTwo: false,
    showSwiperThree: false,
    showSwiperFour: false,
    showSwiperFive: false,
    showSwiperSix: false,
    showSwiperSeven: false,
    showSwiperEight: false,
    showSwiperNine: false,
    showSwiperTen: false,
    showSwiperEleven: false,
    showSwiperTwelve: false,
    showSwiperThirteen: false,
    showSwiperFourteen: false,
    showSwiperFifteen: false,
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

  toogleSwiperOne = () => {
    this.setState(state => ({
      showSwiperOne: !state.showSwiperOne,
    }));
  };

  toogleSwiperTwo = () => {
    this.setState(state => ({
      showSwiperTwo: !state.showSwiperTwo,
    }));
  };

  toogleSwiperThree = () => {
    this.setState(state => ({
      showSwiperThree: !state.showSwiperThree,
    }));
  };

  toogleSwiperFour = () => {
    this.setState(state => ({
      showSwiperFour: !state.showSwiperFour,
    }));
  };

  toogleSwiperFive = () => {
    this.setState(state => ({
      showSwiperFive: !state.showSwiperFive,
    }));
  };

  toogleSwiperSix = () => {
    this.setState(state => ({
      showSwiperSix: !state.showSwiperSix,
    }));
  };

  toogleSwiperSeven = () => {
    this.setState(state => ({
      showSwiperSeven: !state.showSwiperSeven,
    }));
  };

  toogleSwiperEight = () => {
    this.setState(state => ({
      showSwiperEight: !state.showSwiperEight,
    }));
  };

  toogleSwiperNine = () => {
    this.setState(state => ({
      showSwiperNine: !state.showSwiperNine,
    }));
  };

  toogleSwiperTen = () => {
    this.setState(state => ({
      showSwiperTen: !state.showSwiperTen,
    }));
  };

  toogleSwiperEleven = () => {
    this.setState(state => ({
      showSwiperEleven: !state.showSwiperEleven,
    }));
  };

  toogleSwiperTwelve = () => {
    this.setState(state => ({
      showSwiperTwelve: !state.showSwiperTwelve,
    }));
  };

  toogleSwiperThirteen = () => {
    this.setState(state => ({
      showSwiperThirteen: !state.showSwiperThirteen,
    }));
  };

  toogleSwiperFourteen = () => {
    this.setState(state => ({
      showSwiperFourteen: !state.showSwiperFourteen,
    }));
  };

  toogleSwiperFifteen = () => {
    this.setState(state => ({
      showSwiperFifteen: !state.showSwiperFifteen,
    }));
  };

  render() {
    const {
      showSwiperOne,
      showSwiperTwo,
      showSwiperThree,
      showSwiperFour,
      showSwiperFive,
      showSwiperSix,
      showSwiperSeven,
      showSwiperEight,
      showSwiperNine,
      showSwiperTen,
      showSwiperEleven,
      showSwiperTwelve,
      showSwiperThirteen,
      showSwiperFourteen,
      showSwiperFifteen,
    } = this.state;
    return (
      <div className={s.compleatedProjectsDiv}>
        <Fade clear>
          <div className={s.compleatedProjects}>
            <h2 className={s.mainTitleProjects}>
              <Trans i18nKey="projects">Completed projects</Trans>
            </h2>
            {/* <hr /> */}
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={this.state.hasMore}
              loader={<h4>Loading...</h4>}
              height={800}
            >
              <ul className={s.listOfProjects}>
                <li className={s.itemProject}>
                  <img
                    src={project1}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Furnace assembly for aluminum billets from the foundation
                      up to rock wool insulation and inox plates cladding.
                      Assembly of the fans, exhaust duct and gas system in
                      Netherlands
                    </p>

                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperOne}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperOne && (
                      <AddSwiper onClose={this.toogleSwiperOne}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject1}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject1}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject1}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject1}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
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
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperTwo}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperTwo && (
                      <AddSwiper onClose={this.toogleSwiperTwo}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject2}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject2}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject2}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject2}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
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
                      Supervision of the mechanical works, equipment
                      installation supervision (ID Fans, pneumatic transport
                      systems, blowers, compressors, dryers etc.), electrical
                      works supervision. Equipment setup/adjustment. USA
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperThree}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperThree && (
                      <AddSwiper onClose={this.toogleSwiperThree}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject3}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject3}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject3}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject3}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
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
                      replacement of ducts including curved and straight
                      segments, diameter 2800mm
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperFour}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperFour && (
                      <AddSwiper onClose={this.toogleSwiperFour}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject4}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject4}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject4}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject4}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project5}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Construction of the bisarca rolfo semi-trailer from the
                      preparation of the templates to the dimensional check
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperFive}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperFive && (
                      <AddSwiper onClose={this.toogleSwiperFive}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject5}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject5}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject5}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject5}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project6}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Cutting of the iron tube plate and assembly of a new
                      stainless steel plate in Japan
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperSix}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperSix && (
                      <AddSwiper onClose={this.toogleSwiperSix}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject6}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject6}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject6}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject6}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project7}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Construction and pre-assembly in the workshop of an
                      aluminum furnace
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperSeven}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperSeven && (
                      <AddSwiper onClose={this.toogleSwiperSeven}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject7}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject7}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject7}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject7}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project8}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Maintenance of furnace pusher wagons. Teeth
                      replacement/restoration. Frame cracks welding. Wagons full
                      disassembly/assembly for revision/cleaning/reparing.
                      Restoration of the hydraulic piston basement/support.
                      Wagons motion test.
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperEight}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperEight && (
                      <AddSwiper onClose={this.toogleSwiperEight}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject8}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject8}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject8}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject8}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project9}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Inspection of the ducts. Curved duct section dismantling,
                      restoration and mantling
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperNine}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperNine && (
                      <AddSwiper onClose={this.toogleSwiperNine}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject9}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject9}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject9}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject9}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project10}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Supervision and montage activity in Martinique
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperTen}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperTen && (
                      <AddSwiper onClose={this.toogleSwiperTen}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject10}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject10}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject10}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject10}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project11}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Supervision activity of montage bag filter in Indonesia
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperEleven}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperEleven && (
                      <AddSwiper onClose={this.toogleSwiperEleven}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject11}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject11}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject11}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject11}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo5ForProject11}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project12}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Construction and montage activity of ESP in Poland
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperTwelve}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperTwelve && (
                      <AddSwiper onClose={this.toogleSwiperTwelve}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject12}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject12}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject12}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject12}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo5ForProject12}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo6ForProject12}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project13}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Replacement of rolls on round cutting machine
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperThirteen}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperThirteen && (
                      <AddSwiper onClose={this.toogleSwiperThirteen}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject13}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject13}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject13}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject13}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project14}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Air Intake installation for the gas turbine. Compressed
                      air systemcompressors, dryers, tanks, piping etc.
                      installation, comissioning. Mechanical supervision.
                      Delivery control. Quality control. Electrical supervision.
                      Cold commissioning. Congo
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperFourteen}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperFourteen && (
                      <AddSwiper onClose={this.toogleSwiperFourteen}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject14}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject14}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject14}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject14}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo5ForProject14}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>

                <li className={s.itemProject}>
                  <img
                    src={project15}
                    alt="technical control"
                    className={s.projectPhoto}
                  />
                  <span className={s.textProjects}>
                    <p className={s.projectText}>
                      Overhaul of the electrostatic precipitator. Full
                      demolition of the existing ESP until base columes.
                      Restoration of the crossbars. Replacing of all internal
                      equipment, electrical equipment, new HV/LV cabling,
                      transformers replacing and setup. PLCs setup. Mechanical
                      supervision. Delivery control. Quality control. Electrical
                      supervision. Cold/hot commissioning. Ukraine
                    </p>
                    <button
                      type="button"
                      className={s.buttonToProject}
                      aria-label="Open all photos"
                      onClick={this.toogleSwiperFifteen}
                    >
                      <Trans i18nKey="details">Details</Trans>{' '}
                      <img
                        src={arrowRightForDetails}
                        alt=""
                        className={s.arrowRightForDetails}
                      />
                    </button>
                    {showSwiperFifteen && (
                      <AddSwiper onClose={this.toogleSwiperFifteen}>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo1ForProject15}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo2ForProject15}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo3ForProject15}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                        <SwiperSlide className={s.slides}>
                          <img
                            src={photo4ForProject15}
                            alt=""
                            className={s.imageSlides}
                          />
                        </SwiperSlide>
                      </AddSwiper>
                    )}
                  </span>
                </li>
              </ul>
            </InfiniteScroll>
          </div>
        </Fade>
      </div>
    );
  }
}
