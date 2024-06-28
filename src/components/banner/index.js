/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
    CardBody,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalZStack as ZStack
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import './style.scss'

/**
 * Render Banner
 */
function Banner() {
    return (
        <>
            <ZStack>
                <svg className="svg"
                    width={1518}
                    height="auto"
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_3_270)">
                        <path fill="#fff" d="M0 0H1440V800H0z" />
                        <g clipPath="url(#clip1_3_270)">
                            <path fill="#fff" d="M0 0H1440V800H0z" />
                            <path fill="#1F1F1F" d="M0 0H1440V800H0z" />
                            <path
                                transform="rotate(-15 -66 558.292)"
                                fill="#2F3133"
                                d="M-66 558.292H449V969.292H-66z"
                            />
                            <path
                                transform="rotate(-15 316.397 493.06)"
                                fill="#424345"
                                d="M316.397 493.06H445.147V868.098H316.397z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M180.6 821.977l184.057-49.318 2.659 9.925-184.057 49.318-2.659-9.925z"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 175.281 802.127)"
                                fill="#535556"
                                d="M175.281 802.127H226.781V812.4019999999999H175.281z"
                            />
                            <rect
                                x={138.05}
                                y={663.179}
                                width={190.55}
                                height={118.163}
                                rx={4}
                                transform="rotate(-15 138.05 663.179)"
                                fill="#535556"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M128.468 726.911c8.446 31.518-10.321 63.931-41.915 72.397-31.595 8.466-64.053-10.222-72.498-41.739-8.446-31.518 10.32-63.931 41.915-72.397 31.595-8.466 64.053 10.222 72.498 41.739zm-9.949 2.666c6.977 26.037-8.526 52.813-34.626 59.806-26.1 6.994-52.913-8.444-59.89-34.48-6.976-26.037 8.527-52.813 34.627-59.806 26.1-6.994 52.913 8.444 59.889 34.48z"
                                fill="#535556"
                            />
                            <mask
                                id="a"
                                style={{
                                    maskType: "luminance"
                                }}
                                maskUnits="userSpaceOnUse"
                                x={55}
                                y={669}
                                width={89}
                                height={115}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M55.97 685.172l57.207-15.329L143.76 783.98l-72.498-41.74-15.292-57.068z"
                                    fill="#fff"
                                />
                            </mask>
                            <g mask="url(#a)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M128.468 726.911c8.446 31.518-10.321 63.931-41.915 72.397-31.595 8.466-64.053-10.222-72.498-41.739-8.446-31.518 10.32-63.931 41.915-72.397 31.595-8.466 64.053 10.222 72.498 41.739zm-9.949 2.666c6.977 26.037-8.526 52.813-34.626 59.806-26.1 6.994-52.913-8.444-59.89-34.48-6.976-26.037 8.527-52.813 34.627-59.806 26.1-6.994 52.913 8.444 59.889 34.48z"
                                    fill="#535556"
                                />
                            </g>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M83.894 789.383c26.099-6.993 41.602-33.769 34.625-59.806-6.976-26.036-33.79-41.474-59.89-34.48-26.1 6.993-41.602 33.769-34.625 59.806 6.976 26.036 33.79 41.474 59.89 34.48z"
                                fill="#2F3133"
                            />
                            <path
                                transform="rotate(-15 52.521 741.943)"
                                fill="#535556"
                                d="M52.521 741.943H88.571V752.218H52.521z"
                            />
                            <rect
                                x={-25.1711}
                                y={611.177}
                                width={334.75}
                                height={66.7875}
                                rx={4}
                                transform="rotate(-15 -25.171 611.177)"
                                fill="#535556"
                            />
                            <path
                                transform="rotate(-15 -66 558.292)"
                                fill="#121314"
                                d="M-66 558.292H449V594.2545H-66z"
                            />
                            <path
                                transform="rotate(-15 420.397 445.562)"
                                fill="#535556"
                                d="M420.397 445.562H430.397V447.562H420.397z"
                            />
                            <path
                                transform="rotate(-15 404.942 449.703)"
                                fill="#535556"
                                d="M404.942 449.703H414.942V451.703H404.942z"
                            />
                            <path
                                transform="rotate(-15 389.487 453.844)"
                                fill="#535556"
                                d="M389.487 453.844H399.487V455.844H389.487z"
                            />
                            <path
                                transform="rotate(-15 224 -.02)"
                                fill="#2F3133"
                                d="M224 -0.0194092H467.33799999999997V194.65159079999998H224z"
                            />
                            <path
                                transform="rotate(-15 224 -.02)"
                                fill="#121314"
                                d="M224 -0.0194092H467.33799999999997V43.7814908H224z"
                            />
                            <rect
                                x={383.078}
                                y={-17.4521}
                                width={48.6677}
                                height={158.17}
                                rx={4}
                                transform="rotate(-15 383.078 -17.452)"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 340.49 152.671)"
                                fill="#424345"
                                d="M340.49 152.671H389.15770000000003V157.53776H340.49z"
                            />
                            <path
                                transform="rotate(-15 337.971 143.269)"
                                fill="#424345"
                                d="M337.971 143.269H410.97249999999997V148.13576H337.971z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M335.451 133.867l70.514-18.894 1.26 4.701-70.514 18.894-1.26-4.701z"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 332.932 124.465)"
                                fill="#535556"
                                d="M332.932 124.465H357.2658V129.33176H332.932z"
                            />
                            <rect
                                x={297.675}
                                y={133.912}
                                width={24.3338}
                                height={24.3338}
                                rx={4}
                                transform="rotate(-15 297.675 133.912)"
                                fill="#535556"
                            />
                            <path
                                transform="rotate(-15 293.267 117.459)"
                                fill="#424345"
                                d="M293.267 117.459H378.4354V122.32578000000001H293.267z"
                            />
                            <path
                                transform="rotate(-15 290.747 108.057)"
                                fill="#424345"
                                d="M290.747 108.057H400.249V112.92377H290.747z"
                            />
                            <path
                                transform="rotate(-15 288.228 98.655)"
                                fill="#424345"
                                d="M288.228 98.655H397.73V103.52176H288.228z"
                            />
                            <path
                                transform="rotate(-15 285.709 89.253)"
                                fill="#424345"
                                d="M285.709 89.2532H395.211V94.11997000000001H285.709z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M283.19 79.851L388.961 51.51l1.259 4.701-105.771 28.341-1.259-4.7z"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 278.781 63.398)"
                                fill="#535556"
                                d="M278.781 63.398H327.44870000000003V73.13154H278.781z"
                            />
                            <rect
                                x={265.555}
                                y={14.0382}
                                width={109.502}
                                height={38.9341}
                                rx={4}
                                transform="rotate(-15 265.555 14.038)"
                                fill="#535556"
                            />
                            <path
                                transform="rotate(-15 -90.654 250.349)"
                                fill="#2F3133"
                                d="M-90.6543 250.349H240.3457V515.3489999999999H-90.6543z"
                            />
                            <rect
                                x={200.809}
                                y={391.731}
                                width={36.41}
                                height={19.875}
                                rx={9.9375}
                                transform="rotate(-15 200.809 391.731)"
                                fill="#535556"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M214.687 405.159a6.623 6.623 0 004.68-8.113 6.623 6.623 0 00-8.109-4.686 6.623 6.623 0 00-4.68 8.113 6.623 6.623 0 008.109 4.686z"
                                fill="#2F3133"
                            />
                            <path
                                transform="rotate(-15 95.533 433.657)"
                                fill="#424345"
                                d="M95.5332 433.657H128.6332V440.282H95.5332z"
                            />
                            <path
                                transform="rotate(-15 92.104 420.858)"
                                fill="#535556"
                                d="M92.1038 420.858H158.30380000000002V427.483H92.1038z"
                            />
                            <rect
                                x={191.378}
                                y={356.535}
                                width={36.41}
                                height={19.875}
                                rx={9.9375}
                                transform="rotate(-15 191.378 356.535)"
                                fill="#535556"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M205.257 369.963a6.623 6.623 0 004.679-8.113 6.623 6.623 0 00-8.109-4.686 6.623 6.623 0 00-4.679 8.113 6.623 6.623 0 008.109 4.686z"
                                fill="#2F3133"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M86.103 398.461l47.958-12.851 1.714 6.4-47.958 12.85-1.714-6.399z"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 82.673 385.662)"
                                fill="#535556"
                                d="M82.6731 385.662H162.1131V392.287H82.6731z"
                            />
                            <rect
                                x={181.948}
                                y={321.339}
                                width={36.41}
                                height={19.875}
                                rx={9.9375}
                                transform="rotate(-15 181.948 321.339)"
                                fill="#3858E9"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M211.812 330.483a6.622 6.622 0 004.68-8.112 6.622 6.622 0 00-8.109-4.686 6.622 6.622 0 00-4.68 8.112 6.622 6.622 0 008.109 4.686z"
                                fill="#fff"
                            />
                            <path
                                transform="rotate(-15 76.672 363.265)"
                                fill="#424345"
                                d="M76.6719 363.265H156.1119V369.89H76.6719z"
                            />
                            <path
                                transform="rotate(-15 73.242 350.466)"
                                fill="#535556"
                                d="M73.2424 350.466H122.89240000000001V357.091H73.2424z"
                            />
                            <rect
                                x={51.8091}
                                y={270.475}
                                width={148.95}
                                height={66.25}
                                rx={4}
                                transform="rotate(-15 51.81 270.475)"
                                fill="#535556"
                            />
                            <path
                                transform="rotate(-15 45.808 248.078)"
                                fill="#535556"
                                d="M45.8076 248.078H112.0076V261.328H45.8076z"
                            />
                            <path
                                transform="rotate(-15 -9.26 362.285)"
                                fill="#424345"
                                d="M-9.26001 362.285H40.38999V368.91H-9.26001z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M-12.69 349.486l63.945-17.134 1.714 6.399-63.944 17.134-1.715-6.399z"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 -16.119 336.688)"
                                fill="#535556"
                                d="M-16.1187 336.688H16.9813V343.313H-16.1187z"
                            />
                            <rect
                                x={-34.1228}
                                y={269.495}
                                width={52.96}
                                height={53}
                                rx={4}
                                transform="rotate(-15 -34.123 269.495)"
                                fill="#535556"
                            />
                            <path
                                transform="rotate(-15 286 217.187)"
                                fill="#2F3133"
                                d="M286 217.187H534V415.187H286z"
                            />
                            <path
                                transform="rotate(-15 368.755 238.572)"
                                fill="#535556"
                                d="M368.755 238.572H529.9549999999999V369.747H368.755z"
                            />
                            <path
                                transform="rotate(-15 290.484 233.922)"
                                fill="#424345"
                                d="M290.484 233.922H352.484V414.597H290.484z"
                            />
                            <path
                                transform="rotate(-15 286 217.187)"
                                fill="#121314"
                                d="M286 217.187H534V234.512H286z"
                            />
                            <path
                                transform="rotate(-15 512.165 164.869)"
                                fill="#535556"
                                d="M512.165 164.869H522.165V166.869H512.165z"
                            />
                            <path
                                transform="rotate(-15 496.71 169.01)"
                                fill="#535556"
                                d="M496.71 169.01H506.71V171.01H496.71z"
                            />
                            <path
                                transform="rotate(-15 481.256 173.151)"
                                fill="#535556"
                                d="M481.256 173.151H491.256V175.151H481.256z"
                            />
                            <path
                                transform="rotate(-15 301.594 221.291)"
                                fill="#535556"
                                d="M301.594 221.291H321.594V223.291H301.594z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M295.867 226.966a3 3 0 10-1.551-5.795 3 3 0 001.551 5.795z"
                                fill="#535556"
                            />
                            <path
                                transform="rotate(-15 -23 25.764)"
                                fill="#2F3133"
                                d="M-23 25.7638H177V185.7638H-23z"
                            />
                            <path
                                transform="rotate(-15 -23 25.764)"
                                fill="#121314"
                                d="M-23 25.7638H177V61.7638H-23z"
                            />
                            <rect
                                x={107.747}
                                y={11.4358}
                                width={40}
                                height={130}
                                rx={4}
                                transform="rotate(-15 107.747 11.436)"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 72.743 151.26)"
                                fill="#424345"
                                d="M72.7432 151.26H112.7432V155.26H72.7432z"
                            />
                            <path
                                transform="rotate(-15 70.673 143.532)"
                                fill="#424345"
                                d="M70.6726 143.532H130.6726V147.532H70.6726z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M68.602 135.805l57.956-15.529 1.035 3.864-57.956 15.529-1.035-3.864z"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 66.531 128.078)"
                                fill="#535556"
                                d="M66.5315 128.078H86.5315V132.078H66.5315z"
                            />
                            <rect
                                x={37.5537}
                                y={135.842}
                                width={20}
                                height={20}
                                rx={4}
                                transform="rotate(-15 37.554 135.842)"
                                fill="#535556"
                            />
                            <path
                                transform="rotate(-15 33.93 122.319)"
                                fill="#424345"
                                d="M33.9302 122.319H103.9302V126.319H33.9302z"
                            />
                            <path
                                transform="rotate(-15 31.86 114.592)"
                                fill="#424345"
                                d="M31.8596 114.592H121.8596V118.592H31.8596z"
                            />
                            <path
                                transform="rotate(-15 29.79 106.864)"
                                fill="#424345"
                                d="M29.7891 106.864H119.7891V110.864H29.7891z"
                            />
                            <path
                                transform="rotate(-15 27.718 99.137)"
                                fill="#424345"
                                d="M27.7185 99.137H117.7185V103.137H27.7185z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.648 91.41l86.933-23.294 1.036 3.864-86.934 23.293-1.035-3.863z"
                                fill="#424345"
                            />
                            <path
                                transform="rotate(-15 22.025 77.887)"
                                fill="#535556"
                                d="M22.0247 77.8866H62.024699999999996V85.8866H22.0247z"
                            />
                            <rect
                                x={11.1541}
                                y={37.3177}
                                width={90}
                                height={32}
                                rx={4}
                                transform="rotate(-15 11.154 37.318)"
                                fill="#535556"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_3_270">
                            <path fill="#fff" d="M0 0H1440V800H0z" />
                        </clipPath>
                        <clipPath id="clip1_3_270">
                            <path fill="#fff" d="M0 0H1440V800H0z" />
                        </clipPath>
                    </defs>
                </svg>
                <Card className="wpui-hero-Section" isBorderless>
                    <CardBody className="wpui-hero-cont">
                        <VStack spacing={12}>
                            <VStack spacing={5}>
                                <Text size={15} align="left" color="white">From the House of LUBUS</Text>
                                <Heading size={40} align="left" color="white" lineHeight={1.3} weight={500}>
                                    Build Your React Powered WordPress Plugin Or App With Speed.
                                </Heading>
                                <Text size={16} align="left" color="white" lineHeight={1.5}>
                                    WPUI IS A DESIGN PATTERN LIBRARY BUILT UPON WORDPRESS COMPONENTS WHICH GIVES YOU THE BUILDING BLOCKS YOU NEED TO BUILD YOUR REACT-POWERED WORDPRESS PLUGIN OR APP. SPEND LESS TIME ON UI AND MORE TIME BUILDING YOUR IDEA.
                                </Text>
                            </VStack>
                            <HStack className="wpui-hero-cta" alignment="center" justify="left">
                                <Button
                                    variant="primary"
                                    style={{ backgroundColor: '#3858E9' }}
                                    iconSize={20}
                                    href='https://github.com/lubusIN/wpui/discussions'
                                >
                                    Join Discussion
                                </Button>
                                <Button
                                    variant="secondary"
                                    style={{ border: '1.5px solid #ffffff' }}
                                    icon={<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z" fill="#fff" />
                                    </svg>}
                                    iconSize={20}
                                    href="https://github.com/lubusIN/wpui"
                                >
                                    Opensource
                                </Button>
                                <Link to="getting-started">
                                    <Button
                                        style={{ border: '1.5px solid #ffffff' }}
                                        iconSize={20}
                                    >
                                        Getting Started
                                    </Button>
                                </Link>
                            </HStack>
                        </VStack>
                    </CardBody>
                </Card>
            </ZStack>
        </>
    );
};

export default Banner;