import { createRef } from "react";
import type { RefObject } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-rangeslider/lib/index.css";
import { toggleWIFI } from "../../redux/action";
import { useClickOutside } from "../../hooks";
import type { RootReduxState } from "../../types";
import { GoLink } from "react-icons/go";
import { FaSignal } from "react-icons/fa";
import { BsBatteryHalf, BsLockFill } from "react-icons/bs";
import { FiWifi } from "react-icons/fi";
import { IoIosArrowDropright } from "react-icons/io";

interface WifiMenuProps {
  toggleWifiMenu: () => void;
  btnRef: RefObject<HTMLDivElement>;
}

export default function WifiMenu({ toggleWifiMenu, btnRef }: WifiMenuProps) {
  const wifi = useSelector((state: RootReduxState) => state.wifi);
  const dispatch = useDispatch();
  const wifiRef = createRef<HTMLDivElement>();

  useClickOutside(wifiRef, toggleWifiMenu, [btnRef]);

  return (
    <div
      className="fixed w-80 max-w-full top-8 right-0 sm:right-2 py-0.5 gap-2 bg-gray-200 bg-opacity-80 blur border border-gray-400 border-opacity-50 rounded-lg text-black shadow-2xl"
      style={{
        boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.3)",
        padding: "10px 5px 5px 5px"
      }}
      ref={wifiRef}
    >
      <div className="flex pl-2.5">
        <div className="w-4/5 font-medium">Wi-Fi</div>
        <div className="w-1/5 text-center">
          <label className="switch-toggle">
            <input
              type="checkbox"
              checked={wifi}
              onChange={() => dispatch(toggleWIFI(!wifi))}
            />
            <span className="slider-toggle"></span>
          </label>
        </div>
      </div>
      <hr className="text-gray-500 opacity-50 my-1 mx-2.5" />
      {wifi && (
        <div>
          <div className="w-4/5 text-sm text-gray-500 mb-1 ml-2.5">
            Personal Hotspot
          </div>
          <div className="flex hover:bg-gray-300 rounded justify-between py-0.5 px-2.5">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-gray-400 rounded-full inline-flex justify-center items-center p-0.5">
                <GoLink size={20} />
              </div>
              <div className="text-sm pl-1">Glanfaloth Cevnas' iPhone</div>
            </div>
            <div className="flex items-center pl-2.5">
              <FaSignal className="mr-0.5 h-2.5 text-gray-500" />
              <div className="text-xs text-gray-500 mr-0.5">4G</div>
              <BsBatteryHalf className="mr-0.5 text-gray-500" />
            </div>
          </div>
          <hr className="text-gray-500 opacity-50 my-1 mx-2.5" />
          <div className="w-4/5 text-sm text-gray-500 mb-1 ml-2.5">
            Preferred Networks
          </div>
          <div className="flex hover:bg-gray-300 rounded justify-between py-0.5 px-2.5">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-blue-500 rounded-full inline-flex justify-center items-center p-0.5 text-white">
                <FiWifi size={20} />
              </div>
              <div className="text-sm pl-1">eduroam-5</div>
            </div>
            <div className="flex items-center pl-2.5">
              <BsLockFill className="mr-0.5 h-2.5 text-gray-500" />
            </div>
          </div>
          <div className="flex hover:bg-gray-300 rounded justify-between py-0.5 px-2.5 mt-1">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-gray-400 rounded-full inline-flex justify-center items-center p-0.5">
                <FiWifi size={20} />
              </div>
              <div className="text-sm pl-1">eduroam</div>
            </div>
            <div className="flex items-center">
              <BsLockFill className="mr-0.5 h-2.5 text-gray-500" />
            </div>
          </div>
          <hr className="text-gray-500 opacity-50 my-1 mx-2.5" />
          <div className="flex hover:bg-gray-300 items-center rounded justify-between py-0.5 px-2.5">
            <div className="w-4/5 text-sm text-gray-500">Other Networks</div>
            <div className="flex items-center">
              <IoIosArrowDropright className="mr-0.5 h-2.5 text-gray-500" />
            </div>
          </div>
          <hr className="text-gray-500 opacity-50 my-1 mx-2.5" />
        </div>
      )}
      <div className="flex hover:bg-gray-300 justify-between py-0.5 px-2.5 rounded items-center">
        <div className="w-4/5 hover:bg-gray-300 text-sm">
          Network Preferences...
        </div>
      </div>
    </div>
  );
}
