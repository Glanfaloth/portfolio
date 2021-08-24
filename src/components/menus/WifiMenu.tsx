import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import "react-rangeslider/lib/index.css";
import { toggleWIFI } from "../../redux/action";
import { GoLink } from "react-icons/go";
import { FaSignal } from "react-icons/fa";
import { BsBatteryHalf, BsLockFill } from "react-icons/bs";
import { FiWifi } from "react-icons/fi";
import { IoIosArrowDropright } from "react-icons/io";

interface WifiMenuRedux {
  wifi: boolean;
}

interface WifiMenuProps extends WifiMenuRedux {
  toggleWifiMenu: () => void;
  toggleWIFI: Function;
  btnRef: any;
}

class WifiMenu extends Component<WifiMenuProps, {}> {
  private wifiRef = createRef<any>();

  constructor(props: WifiMenuProps) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(e: MouseEvent): void {
    if (
      this.wifiRef &&
      !this.wifiRef.current.contains(e.target) &&
      !this.props.btnRef.current.contains(e.target)
    )
      this.props.toggleWifiMenu();
  }

  render() {
    return (
      <div
        className="fixed w-70 max-w-full top-8 right-0 sm:right-2 py-0.5 gap-2 bg-gray-100 bg-opacity-80 blur border border-gray-400 border-opacity-50 rounded-lg text-black shadow-2xl"
        style={{
          boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.3)",
          padding: "10px 5px 10px 5px"
        }}
        ref={this.wifiRef}
      >
        <div className="flex" style={{ paddingLeft: "10px" }}>
          <div className="w-4/5 font-medium">Wi-Fi</div>
          <div className="w-1/5 text-center">
            <label className="switch-toggle">
              <input
                type="checkbox"
                checked={this.props.wifi}
                onChange={() => this.props.toggleWIFI(!this.props.wifi)}
              />
              <span className="slider-toggle"></span>
            </label>
          </div>
        </div>
        <hr
          style={{
            color: "grey",
            opacity: "0.5",
            margin: "5px 10px 5px 10px"
          }}
        />
        <div
          className="w-4/5"
          style={{
            fontSize: "14px",
            color: "gray",
            margin: "0px 0px 5px 10px"
          }}
        >
          Personal Hotspot
        </div>
        <div
          className="flex hover:bg-gray-300"
          style={{
            justifyContent: "space-between",
            padding: "2px 10px 2px 10px",
            borderRadius: "4px"
          }}
        >
          <div
            className="flex"
            style={{
              alignItems: "center"
            }}
          >
            <div
              className="h-6 w-6 bg-gray-200 rounded-full inline-flex justify-center items-center"
              style={{ padding: "2px" }}
            >
              <GoLink size={20} />
            </div>
            <div style={{ fontSize: "14px", paddingLeft: "4px" }}>
              Glanfaloth Cevnas' iPhone
            </div>
          </div>
          <div
            className="flex"
            style={{
              paddingLeft: "10px",
              alignItems: "center"
            }}
          >
            <FaSignal
              style={{ marginRight: "3px", height: "10px", color: "gray" }}
            />
            <div
              style={{ fontSize: "10px", color: "gray", marginRight: "3px" }}
            >
              4G
            </div>
            <BsBatteryHalf style={{ marginRight: "3px", color: "gray" }} />
          </div>
        </div>
        <hr
          style={{
            color: "grey",
            opacity: "0.5",
            margin: "5px 10px 5px 10px"
          }}
        />
        <div
          className="w-4/5"
          style={{
            fontSize: "14px",
            color: "gray",
            margin: "0px 0px 5px 10px"
          }}
        >
          Preferred Networks
        </div>
        <div
          className="flex hover:bg-gray-300"
          style={{
            justifyContent: "space-between",
            padding: "2px 10px 2px 10px",
            borderRadius: "4px"
          }}
        >
          <div
            className="flex"
            style={{
              alignItems: "center"
            }}
          >
            <div
              className="h-6 w-6 bg-gray-200 rounded-full inline-flex justify-center items-center"
              style={{ padding: "2px" }}
            >
              <FiWifi size={20} />
            </div>
            <div style={{ fontSize: "14px", paddingLeft: "4px" }}>
              eduroam-5
            </div>
          </div>
          <div
            className="flex"
            style={{
              paddingLeft: "10px",
              alignItems: "center"
            }}
          >
            <BsLockFill
              style={{ marginRight: "3px", height: "10px", color: "gray" }}
            />
          </div>
        </div>
        <div
          className="flex hover:bg-gray-300"
          style={{
            justifyContent: "space-between",
            padding: "2px 10px 2px 10px",
            borderRadius: "4px",
            marginTop: "5px"
          }}
        >
          <div
            className="flex"
            style={{
              alignItems: "center"
            }}
          >
            <div
              className="h-6 w-6 bg-gray-200 rounded-full inline-flex justify-center items-center"
              style={{ padding: "2px" }}
            >
              <FiWifi size={20} />
            </div>
            <div style={{ fontSize: "14px", paddingLeft: "4px" }}>eduroam</div>
          </div>
          <div
            className="flex"
            style={{
              paddingLeft: "10px",
              alignItems: "center"
            }}
          >
            <BsLockFill
              style={{ marginRight: "3px", height: "10px", color: "gray" }}
            />
          </div>
        </div>
        <hr
          style={{
            color: "grey",
            opacity: "0.5",
            margin: "5px 10px 5px 10px"
          }}
        />
        <div
          className="flex hover:bg-gray-300"
          style={{
            justifyContent: "space-between",
            padding: "2px 10px 2px 10px",
            borderRadius: "4px",
            alignItems: "center"
          }}
        >
          <div className="w-4/5" style={{ fontSize: "14px", color: "gray" }}>
            Other Networks
          </div>
          <div
            className="flex"
            style={{
              paddingLeft: "10px",
              alignItems: "center"
            }}
          >
            <IoIosArrowDropright
              style={{ marginRight: "3px", height: "10px", color: "gray" }}
            />
          </div>
        </div>
        <hr
          style={{
            color: "grey",
            opacity: "0.5",
            margin: "5px 10px 5px 10px"
          }}
        />
        <div
          className="flex hover:bg-gray-300"
          style={{
            justifyContent: "space-between",
            padding: "2px 10px 2px 10px",
            borderRadius: "4px",
            alignItems: "center"
          }}
        >
          <div
            className="w-4/5 hover:bg-gray-300"
            style={{
              fontSize: "14px"
            }}
          >
            Network Preferences...
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: WifiMenuRedux) => {
  return {
    wifi: state.wifi
  };
};

export default connect(mapStateToProps, {
  toggleWIFI
})(WifiMenu);
