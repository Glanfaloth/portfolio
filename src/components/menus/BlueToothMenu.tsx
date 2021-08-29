import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import "react-rangeslider/lib/index.css";
import { toggleBlueTooth } from "../../redux/action";
import { FaHeadphonesAlt } from "react-icons/fa";

// icon:airpods | Teeny Icons https://teenyicons.com/ | Anja van Staden
function AirpodsIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        stroke="currentColor"
        d="M6.5 3.5a2.648 2.648 0 01-2.977 2.628l-.32-.04a2.667 2.667 0 01-1.27-.513L.5 4.5v-2l1.433-1.075a2.667 2.667 0 011.27-.513l.32-.04A2.648 2.648 0 016.5 3.5zm0 0v11h-2V6m4-2.5a2.648 2.648 0 002.977 2.628l.32-.04c.46-.058.898-.234 1.27-.513L14.5 4.5v-2l-1.433-1.075a2.667 2.667 0 00-1.27-.513l-.32-.04A2.648 2.648 0 008.5 3.5zm0 0v11h2V6M2 3.5h2m7 0h2"
      />
    </svg>
  );
}

interface BlueToothMenuRedux {
  bluetooth: boolean;
}

interface BlueToothMenuProps extends BlueToothMenuRedux {
  toggleBlueToothMenu: () => void;
  toggleBlueTooth: Function;
  btnRef: any;
}

class BlueToothMenu extends Component<BlueToothMenuProps, {}> {
  private blueToothRef = createRef<any>();

  constructor(props: BlueToothMenuProps) {
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
      this.blueToothRef &&
      !this.blueToothRef.current.contains(e.target) &&
      !this.props.btnRef.current.contains(e.target)
    )
      this.props.toggleBlueToothMenu();
  }

  render() {
    return (
      <div
        className="fixed w-80 max-w-full top-8 right-0 sm:right-2 py-0.5 gap-2 bg-gray-200 bg-opacity-80 blur border border-gray-400 border-opacity-50 rounded-lg text-black shadow-2xl"
        style={{
          boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.3)",
          padding: "10px 5px 5px 5px"
        }}
        ref={this.blueToothRef}
      >
        <div className="flex pl-2.5">
          <div className="w-4/5 font-medium">Bluetooth</div>
          <div className="w-1/5 text-center">
            <label className="switch-toggle">
              <input
                type="checkbox"
                checked={this.props.bluetooth}
                onChange={() =>
                  this.props.toggleBlueTooth(!this.props.bluetooth)
                }
              />
              <span className="slider-toggle"></span>
            </label>
          </div>
        </div>
        <hr className="text-gray-500 opacity-50 my-1 mx-2.5" />
        {this.props.bluetooth && (
          <div>
            <div className="w-4/5 text-sm text-gray-500 mb-1 ml-2.5">
              Devices
            </div>
            <div className="flex hover:bg-gray-300 rounded justify-between py-0.5 px-2.5 ">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-blue-400 rounded-full inline-flex justify-center items-center p-0.5 text-white">
                  <AirpodsIcon />
                </div>
                <div className="text-sm pl-1">Glanfaloth' AirPods</div>
              </div>
            </div>
            <div className="flex hover:bg-gray-300 rounded justify-between py-0.5 px-2.5 mt-1">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-gray-400 rounded-full inline-flex justify-center items-center p-1">
                  <FaHeadphonesAlt size={20} />
                </div>
                <div className="text-sm pl-1">Earmuffs</div>
              </div>
            </div>
            <div className="flex hover:bg-gray-300 rounded justify-between py-0.5 px-2.5 mt-1">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-gray-400 rounded-full inline-flex justify-center items-center p-1">
                  <FaHeadphonesAlt size={20} />
                </div>
                <div className="text-sm pl-1">WH-1000XM4</div>
              </div>
            </div>
            <hr className="text-gray-500 opacity-50 my-1 mx-2.5" />
          </div>
        )}
        <div className="flex hover:bg-gray-300 justify-between py-0.5 px-2.5 rounded items-center">
          <div className="w-4/5 hover:bg-gray-300 text-sm">
            Bluetooth Preferences...
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: BlueToothMenuRedux) => {
  return {
    bluetooth: state.bluetooth
  };
};

export default connect(mapStateToProps, {
  toggleBlueTooth
})(BlueToothMenu);
