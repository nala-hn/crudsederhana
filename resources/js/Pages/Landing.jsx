import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import certification1 from "/storage/app/public/certification1.svg";
import certification2 from "/storage/app/public/certification2.svg";
import certification3 from "/storage/app/public/certification3.svg";
import image from "/storage/app/public/image.png";
import Footer from "@/Components/Footer";

function Landing() {
    return (
        <GuestLayout>
            <div className="md:flex w-full items-center justify-center px-5 pt-8 md:pb-0 md:px-[120px] pb-[50px]">
                <div class="w-full md:w-1/5 flex flex-col items-center md:items-start">
                    <div className="h-1 w-[110px] bg-black rounded-full my-4"></div>
                    <span className="text-left text-black font-sans text-lg uppercase text-med">
                        about us
                    </span>
                </div>

                <div class="w-full md:w-4/5 mt-10 md:mt-16 flex flex-col mx-auto items-center md:items-start">
                    <span className="text-left text-[#A51535] font-sans text-lg md:text-2xl uppercase text-med">
                        Lorem Ipsum
                    </span>
                    <div className="flex-col font-sans text-xl md:text-4xl text-justify md:text-left mt-5">
                        <span className="text-bold text-[#A51535] mr-1">
                            lorem ipsum
                        </span>
                        <span className="text-med text-[#353535]">
                            dolor sit amet, consectetur adipiscing elit. Ut
                            consequat turpis sit amet sem venenatis tristique.
                            Mauris luctus tortor a mi lacinia iaculis. Curabitur
                            vulputate sapien nunc, et bibendum massa vulputate
                            nec. Vestibulum vel risus ac magna tincidunt aliquet
                            in a felis.
                        </span>
                    </div>
                    <span className="text-justify md:text-left text-[#9E9E9E] font-sans text-lg md:text-[24px] pt-[20px]">
                        {" "}
                        Sed ultrices scelerisque enim. Aliquam erat volutpat. In
                        finibus lacus nec nibh convallis, vitae posuere odio
                        porttitor. Duis tincidunt magna at ligula pharetra, nec
                        porta ante ultricies. Etiam dignissim tortor a urna
                        faucibus scelerisque. Suspendisse efficitur est vitae
                        viverra fermentum.
                    </span>
                </div>
            </div>

            <div className="md:flex w-full items-center justify-center px-5 md:px-[120px] py-[50px] md:py-[100px]">
                <div class="w-full md:w-1/2 pr-[30px] flex flex-col items-starts text-left">
                    <div
                        id="certification"
                        className="flex flex-col text-bold text-2xl md:text-[40px] text-[#A51535] uppercase md:py-2"
                    >
                        <span className="md:pb-5">lorem ipsum</span>
                        <span>dolor sit amet</span>
                    </div>
                    <div className="flex py-4">
                        <img
                            src={certification1}
                            className="w-[60px] h-[60px] mr-4"
                        />
                        <div className="flex flex-col text-left">
                            <span className="font-sans text-[20px] text-[#A51535] text-med">
                                consectetur adipiscing elit.
                            </span>
                            <span className="font-sans text-[16px] text-[#353535]">
                                Ut consequat turpis sit amet sem venenatis
                                tristique. Mauris luctus tortor a mi lacinia
                                iaculis. Curabitur vulputate sapien nunc, et
                                bibendum massa vulputate nec.
                            </span>
                        </div>
                    </div>
                    <div className="flex py-4">
                        <img
                            src={certification2}
                            className="w-[60px] h-[60px] mr-4"
                        />
                        <div className="flex flex-col text-left">
                            <span className="font-sans text-[20px] text-[#A51535] text-med">
                                consectetur adipiscing elit.
                            </span>
                            <span className="font-sans text-[16px] text-[#353535]">
                                Ut consequat turpis sit amet sem venenatis
                                tristique. Mauris luctus tortor a mi lacinia
                                iaculis. Curabitur vulputate sapien nunc, et
                                bibendum massa vulputate nec.
                            </span>
                        </div>
                    </div>
                    <div className="flex py-4">
                        <img
                            src={certification3}
                            className="w-[60px] h-[60px] mr-4"
                        />
                        <div className="flex flex-col text-left">
                            <span className="font-sans text-[20px] text-[#A51535] text-med">
                                consectetur adipiscing elit.
                            </span>
                            <span className="font-sans text-[16px] text-[#353535]">
                                Ut consequat turpis sit amet sem venenatis
                                tristique. Mauris luctus tortor a mi lacinia
                                iaculis. Curabitur vulputate sapien nunc, et
                                bibendum massa vulputate nec.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/2 flex flex-col mx-auto items-center md:items-start">
                    <img src={image} className="w-full h-full" />
                </div>
            </div>
        </GuestLayout>
    );
}

export default Landing;
