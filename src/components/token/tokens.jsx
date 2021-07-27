import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactWOW from "react-wow";
import TokenDetails from "./tokenDetails";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import week1 from "../../assets/images/tokens/week-1-2.png";
import week2 from "../../assets/images/tokens/week-2-3.png";
import week3 from "../../assets/images/tokens/week-3-1.png";
import week4 from "../../assets/images/tokens/week-4-1.png";
import week5 from "../../assets/images/tokens/week-5.png";
import BuyImg from "../../assets/images/tokens/buy.png";
import SwapImg from "../../assets/images/tokens/swap.png";
import JazzImg from "../../assets/images/tokens/jazz-holders.png";
import { connect } from "react-redux";
class Tokens extends Component {
  render() {
    let contents = (
      <Row>
        <Col lg={12} md={12} sm={12} className="col-xs-12">
          <div className="section-heading2">
            <h4 className="elementor-heading-title elementor-size-default">
              ICO LAUNCH
            </h4>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} className="col-xs-12 mr-b30">
          <div className="weeks">
            <img src={week1} className="weeks-image" />
            <h2 className="elementor-heading-title">
              Price: $2.00
            </h2>
          </div>
          <div className="weeks">
            <img src={week2} className="weeks-image" />
            <h2 className="elementor-heading-title">
              Price: $2.25
            </h2>
          </div>
          <div className="weeks">
            <img src={week3} className="weeks-image" />
            <h2 className="elementor-heading-title">
              Price: $2.50
            </h2>
          </div>
          <div className="weeks current">
            <img src={week4} className="weeks-image" />
            <h2 className="elementor-heading-title">
              Price: $3.00
            </h2>
          </div>
          <div className="weeks">
            <img src={week5} className="weeks-image" />
            <h2 className="elementor-heading-title">
              Public Sale
            </h2>
          </div>
        </Col>
        {
          this.props.network == '137' ? (
            <Col lg={12} md={12} sm={12} className="col-xs-12 pd-l20 pd-r20 ">
              <Row>
                <Col lg={6} md={6} sm={6} className="col-xs-12 jazzholders-tab mr-t20">
                  <img src={BuyImg} />
                  <div className="progressbar-container mr-t20">
                    <div className="progressbar-complete" style={{ width: `30%` }}>
                      <div className="progressbar-liquid"></div>
                    </div>
                    <span className="progress-percent">30% Sold</span>
                  </div>
                  <div>Presale Total Amount: 15,000,000 RCK</div>
                  <div className="mr-t30 mr-b20 buy-inputs">
                    <input type="number" placeholder="BNB" style={{ width: 250, marginRight: 30, marginTop: 10 }} />
                    <input type="number" placeholder="Rock" style={{ width: 250, marginRight: 30, marginTop: 10 }} />
                  </div>
                  <div className="buy-btns">
                    <Button variant="contained" className="buy_btn">Buy</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          ) : (
            <Col lg={12} md={12} sm={12} className="col-xs-12 pd-l20 pd-r20 ">
              <Row>
                <Col lg={6} md={6} sm={6} className="col-xs-12 mr-t20">
                  <img src={BuyImg} />
                  <div className="progressbar-container mr-t20">
                    <div className="progressbar-complete" style={{ width: `30%` }}>
                      <div className="progressbar-liquid"></div>
                    </div>
                    <span className="progress-percent">30% Sold</span>
                  </div>
                  <div>Sale Amount: 15,000,000 RCK</div>
                  <div className="mr-t30 mr-b20 buy-inputs">
                    <input type="number" placeholder="BNB" style={{ width: 250, marginRight: 30, marginTop: 10 }} />
                    <input type="number" placeholder="Rock" style={{ width: 250, marginRight: 30, marginTop: 10 }} />
                  </div>
                  <div className="buy-btns">
                    <Button variant="contained" className="buy_btn">Buy</Button>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} className="col-xs-12 buy-tab mr-t20">
                  <img src={SwapImg} />
                  <div className="progressbar-container mr-t20">
                    <div className="progressbar-complete" style={{ width: `30%` }}>
                      <div className="progressbar-liquid"></div>
                    </div>
                    <span className="progress-percent">30% Sold</span>
                  </div>
                  <div>Swap Amount: 15,000,000 RCK</div>
                  <div className="mr-t30 mr-b20 buy-inputs">
                    <input type="number" placeholder="JAZZ" style={{ width: 250, marginRight: 30, marginTop: 10 }} />
                    <input type="number" placeholder="Rock" style={{ width: 250, marginRight: 30, marginTop: 10 }} />
                  </div>
                  <div className="buy-btns">
                  
                    <Button variant="contained" className="buy_btn swap_btn">Swap</Button>
                    <Button variant="contained" className="buy_btn approve_btn" >Approve</Button>
                  </div>

                </Col>
              </Row>
              <Row>
                <Col lg='6' md='6' sm='6' className="col-xs-12 jazzholders-tab mr-t20">
                  <img src={JazzImg} />
                  <div className="progressbar-container mr-t20">
                    <div className="progressbar-complete" style={{ width: `30%` }}>
                      <div className="progressbar-liquid"></div>
                    </div>
                    <span className="progress-percent">30% Sold</span>
                  </div>
                  <div>Sale Amount: 15,000,000 RCK</div>
                  <div className="mr-t30 mr-b20 buy-inputs">
                    <input type="number" placeholder="BNB" style={{ width: 250, marginRight: 30, marginTop: 10 }} />
                    <input type="number" placeholder="Rock" style={{ width: 250, marginRight: 30, marginTop: 10 }} />
                  </div>
                  <div className="buy-btns">
                    <Button variant="contained" className="buy_btn swap_btn jazz_btn">Buy</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          )
        }

      </Row>
    );

    return (
      <div id="tokens" className="wd_scroll">
        <section className="tokens-area section">
          <div
            className="elementor-shape elementor-shape-top"
            data-negative="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 283.5 19.6"
              preserveAspectRatio="none"
            >
              <path
                className="elementor-shape-fill"
                style={{ opacity: 0.33 }}
                d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
              ></path>
              <path
                className="elementor-shape-fill"
                style={{ opacity: 0.33 }}
                d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
              ></path>
              <path
                className="elementor-shape-fill"
                style={{ opacity: 0.33 }}
                d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
              ></path>
              <path
                className="elementor-shape-fill"
                d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
              ></path>
            </svg>
          </div>

          {contents}
        </section>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  network: state.network.chainId,
});



export default connect(mapStateToProps, null)(Tokens);

