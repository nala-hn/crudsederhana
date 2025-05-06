import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, } from "@heroicons/react/24/outline";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="bg-[#1C1C1C] flex flex-col w-full items-center justify-center px-5 md:px-[120px] py-[50px] md:py-[100px]">
            <div className="md:flex w-full">
                <div class="md:w-2/5 flex flex-col mx-auto items-start">
                    <div className="flex text-left">
                        <img
                            src="/storage/pie-chart-svgrepo-com.svg"
                            alt="Logo"
                            className="w-10 h-10 md:w-14 md:h-14 object-cover"
                        />
                        <div className="ml-2">
                            <h1 className="font-sans text-white text-[18px] md:text-3xl font-bold -mt-[2px] md:-mt-1">
                                LOREM
                            </h1>
                            <h1 className="font-sans text-white text-[18px] md:text-3xl font-bold -mt-2">
                                IPSUM
                            </h1>
                        </div>
                    </div>
                    <span className="md:w-4/5 text-left font-sans text-[#F2F2F2] text-[14px] my-1 md:my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisl leo. Sed volutpat, lectus ut aliquam suscipit, dui magna mattis massa
                    </span>
                    <div className="flex mt-1 mb-5 md:mb-0 md:mt-8 text-white">
                        <a href="#">
                            <FaFacebookF className="w-5 h-5 mr-2" />
                        </a>
                        <a href="#">
                            <FaTwitter className="w-5 h-5 mx-2" />
                        </a>
                        <a href="#">
                            <FaLinkedinIn className="w-5 h-5 mx-2" />
                        </a>
                        <a href="#">
                            <FaInstagram className="w-5 h-5 mx-2" />
                        </a>
                    </div>
                </div>
                <div class="md:w-3/5 flex justify-between gap-[5px] mx-auto items-start">
                    <div class="flex-1 flex flex-col h-full justify-around mx-auto items-start">
                        <span className="font-sans text-white text-[15px] md:text-[20px] text-med">
                            Lorem
                        </span>
                        <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">
                            Lorem Ipsum
                        </span>
                        <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">
                            Lorem
                        </span>
                        <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">
                            Korem
                        </span>
                        <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">
                            Lorem Ipsum
                        </span>
                    </div>
                    <div class="flex-1 flex flex-col h-full justify-around mx-auto items-start">
                        <span className="font-sans text-white text-[15px] md:text-[20px] text-med">
                            Lorem
                        </span>
                        <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">
                            Lorem Ipsum
                        </span>
                        <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">
                        Lorem Ipsum
                        </span>
                        <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">
                        Lorem Ipsum
                        </span>
                        <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">
                        Lorem Ipsum
                        </span>
                    </div>
                    <div class="flex-1 flex flex-col h-full justify-around mx-auto items-start">
                        <span
                            id="contact"
                            className="font-sans text-white text-[15px] md:text-[20px] text-med"
                        >
                            Lorem Ipsum
                        </span>
                        <a href="#" className="flex items-start text-white">
                            <PhoneIcon className="w-5 h-5 mr-2 mt-1" />
                            <span className="text-xs md:text-sm">
                            Lorem Ipsum
                            </span>
                        </a>
                        <a href="#" className="flex items-start text-white">
                            <EnvelopeIcon className="w-5 h-5 mr-2 mt-1" />
                            <span className="text-xs md:text-sm">
                            Lorem Ipsum
                            </span>
                        </a>
                        <a href="#" className="flex items-start text-white">
                            <MapPinIcon className="w-5 h-5 mr-2 mt-1" />
                            <span className="text-xs md:text-sm">
                            Lorem Ipsum
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
