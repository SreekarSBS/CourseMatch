

const AccordionContent = ({content}) => {
    return <div className="font-extralight text-lg  p-4 h-auto  justify-between  m-4">
        {content.map((item) => { 
       return <div key = {item.id} className="py-1.5 flex justify-between "> 
       <h1 className="flex" >
        {item.icon_class == "udi udi-video" &&  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 2048 2048"
  className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2"
  fill="currentColor"
>
  <defs>
    <style>{`.fil0{fill:#212121;fill-rule:nonzero}`}</style>
  </defs>
  <g id="Layer_x0020_1">
    <g id="_557074856">
      <path id="_557075600" className="fil0" d="M544 255.999h960.002c79.233 0 151.241 32.392 203.425 84.575 52.184 52.184 84.575 124.192 84.575 203.425v1216c0 17.673-14.328 32.001-32 32.001h-1472c-17.673 0-32.001-14.328-32.001-32V544c0-79.234 32.391-151.242 84.575-203.426C392.759 288.391 464.768 256 544.001 256zm960.002 64.002H544c-61.567 0-117.561 25.21-158.175 65.824-40.613 40.613-65.824 96.607-65.824 158.175v1184h1408V544c0-61.568-25.21-117.561-65.824-158.175C1621.563 345.21 1565.57 320 1504.002 320z" />
      <path id="_557075360" className="fil0" d="M806.068 1135.62V560.001c0-17.673 14.328-32 32-32a31.852 31.852 0 0 1 18.509 5.892l497.23 286.485-15.875 27.625 15.976-27.728c15.313 8.823 20.575 28.39 11.752 43.703a31.854 31.854 0 0 1-14.418 13.128l-497.268 286.505.07.12c-15.313 8.823-34.88 3.562-43.703-11.751a31.845 31.845 0 0 1-4.273-16.36zm64.002-520.409v465.584l404.04-232.792-404.04-232.792z" />
      <path id="_557074640" className="fil0" d="M288 1312c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002h1472c17.673 0 32-14.328 32-32.001S1777.674 1312 1760 1312H288z" />
      <path id="_557075288" className="fil0" d="M496 1504c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002h144.001c17.673 0 32-14.328 32-32.001s-14.327-32.001-32-32.001H496zm304.001 0c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002h752c17.673 0 32-14.328 32-32.001s-14.327-32.001-32-32.001h-752z" />
      <path id="_557075144" className="fil0" d="M720.001 1424c30.925 0 58.925 12.537 79.193 32.807 20.27 20.268 32.807 48.269 32.807 79.193s-12.537 58.925-32.807 79.195c-20.269 20.269-48.27 32.806-79.193 32.806-30.924 0-58.924-12.537-79.194-32.806-20.27-20.27-32.807-48.27-32.807-79.195 0-30.923 12.538-58.924 32.807-79.193 20.27-20.27 48.27-32.807 79.194-32.807zm33.943 78.058c-8.684-8.684-20.686-14.056-33.943-14.056-13.258 0-25.26 5.371-33.944 14.056-8.682 8.682-14.055 20.685-14.055 33.942 0 13.258 5.372 25.26 14.055 33.944 8.684 8.684 20.686 14.055 33.944 14.055 13.258 0 25.26-5.373 33.943-14.055C762.627 1561.26 768 1549.258 768 1536c0-13.256-5.373-25.259-14.057-33.942z" />
    </g>
  </g>
  <path style={{ fill: "none" }} d="M0 0h2048v2048H0z" />
</svg> }
      {item.icon_class == "udi udi-article" && <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 124.12 123"
  className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2"
  fill="currentColor"
>
  <defs>
    <style>{`.cls-1{fill:none;stroke:#333;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}.cls-2{fill:#333}`}</style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Articles_-_Image" data-name="Articles - Image">
      <g id="Articles_-_Excerpt" data-name="Articles - Excerpt">
        <path className="cls-1" d="M27 62h70M27 76h50M27 48h70M27 34h70" />
        <g id="Post_Frame" data-name="Post Frame">
          <path className="cls-1" d="M14 115h96M14 122h68" />
          <circle className="cls-2" cx="88" cy="122" r="1" />
          <circle className="cls-2" cx="122" cy="34" r="2" />
          <path
            d="M122 39.93v54.61c1 6.3-4.16 11.46-10.46 11.46H13.46A11.5 11.5 0 0 1 2 94.54V13.46A11.5 11.5 0 0 1 13.46 2h98.08C117.84 2 123 7.16 122 13.46v10.2"
            style={{
              strokeMiterlimit: 10,
              strokeWidth: 4,
              fill: "none",
              stroke: "#333",
              strokeLinecap: "round",
            }}
          />
        </g>
      </g>
    </g>
  </g>
</svg>}
{item.icon_class == "udi udi-quiz" && <svg
  version="1.1"
  id="lights"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 128 128"
  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 mr-2"
  fill="currentColor"
>
  <g id="row1_1_">
    <path
      id="blub_5_"
      d="M79.1 128H50.6v-7.7h28.5v7.7zm6-33.1H43.7v4.9h41.5v-4.9zm0 8.9H43.7v4.9h41.5v-4.9zm0 8.9H43.7v4.9h41.5v-4.9zm.2-21.4H43.6V89c0-7.1-4.5-13.8-9.2-20.8C29 60 22.8 50.8 22.8 39.4 22.8 17.7 41.3 0 64 0s41.2 17.7 41.2 39.4c0 11.4-5.9 20.5-11.1 28.5-4.6 7.1-8.9 13.7-8.9 21.2v2.2zm-36.9-4.6h32.2c.7-7.7 5-14.3 9.5-21.3 5.1-7.8 10.3-16 10.3-26C100.4 20.2 84 4.6 64 4.6S27.6 20.2 27.6 39.4c0 10.1 5.5 18.3 10.9 26.3 4.7 6.9 9.1 13.5 9.9 21zm18.2-6.6h-4.8V56.4l-16-14.8 3.4-3.3 15 13.9 14.5-13.9 3.4 3.3-15.5 14.7v23.8z"
      style={{ fill: "#3e3e3e" }}
    />
  </g>
</svg>
}
{item.icon_class == "udi udi-coding-exercise" && <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mr-2"
  fill="currentColor"
>
  <g data-name="File Coding">
    <path
      d="M53.707 11.293l-11-11A1.122 1.122 0 0 0 42 0H11a1 1 0 0 0-1 1v62a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V12a1.09 1.09 0 0 0-.293-.707zM50.586 11H43V3.414zM12 62V2h29v10a1 1 0 0 0 1 1h10v49z"
      style={{ fill: "#28282b" }}
    />
    <path
      d="M26.781 30.375a1 1 0 0 0-1.406-.156l-5 4a1 1 0 0 0 0 1.562l5 4a1 1 0 0 0 1.25-1.562L22.6 35l4.024-3.219a1 1 0 0 0 .157-1.406zM38.625 30.219a1 1 0 0 0-1.25 1.562L41.4 35l-4.024 3.219a1 1 0 0 0 1.25 1.562l5-4a1 1 0 0 0 0-1.562zM34.2 24.02a1 1 0 0 0-1.176.784l-4 20a1 1 0 0 0 1.96.392l4-20a1 1 0 0 0-.784-1.176z"
      style={{ fill: "#28282b" }}
    />
  </g>
</svg>
}




        {item.title}</h1>
        <div className="flex " >
        <p className="mr-9">{item.can_be_previewed && <a href = {`https://www.udemy.com${item.preview_url}` } className="text-violet-800" >Preview</a>}</p>
       <p>{item.content_summary}</p>  
       </div>
         </div>
        })}
    </div>
};

export default AccordionContent;
