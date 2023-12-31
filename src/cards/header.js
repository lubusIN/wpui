/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    Card,
    Button,
    __experimentalHStack as HStack,
    __experimentalNavigatorBackButton as NavigatorBackButton,
} from "@wordpress/components";

/**
 * Render Header
 */
function Header() {
    return (
        <Card className="wpui_header" isBorderless borderBottom>
            <HStack>
                <NavigatorBackButton className='wpui_site_logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='100px' height='30px' id="Layer_2" data-name="Layer 2" viewBox="0 0 357.68 95.12">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <g>
                                <rect class="cls-2" fill="#3858e9" width="93.73" height="93.73" rx="19.38" ry="19.38" />
                                <path class="cls-1" fill="#fefefe" d="m38.37,50.15c-3.67-.01-7.33-.06-11-.02-4.67.05-8.41-3.59-9.27-7.24-.2-.85-.33-1.71-.33-2.59,0-4.21,0-8.41,0-12.62.02-5.66,4.24-9.86,9.91-9.87,12.25-.02,24.49,0,36.74-.01.4,0,.81-.02,1.21-.03,2.77-.02,5.24.77,7.27,2.71,1.97,1.88,3,4.21,3.02,6.92.04,4.34.04,8.68,0,13.02-.04,5.42-4.27,9.66-9.7,9.68-8.89.03-17.77,0-26.66.01-.4,0-.81.02-1.21.03Zm1.63-6.53c8.78.01,17.56.03,26.34.02,1.78,0,3.12-1.38,3.13-3.17.03-4.34.03-8.68,0-13.02-.01-1.79-1.35-3.15-3.12-3.17-2.52-.03-5.05,0-7.57.02-1.65,0-3.3-.03-4.95-.03-8.72,0-17.43,0-26.15,0-2.01,0-3.42,1.28-3.44,3.17-.03,4.34-.03,8.68,0,13.02.01,1.79,1.35,3.16,3.13,3.17,4.21.03,8.41,0,12.62-.02Z" />
                                <path class="cls-1" fill="#fefefe" d="m25.45,63.07c-1.16-.1-2.39.17-3.36-.85-.98-1.03-1.35-2.31-.86-3.58.48-1.25,1.63-2.05,3.05-2.06,2.82-.03,5.63-.02,8.45-.03.4.01.81.03,1.21.03,11.74,0,23.49,0,35.23,0,2.55,0,4.2,2.14,3.34,4.36-.49,1.27-1.47,1.97-2.84,2.09-.43.04-.87.01-1.31.01-13.9,0-27.79,0-41.69,0-.4,0-.81.02-1.21.03Z" />
                                <path class="cls-1" fill="#fefefe" d="m46.74,75.96c-7.47,0-14.93,0-22.4,0-1.56,0-2.74-.88-3.18-2.3-.41-1.33.07-2.74,1.22-3.56.72-.52,1.54-.6,2.4-.6,13.72,0,27.44,0,41.17,0,1.14,0,2.29-.01,3.43,0,1.88.03,3.32,1.41,3.34,3.19.02,1.83-1.42,3.26-3.37,3.26-7.53.01-15.07,0-22.6,0Z" />
                                <path d="m135.84,74.18l-17.89-57.48h12.54l12.65,45.7,13.31-45.7h14.07l13.31,45.7,12.43-45.7h12.54l-17.89,57.48h-14.29l-13.31-43.95-13.2,43.95h-14.29Z" />
                                <path d="m216.66,95.12V16.7h10.69l.55,8.18c2.03-2.98,4.69-5.22,7.96-6.71,3.27-1.49,6.83-2.24,10.69-2.24,5.74,0,10.47,1.29,14.18,3.87,3.71,2.58,6.47,6.11,8.29,10.58,1.82,4.47,2.73,9.47,2.73,15s-.93,10.73-2.78,15.16c-1.85,4.44-4.69,7.93-8.51,10.47-3.82,2.55-8.64,3.82-14.45,3.82-2.76,0-5.29-.29-7.58-.87-2.29-.58-4.29-1.44-6-2.56-1.71-1.13-3.22-2.45-4.53-3.98v27.7h-11.23Zm27.92-30.32c3.93,0,7.05-.89,9.38-2.67,2.33-1.78,4-4.13,5.02-7.04,1.02-2.91,1.53-6.07,1.53-9.49s-.53-6.82-1.58-9.76c-1.05-2.95-2.76-5.31-5.13-7.09-2.36-1.78-5.51-2.67-9.43-2.67-3.56,0-6.58.89-9.05,2.67-2.47,1.78-4.35,4.16-5.62,7.14-1.27,2.98-1.91,6.22-1.91,9.71s.6,6.82,1.8,9.76c1.2,2.95,3.05,5.25,5.56,6.93,2.51,1.67,5.65,2.51,9.43,2.51Z" />
                                <path d="m307.95,74.83c-8.07,0-14.23-2.13-18.49-6.38-4.25-4.25-6.38-10.74-6.38-19.47V16.7h11.23v31.63c0,3.42.49,6.36,1.47,8.83.98,2.47,2.49,4.36,4.53,5.67,2.04,1.31,4.62,1.96,7.74,1.96s5.91-.67,7.91-2.02c2-1.34,3.45-3.25,4.36-5.73.91-2.47,1.36-5.38,1.36-8.72v-31.63h11.23v32.28c0,8.87-2.16,15.4-6.49,19.58-4.33,4.18-10.49,6.27-18.49,6.27Z" />
                                <rect x="346.45" y="16.7" width="11.23" height="57.48" />
                            </g>
                        </g>
                    </svg>
                </NavigatorBackButton>
                <Button
                    icon={<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z" fill="#000" />
                    </svg>}
                    iconSize={30}
                    href="https://github.com/lubusIN/wpui"
                />
            </HStack>
        </Card>
    );
};

export default Header;