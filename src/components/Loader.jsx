import React from "react";

const Loader = () => {
    return (
        <div className="d-flex justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="50px" height="50px"
                 viewBox="0 0 100 100">
                <circle cx="84" cy="50" r="10" fill="#c8c7c7">
                    <animate attributeName="r" repeatCount="indefinite" dur="0.5s" calcMode="spline"
                             values="10;0" keySplines="0 0.5 0.5 1"
                             begin="0s" />
                    <animate attributeName="fill" repeatCount="indefinite" dur="2s" calcMode="discrete"
                             begin="0s"/>
                </circle>
                <circle cx="16" cy="50" r="10" fill="#c8c7c7">
                    <animate attributeName="r" repeatCount="indefinite" dur="2s" calcMode="spline"
                             values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="0s"/>
                    <animate attributeName="cx" repeatCount="indefinite" dur="2s" calcMode="spline"
                             values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="0s"/>
                </circle>
                <circle cx="50" cy="50" r="10" fill="#7b7b7b">
                    <animate attributeName="r" repeatCount="indefinite" dur="2s" calcMode="spline"
                             values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-0.5s"/>
                    <animate attributeName="cx" repeatCount="indefinite" dur="2s" calcMode="spline"
                             values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-0.5s"/>
                </circle>
                <circle cx="84" cy="50" r="10" fill="#c8c7c7">
                    <animate attributeName="r" repeatCount="indefinite" dur="2s" calcMode="spline"
                             values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-1s"/>
                    <animate attributeName="cx" repeatCount="indefinite" dur="2s" calcMode="spline"
                             values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-1s"/>
                </circle>
                <circle cx="16" cy="50" r="10" fill="#7b7b7b">
                    <animate attributeName="r" repeatCount="indefinite" dur="2s" calcMode="spline"
                             values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-1.5s"/>
                    <animate attributeName="cx" repeatCount="indefinite" dur="2s" calcMode="spline"
                             values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-1.5s"/>
                </circle>
            </svg>
        </div>
    )
}

export default Loader;