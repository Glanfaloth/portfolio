import React, { Component } from "react";
import { connect } from "react-redux";
import { ImCancelCircle } from "react-icons/im";

import { macActions } from "../types";
import wallpapers from "../configs/wallpapers";
import user from "../configs/user";

type LoginRedux = {
  dark?: boolean;
};

type LoginProps = LoginRedux & macActions;

class Login extends Component<LoginProps, {}> {
  keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === "Enter") this.props.setLogin(true);
  };

  render() {
    return (
      <div
        className="w-full h-full login text-center"
        style={{
          background: `url(
            ${
              this.props.dark ? wallpapers.night : wallpapers.day
            }) center/cover no-repeat`
        }}
        onClick={() => this.props.setLogin(true)}
      >
        <div className="inline-block w-auto relative top-1/2 -mt-40">
          {/* Avatar */}
          <img
            className="rounded-full w-36 h-36 my-0 mx-auto"
            src={user.avatar}
            alt="img"
          />
          <div className="nightwind-prevent font-semibold text-xl mt-2 text-white">
            {user.name}
          </div>

          {/* Password Input */}
          <div className="nightwind-prevent mx-auto grid grid-cols-5 w-44 h-8 mt-4 rounded-full bg-gray-300 blur bg-opacity-50">
            <input
              className="nightwind-prevent text-sm col-start-1 col-span-4 outline-none focus:outline-none bg-transparent px-2 text-gray-200"
              type="password"
              placeholder="Enter Password"
              onClick={(e) => e.stopPropagation()}
              onKeyPress={this.keyPress}
            />
          </div>

          <div className="nightwind-prevent text-sm mt-2 text-gray-200">
            Click to enter
          </div>
        </div>

        {/* buttons */}
        <div className="nightwind-prevent-block text-sm fixed bottom-16 left-0 right-0 mx-auto flex flex-row space-x-4 w-max">
          <div
            className="flex flex-col items-center text-white w-24"
            onClick={(e) => this.props.sleepMac(e)}
          >
            <div className="h-10 w-10 bg-gray-700 rounded-full inline-flex justify-center items-center">
              <ImCancelCircle size={40} />
            </div>
            <span>Cancel</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: LoginRedux): LoginRedux => {
  return {
    dark: state.dark
  };
};

export default connect(mapStateToProps, null)(Login);