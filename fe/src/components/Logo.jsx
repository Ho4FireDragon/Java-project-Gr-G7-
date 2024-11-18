import PropTypes from 'prop-types'

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

function Logo({ width = 384, height = 246 }) {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={width + 'px'} height={height + 'px'} viewBox="0 0 384.000000 246.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,246.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path
                    d="M1275 1622 c-209 -360 -421 -724 -471 -810 -50 -87 -163 -282 -252
-435 -89 -153 -162 -280 -162 -282 0 -6 2362 7 2448 14 l82 6 -43 75 c-24 41
-121 208 -216 371 l-171 296 -64 5 c-35 3 -204 3 -375 0 l-311 -5 0 -122 c0
-107 2 -124 17 -129 10 -4 150 -6 312 -5 l295 1 63 -108 c34 -60 62 -113 63
-118 0 -9 -1494 3 -1571 13 l-47 6 105 180 c58 99 136 232 173 295 37 63 167
285 289 493 l221 379 -2 267 -3 266 -380 -653z"
                />
                <path
                    d="M2623 2219 c-52 -15 -101 -71 -108 -122 -11 -75 24 -122 132 -176 74
-37 92 -61 68 -97 -21 -33 -84 -33 -144 1 -23 14 -45 25 -47 25 -2 0 -15 -21
-30 -46 -30 -52 -31 -50 46 -87 62 -29 170 -29 225 -1 60 31 80 65 80 135 0
52 -3 62 -30 89 -17 16 -64 47 -105 67 -82 42 -101 63 -84 91 15 23 82 27 128
8 l36 -15 20 39 c11 22 20 43 20 49 0 28 -151 57 -207 40z"
                />
                <path
                    d="M1850 1960 l0 -260 55 0 55 0 0 105 0 105 85 0 85 0 0 50 0 50 -85 0
-85 0 0 55 0 55 90 0 90 0 0 50 0 50 -145 0 -145 0 0 -260z"
                />
                <path d="M2250 1960 l0 -260 55 0 55 0 0 260 0 260 -55 0 -55 0 0 -260z" />
                <path
                    d="M2960 1960 l0 -260 55 0 55 0 0 105 0 105 85 0 85 0 0 -105 0 -105
55 0 55 0 0 260 0 260 -55 0 -55 0 0 -105 0 -105 -85 0 -85 0 0 105 0 105 -55
0 -55 0 0 -260z"
                />
                <path
                    d="M2035 1443 c-123 -64 -151 -203 -61 -301 50 -56 155 -79 235 -51 36
13 36 13 13 56 -13 25 -21 30 -32 23 -8 -5 -37 -10 -63 -10 -42 0 -54 5 -83
34 -28 28 -34 42 -34 76 0 34 6 48 34 76 29 29 41 34 83 34 26 0 55 -4 63 -10
10 -6 19 -2 32 18 10 15 18 32 18 39 0 32 -152 44 -205 16z"
                />
                <path
                    d="M2421 1438 c-5 -13 -39 -96 -75 -185 -36 -89 -66 -164 -66 -167 0 -3
18 -6 40 -6 38 0 41 3 56 40 l16 41 76 -3 75 -3 12 -35 c11 -32 16 -35 53 -38
23 -2 42 0 42 5 0 4 -33 89 -73 188 l-73 180 -37 3 c-31 3 -38 -1 -46 -20z
m68 -155 l21 -53 -40 0 c-22 0 -40 4 -40 8 0 13 32 103 35 100 2 -2 13 -27 24
-55z"
                />
                <path
                    d="M2710 1270 l0 -190 40 0 40 0 0 70 c0 39 4 70 8 70 4 0 32 -31 61
-70 l54 -70 49 0 c57 0 60 -9 -24 93 l-48 59 35 32 c30 28 35 40 35 77 0 85
-51 119 -175 119 l-75 0 0 -190z m147 108 c32 -41 9 -88 -42 -88 -23 0 -25 3
-25 50 0 48 1 50 29 50 16 0 33 -6 38 -12z"
                />
                <path
                    d="M3070 1270 l0 -190 105 0 105 0 0 35 0 35 -65 0 -65 0 0 40 0 40 65
0 65 0 0 40 0 40 -65 0 -65 0 0 40 0 40 65 0 65 0 0 35 0 35 -105 0 -105 0 0
-190z"
                />
                <path
                    d="M2591 864 c2 -5 23 -44 47 -86 l42 -76 370 -7 c234 -5 370 -11 370
-17 0 -6 -75 -134 -166 -285 -91 -151 -168 -281 -171 -289 -4 -11 14 -14 100
-14 l104 0 222 369 c121 203 221 374 221 379 0 5 -148 12 -352 15 -194 4 -451
10 -572 14 -133 4 -217 2 -215 -3z"
                />
            </g>
        </svg>
    )
}

export default Logo
