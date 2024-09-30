import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    :root {
        --gray: #565656;
        --gray-dark: #2d2d37;
        --gray-light: #3b3450;
        --gray-blue: #3B4651;
        --white: #fff;
        --pink: #e4105d;
        --new-acount: #e23dd7;
        --black: #151515;
        --bg-color: #1e192c;
        --yellow: #e5e044;
        --green: #23DD7A;
        --danger: #C96868;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }

    body {
        color: var(--white);
        background-color: var(--bg-color);
    }
`