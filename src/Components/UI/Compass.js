import "./Compass.css";

const Compass = (props) => {
    return (
        <svg className="compass-svg" viewBox="0 0 155 208" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <style>
                {`
                    .spinner {
                        transform: rotate(${props.deg}deg);
                    }
                `}
            </style>
  <defs>
    <path d="M9.4,14.6666667 L28.8333333,14.6666667 C29.9379028,14.6666667 30.8333333,15.5620972 30.8333333,16.6666667 L30.8333333,31 C30.8333333,32.1045695 29.9379028,33 28.8333333,33 L9.4,33 C8.2954305,33 7.4,32.1045695 7.4,31 L7.4,16.6666667 C7.4,15.5620972 8.2954305,14.6666667 9.4,14.6666667 Z" id="path-1"></path>
    <filter x="-19.2%" y="-24.5%" width="138.4%" height="149.1%" filterUnits="objectBoundingBox" id="filter-2">
      <feOffset dx="-6" dy="-9" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
      <feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 0.811764706   0 0 0 0 0.811764706   0 0 0 0 0.811764706  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
    </filter>
    <rect id="path-3" x="0" y="0" width="37" height="18.3333333" rx="2"></rect>
    <filter x="-12.2%" y="-24.5%" width="124.3%" height="149.1%" filterUnits="objectBoundingBox" id="filter-4">
      <feOffset dx="-6" dy="-9" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
      <feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 0.81
              0 0 0 0 0.81
              0 0 0 0 0.81
              0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
    </filter>
    <ellipse id="path-5" cx="75.5" cy="76" rx="75.5" ry="76"></ellipse>
    <filter x="-9.6%" y="-9.5%" width="119.2%" height="119.1%" filterUnits="objectBoundingBox" id="filter-6">
      <feOffset dx="-26" dy="-26" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
      <feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 0.19
              0 0 0 0 0.52
              0 0 0 0 0.737
              0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
    </filter>
    <ellipse id="path-7" cx="75.9389535" cy="76.4418605" rx="63.6482558" ry="64.0697674"></ellipse>
    <filter x="-3.9%" y="-3.9%" width="107.9%" height="107.8%" filterUnits="objectBoundingBox" id="filter-8">
      <feOffset dx="-7" dy="-7" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
      <feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 0.855521896   0 0 0 0 0.855521896   0 0 0 0 0.855521896  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
    </filter>
    <path d="M14.7893062,20.7478577 L46.4425703,31.6777537 C47.4866481,32.0382745 48.0407805,33.1769267 47.6802596,34.2210045 C47.4822328,34.7944955 47.0345834,35.2470908 46.463303,35.4514071 L14.7919819,46.778537 C14.3619812,46.9323252 13.8922996,46.9343238 13.4610057,46.7842006 L-18.1923297,35.7664264 C-19.2355111,35.4033198 -19.7868206,34.2632981 -19.4237139,33.2201167 C-19.2242702,32.647128 -18.7755125,32.1956483 -18.2037404,31.9927431 L13.467652,20.7534914 C13.8948358,20.6018964 14.3608456,20.5999099 14.7893062,20.7478577 Z" id="path-9"></path>
    <filter x="-5.9%" y="-15.2%" width="111.9%" height="130.5%" filterUnits="objectBoundingBox" id="filter-10">
      <feOffset dx="1" dy="8" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
      <feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 0.810400723   0 0 0 0 0.200090062   0 0 0 0 0.274595959  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
    </filter>
    <ellipse id="path-11" cx="74.8284884" cy="76.8604651" rx="4.82848837" ry="4.86046512"></ellipse>
    <filter x="-36.2%" y="-36.0%" width="172.5%" height="172.0%" filterUnits="objectBoundingBox" id="filter-12">
      <feOffset dx="-4" dy="-4" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
      <feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 0.811764706   0 0 0 0 0.811764706   0 0 0 0 0.811764706  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
    </filter>
  </defs>
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Group-10-Copy-5" transform="translate(2.000000, 2.000000)" fillRule="nonzero">
      <path d="M76.5,55 C61.3121694,55 49,42.6878306 49,27.5 C49,12.3121694 61.3121694,0 76.5,0 C91.6878306,0 104,12.3121694 104,27.5 C104,42.6878306 91.6878306,55 76.5,55 Z M76.5,48 C87.8218374,48 97,38.8218374 97,27.5 C97,16.1781626 87.8218374,7 76.5,7 C65.1781626,7 56,16.1781626 56,27.5 C56,38.8218374 65.1781626,48 76.5,48 Z" id="Combined-Shape" stroke="#124458" strokeWidth="3" fill="#D8D8D8" strokeLinecap="round" strokeLinejoin="round"></path>
      <g id="Group-8" transform="translate(57.000000, 28.000000)">
        <g id="Group-6">
          <g id="Rectangle-9">
            <use fill="#E8E8E8" xlinkHref="#path-1"></use>
            <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
            <path stroke="#124458" strokeWidth="3" d="M9.4,16.1666667 C9.12385763,16.1666667 8.9,16.3905243 8.9,16.6666667 L8.9,31 C8.9,31.2761424 9.12385763,31.5 9.4,31.5 L28.8333333,31.5 C29.1094757,31.5 29.3333333,31.2761424 29.3333333,31 L29.3333333,16.6666667 C29.3333333,16.3905243 29.1094757,16.1666667 28.8333333,16.1666667 L9.4,16.1666667 Z" strokeLinejoin="square"></path>
          </g>
          <g id="Rectangle-9-Copy">
            <use fill="#E8E8E8" xlinkHref="#path-3"></use>
            <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3"></use>
            <rect stroke="#124458" strokeWidth="3" strokeLinejoin="square" x="1.5" y="1.5" width="34" height="15.3333333" rx="2"></rect>
          </g>
        </g>
        <g id="Group-7" transform="translate(6.166667, 1.783784)" stroke="#124458" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M1.87781955,0.624324324 L1.87781955,5.61891892" id="Line-3"></path>
          <path d="M7.76981857,0.624324324 L7.76981857,5.61891892" id="Line-3-Copy"></path>
          <path d="M15.2810968,0.624324324 L15.2810968,5.61891892" id="Line-3-Copy-2"></path>
          <path d="M22.792375,0.624324324 L22.792375,5.61891892" id="Line-3-Copy-3"></path>
        </g>
        <g id="Group-7" transform="translate(6.166667, 12.486486)" stroke="#124458" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M1.87781955,0.535135135 L1.87781955,4.81621622" id="Line-3"></path>
          <path d="M7.82424812,0.535135135 L7.82424812,4.81621622" id="Line-3-Copy"></path>
          <path d="M15.3355263,0.535135135 L15.3355263,4.81621622" id="Line-3-Copy-2"></path>
          <path d="M22.8468045,0.535135135 L22.8468045,4.81621622" id="Line-3-Copy-3"></path>
        </g>
      </g>
      <g id="Group-9" transform="translate(0.000000, 52.000000)">
        <g id="Group-5">
          <g id="Oval-6">
            <use fill="#45ADEE" xlinkHref="#path-5"></use>
            <use fill="black" fillOpacity="1" filter="url(#filter-6)" xlinkHref="#path-5"></use>
            <use stroke="#124458" strokeWidth="3" xlinkHref="#path-5"></use>
          </g>
          <g id="Oval-6">
            <use fill="#F6F6F6" xlinkHref="#path-7"></use>
            <use fill="black" fillOpacity="1" filter="url(#filter-8)" xlinkHref="#path-7"></use>
            <use stroke="#124458" strokeWidth="3" xlinkHref="#path-7"></use>
          </g>
          <ellipse id="Oval" fill="#FFFFFF" transform="translate(54.837645, 47.762128) rotate(-40.000000) translate(-54.837645, -47.762128) " cx="54.8376446" cy="47.7621279" rx="25.4593023" ry="15.4651163"></ellipse>
          <ellipse id="Oval-Copy" fill="#FFFFFF" transform="translate(37.311047, 86.263018) rotate(-40.000000) translate(-37.311047, -86.263018) " cx="37.3110465" cy="86.2630178" rx="11.7827655" ry="12.6739538"></ellipse>
          <path d="M74.622093,20.1649049 L74.622093,13.4164905 M103.661734,27.6663352 L107.035941,21.8220369 M123.496456,47.640592 L129.340754,44.2663848 M130.94556,76.8837209 L137.693975,76.8837209 M123.496456,104.359408 L129.340754,107.733615 M103.661734,125.217386 L107.035941,131.061684 M74.622093,132.718816 L74.622093,139.46723 M47.3382664,125.217386 L43.9640592,131.061684 M27.5035445,104.359408 L21.6592462,107.733615 M20.0544397,76.8837209 L13.3060254,76.8837209 M27.5035445,47.640592 L21.6592462,44.2663848 M47.3382664,27.6663352 L43.9640592,21.8220369" id="Line-2" stroke="#124458" strokeWidth="3" strokeLinecap="round"></path>
        </g>
        <g className="spinner">
          <g id="Group-8-Copy" transform="translate(75.000000, 76.500000) rotate(44.000000) translate(-75.000000, -76.500000) translate(61.000000, 42.000000)">
            <g id="Rectangle-9-Copy" transform="translate(14.127461, 33.766841) rotate(90.000000) translate(-14.127461, -33.766841) ">
              <use fill="#FF5963" xlinkHref="#path-9"></use>
              <use fill="black" fillOpacity="1" filter="url(#filter-10)" xlinkHref="#path-9"></use>
              <path stroke="#124458" strokeWidth="3" d="M14.2997206,22.1657103 C14.1926055,22.1287234 14.076103,22.12922 13.9693071,22.1671187 L-17.7020853,33.4063704 C-17.8450284,33.4570967 -17.9572178,33.5699666 -18.0070787,33.7132138 C-18.0978554,33.9740092 -17.960028,34.2590146 -17.6992327,34.3497912 L13.9541027,45.3675654 C14.0619262,45.4050962 14.1793466,45.4045965 14.2868468,45.3661495 L45.9581679,34.0390196 C46.100988,33.9879405 46.2129003,33.8747917 46.262407,33.731419 C46.3525373,33.4703995 46.2140042,33.1857365 45.9529847,33.0956062 L14.2997206,22.1657103 Z" strokeLinejoin="square"></path>
            </g>
            <path d="M-0.526379321,40.5375395 C-0.578879271,40.5194112 -0.634032823,40.510157 -0.68957451,40.510157 C-0.965716885,40.510157 -1.18957451,40.7340147 -1.18957451,41.010157 L-1.18957451,61.8611801 C-1.18957451,61.9185663 -1.17969553,61.9755241 -1.16037035,62.0295585 C-1.06737754,62.2895718 -0.781209497,62.4249688 -0.521196134,62.3319759 L29.1411004,51.7233662 C29.2839205,51.6722871 29.3958328,51.5591383 29.4453395,51.4157656 C29.5354698,51.1547461 29.3969367,50.8700831 29.1359172,50.7799529 L-0.526379321,40.5375395 Z" id="Rectangle-9-Copy" stroke="#124458" strokeWidth="3" fill="#124458" transform="translate(14.141846, 51.435941) rotate(90.000000) translate(-14.141846, -51.435941) "></path>
          </g>
        </g>
        <g id="Oval-6" strokeLinecap="round" strokeLinejoin="round">
          <use fill="#E8E8E8" xlinkHref="#path-11"></use>
          <use fill="black" fillOpacity="1" filter="url(#filter-12)" xlinkHref="#path-11"></use>
          <use stroke="#124458" strokeWidth="3" xlinkHref="#path-11"></use>
        </g>
      </g>
    </g>
  </g>
</svg>
    );
};
export default Compass;
