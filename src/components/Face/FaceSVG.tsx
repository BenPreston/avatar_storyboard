import React from "react";

const maskId = `mask${Math.round(Math.random() * 9999999)}`;
const pathId = `path${Math.round(Math.random() * 9999999)}`;

const FaceSVG = ({ color, width, height }) => (
  <svg
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
    }}
    width={width + "px"}
    height={height + "px"}
    viewBox="0 0 200 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    overflow="hidden"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M154 319.5C139.6 299.5 128.333 260.834 127 241.5L58.5 212L30 319.5H154Z"
        fill={color}
        stroke="black"
        strokeWidth="4"
      />
      <mask
        id={maskId}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="30"
        y="212"
        width="124"
        height="118"
      >
        <path
          d="M154 329.5C139.6 309.5 128.333 260.834 127 241.5L58.5 212L30 329.5H154Z"
          fill={color}
        />
      </mask>
      <g mask={`url(#${maskId})`}>
        <ellipse cx="124" cy="210" rx="59" ry="54" fill="black" />
      </g>
      <mask id={pathId} fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z"
        />
      </mask>
      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z"
        fill={color}
      /> */}
      <path
        d="M183.886 150.917L179.992 151.831L179.994 151.84L179.996 151.849L183.886 150.917ZM183.719 150.222L179.83 151.154L179.832 151.163L179.834 151.172L183.719 150.222ZM167.323 81.7855L163.43 82.7076L163.433 82.7175L167.323 81.7855ZM167.274 81.5821L163.384 82.5141L163.384 82.5142L167.274 81.5821ZM167.225 81.3787L163.335 82.3108L163.338 82.321L167.225 81.3787ZM167.152 81.0752L171.042 80.1432L170.111 76.255L166.222 77.1849L167.152 81.0752ZM167.151 81.0755L163.267 82.0331L164.218 85.8897L168.081 84.9659L167.151 81.0755ZM73.5821 24.1081L72.6501 20.2182L73.5821 24.1081ZM15.9883 117.293L16.9223 121.182L20.7842 120.255L19.8842 116.386L15.9883 117.293ZM15.9863 117.293L15.0523 113.404L11.1649 114.337L12.0964 118.225L15.9863 117.293ZM32.9776 188.211L29.0877 189.143L30.0201 193.035L33.9113 192.101L32.9776 188.211ZM32.9916 188.208L36.8636 187.204L35.8779 183.401L32.058 184.318L32.9916 188.208ZM126.329 244.261L125.397 240.371H125.397L126.329 244.261ZM184.131 151.996L183.2 148.106L179.381 149.021L180.225 152.856L184.131 151.996ZM184.144 151.993L185.075 155.883L188.966 154.951L188.034 151.061L184.144 151.993ZM187.78 150.002C187.751 149.881 187.722 149.759 187.693 149.637L179.914 151.502C179.94 151.611 179.966 151.721 179.992 151.831L187.78 150.002ZM187.693 149.637C187.664 149.516 187.635 149.395 187.605 149.273L179.834 151.172C179.861 151.281 179.887 151.391 179.914 151.502L187.693 149.637ZM163.433 82.7175L179.83 151.154L187.609 149.29L171.212 80.8535L163.433 82.7175ZM171.215 80.8634C171.198 80.7928 171.181 80.7216 171.164 80.65L163.384 82.5142C163.4 82.5781 163.415 82.6425 163.43 82.7076L171.215 80.8634ZM171.164 80.65C171.147 80.579 171.13 80.5078 171.113 80.4364L163.338 82.321C163.353 82.3851 163.369 82.4494 163.384 82.5141L171.164 80.65ZM163.262 82.0072L163.335 82.3108L171.115 80.4467L171.042 80.1432L163.262 82.0072ZM168.081 84.9659L168.083 84.9655L166.222 77.1849L166.221 77.1852L168.081 84.9659ZM171.035 80.118C160.291 36.5398 116.364 9.74466 72.6501 20.2182L74.514 27.998C113.949 18.5498 153.575 42.7219 163.267 82.0331L171.035 80.118ZM72.6501 20.2182C28.936 30.6917 1.92157 74.4836 12.0923 118.199L19.8842 116.386C10.7094 76.9513 35.0796 37.4461 74.514 27.998L72.6501 20.2182ZM16.9204 121.183L16.9223 121.182L15.0542 113.403L15.0523 113.404L16.9204 121.183ZM36.8676 187.279L19.8763 116.361L12.0964 118.225L29.0877 189.143L36.8676 187.279ZM32.058 184.318L32.044 184.322L33.9113 192.101L33.9252 192.097L32.058 184.318ZM29.1195 189.211C40.2685 232.223 83.8693 258.548 127.261 248.151L125.397 240.371C86.2539 249.75 46.9204 226.002 36.8636 187.204L29.1195 189.211ZM127.261 248.151C170.653 237.755 197.591 194.53 188.038 151.136L180.225 152.856C188.842 191.999 164.541 230.993 125.397 240.371L127.261 248.151ZM183.212 148.103L183.2 148.106L185.063 155.886L185.075 155.883L183.212 148.103ZM179.996 151.849L180.254 152.925L188.034 151.061L187.776 149.985L179.996 151.849Z"
        fill="black"
        mask={`url(#${pathId})`}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="200" height="320" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FaceSVG;
