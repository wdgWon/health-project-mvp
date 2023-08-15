import { useEffect } from "react";

export const useGetHeight = (setHeight:() => void) => {
    useEffect(() => {
        const handleResize = () => {
           const navbarHeight =
              document.getElementById(NAVIGATION_ID).offsetHeight;
           const windowHeight = window.innerHeight;
           const contentHeight = windowHeight - navbarHeight;

           console.log(windowHeight, navbarHeight, contentHeight);

           setHeight(() => {
              return {
                 height: contentHeight + "px",
                 top: navbarHeight + "px",
              };
           });
        };

        // 처음 로딩 시 화면 높이 계산
        handleResize();

        // 창 크기가 변경될 때마다 화면 높이 다시 계산
        window.addEventListener("resize", handleResize);
        return () => {
           window.removeEventListener("resize", handleResize);
        };
     }, []);
}