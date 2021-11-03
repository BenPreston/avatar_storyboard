import React from "react";
import {
  Background,
  Ear,
  EarRing,
  Mouth,
  Hair,
  Eyes,
  Nose,
  EyeBrows,
  Glasses,
  FacialHair,
  Shirt,
} from "./FaceElements";

const AvatarSVG = ({
  eyeType,
  backgroundShape,
  backgroundColor,
  skinColor,
  earType,
  earRingType,
  mouthType,
  hairType,
  hairColor,
  noseType,
  eyeBrowsType,
  glassesType,
  facialHairType,
  shirtType,
  shirtColor,
  collarColor,
}) => {
  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="myClip">
        {Background(backgroundColor, backgroundShape)[backgroundShape]}
      </clipPath>

      <g id="CS_Avatar" clip-path="url(#myClip)">
        {/* <mask
          id="mask0_65:1440"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="380"
          height="380"
        >
          <circle id="Mask" cx="190" cy="190" r="190" fill="#FFEDEF" />
        </mask> */}
        {Background(backgroundColor, backgroundShape)[backgroundShape]}
        <g mask="url(#mask0_65:1440)"></g>
        <g id="Base/1" clip-path="url(#clip0_65:1440)">
          <g id="Neck">
            <path
              id="Neck/1"
              d="M244 361.5C229.6 341.5 218.333 302.834 217 283.5L148.5 254L120 361.5H244Z"
              fill={skinColor}
              stroke="black"
              stroke-width="4"
            />
            <mask
              id="mask1_65:1440"
              // style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="120"
              y="254"
              width="124"
              height="118"
            >
              <path
                id="Mask_2"
                d="M244 371.5C229.6 351.5 218.333 302.834 217 283.5L148.5 254L120 371.5H244Z"
                fill={skinColor}
              />
            </mask>
            <g mask="url(#mask1_65:1440)">
              <g
                id="Ellipse 42"
                // style="mix-blend-mode:multiply"
              >
                <ellipse cx="214" cy="252" rx="59" ry="54" fill="black" />
              </g>
            </g>
          </g>
          <g id="Head">
            <mask id="path-6-inside-1_65:1440" fill={skinColor}>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M273.886 192.917C273.859 192.801 273.831 192.685 273.803 192.569C273.776 192.454 273.748 192.338 273.719 192.222L257.323 123.786C257.306 123.718 257.29 123.65 257.274 123.582C257.258 123.514 257.242 123.446 257.225 123.379L257.152 123.075L257.151 123.076C246.933 81.6308 205.156 56.1472 163.582 66.1081C122.008 76.0689 96.3155 117.717 105.988 159.293L105.986 159.293L122.978 230.211L122.992 230.208C133.594 271.112 175.062 296.149 216.329 286.261C257.597 276.374 283.216 235.264 274.131 193.996L274.144 193.993L273.886 192.917Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M273.886 192.917C273.859 192.801 273.831 192.685 273.803 192.569C273.776 192.454 273.748 192.338 273.719 192.222L257.323 123.786C257.306 123.718 257.29 123.65 257.274 123.582C257.258 123.514 257.242 123.446 257.225 123.379L257.152 123.075L257.151 123.076C246.933 81.6308 205.156 56.1472 163.582 66.1081C122.008 76.0689 96.3155 117.717 105.988 159.293L105.986 159.293L122.978 230.211L122.992 230.208C133.594 271.112 175.062 296.149 216.329 286.261C257.597 276.374 283.216 235.264 274.131 193.996L274.144 193.993L273.886 192.917Z"
              fill={skinColor}
            />
            <path
              d="M273.886 192.917L269.992 193.831L269.994 193.84L269.996 193.849L273.886 192.917ZM273.719 192.222L269.83 193.154L269.832 193.163L269.834 193.172L273.719 192.222ZM257.323 123.786L253.43 124.708L253.433 124.718L257.323 123.786ZM257.225 123.379L253.335 124.311L253.338 124.321L257.225 123.379ZM257.152 123.075L261.042 122.143L260.111 118.255L256.222 119.185L257.152 123.075ZM257.151 123.076L253.267 124.033L254.218 127.89L258.081 126.966L257.151 123.076ZM163.582 66.1081L162.65 62.2182L162.65 62.2182L163.582 66.1081ZM105.988 159.293L106.922 163.182L110.784 162.255L109.884 158.386L105.988 159.293ZM105.986 159.293L105.052 155.404L101.165 156.337L102.096 160.225L105.986 159.293ZM122.978 230.211L119.088 231.143L120.02 235.035L123.911 234.101L122.978 230.211ZM122.992 230.208L126.864 229.204L125.878 225.401L122.058 226.318L122.992 230.208ZM216.329 286.261L215.397 282.371L215.397 282.371L216.329 286.261ZM274.131 193.996L273.2 190.106L269.381 191.021L270.225 194.856L274.131 193.996ZM274.144 193.993L275.075 197.883L278.966 196.951L278.034 193.061L274.144 193.993ZM277.78 192.002C277.751 191.881 277.722 191.759 277.693 191.637L269.914 193.502C269.94 193.611 269.966 193.721 269.992 193.831L277.78 192.002ZM277.693 191.637C277.664 191.516 277.635 191.395 277.605 191.273L269.834 193.172C269.861 193.281 269.887 193.391 269.914 193.502L277.693 191.637ZM253.433 124.718L269.83 193.154L277.609 191.29L261.212 122.854L253.433 124.718ZM261.215 122.863C261.198 122.793 261.181 122.722 261.164 122.65L253.384 124.514C253.4 124.578 253.415 124.643 253.43 124.708L261.215 122.863ZM261.164 122.65C261.147 122.579 261.13 122.508 261.113 122.436L253.338 124.321C253.353 124.385 253.369 124.449 253.384 124.514L261.164 122.65ZM253.262 124.007L253.335 124.311L261.115 122.447L261.042 122.143L253.262 124.007ZM258.081 126.966L258.083 126.966L256.222 119.185L256.221 119.185L258.081 126.966ZM261.035 122.118C250.291 78.5398 206.364 51.7447 162.65 62.2182L164.514 69.998C203.949 60.5498 243.575 84.7219 253.267 124.033L261.035 122.118ZM162.65 62.2182C118.936 72.6917 91.9216 116.484 102.092 160.199L109.884 158.386C100.709 118.951 125.08 79.4461 164.514 69.998L162.65 62.2182ZM106.92 163.183L106.922 163.182L105.054 155.403L105.052 155.404L106.92 163.183ZM126.868 229.279L109.876 158.361L102.096 160.225L119.088 231.143L126.868 229.279ZM122.058 226.318L122.044 226.322L123.911 234.101L123.925 234.097L122.058 226.318ZM119.12 231.211C130.268 274.223 173.869 300.548 217.261 290.151L215.397 282.371C176.254 291.75 136.92 268.002 126.864 229.204L119.12 231.211ZM217.261 290.151C260.653 279.755 287.591 236.53 278.038 193.136L270.225 194.856C278.842 233.999 254.541 272.993 215.397 282.371L217.261 290.151ZM273.212 190.103L273.2 190.106L275.063 197.886L275.075 197.883L273.212 190.103ZM269.996 193.849L270.254 194.925L278.034 193.061L277.776 191.985L269.996 193.849Z"
              fill="black"
              mask="url(#path-6-inside-1_65:1440)"
            />
          </g>
        </g>

        <g id="Mouth">{Mouth()[mouthType]}</g>

        <g id="Eyes">{Eyes()[eyeType]}</g>
        <g id="Nose">{Nose()[noseType]}</g>
        <g id="EyeBrows">{EyeBrows()[eyeBrowsType]}</g>
        <g id="Hair">{Hair(hairColor)[hairType]}</g>
        <g id="Ear">{Ear(skinColor)[earType]}</g>
        <g id="EarRing">{EarRing()[earRingType]}</g>
        <g id="Glasses">{Glasses()[glassesType]}</g>
        <g id="FacialHair">{FacialHair(hairColor)[facialHairType]}</g>
        <g id="Shirt">{Shirt(shirtColor, collarColor)[shirtType]}</g>
      </g>
      <defs>
        <filter
          id="filter0_d_65:1440"
          x="122.582"
          y="193.498"
          width="159.652"
          height="122.174"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_65:1440"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_65:1440"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_65:1440">
          <rect
            width="200"
            height="320"
            fill="white"
            transform="translate(90 42)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AvatarSVG;
