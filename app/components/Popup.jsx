import ReactModal from "react-modal";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Popup = ({ modal, setModal }) => {
    console.log(modal);
    return (
        <ReactModal
            isOpen={modal?.title ? true : false}
            onRequestClose={() => setModal({})}
            className="flex bg-white rounded-xl min-h-[80%] h-[80%] max-h-[80%] min-w-[50%] w-[50%] max-w-[50%] outline-none overflow-hidden"
            overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
            ariaHideApp={false}
        >
            <div className="w-full grid grid-cols-[60%_40%]">
                {/* Image */}
                <div className="w-full h-full relative">
                    <img
                        src={modal?.imageLink}
                        alt={modal?.title}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Details */}
                <div className="my-12 mx-5 flex flex-col gap-6">
                    {/* Title */}
                    <div className="text-lg font-bold">{modal?.title}</div>

                    {/* Ratings, Reviews, Price */}
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-2 items-center">
                            <p className="font-medium">Ratings</p>
                            <div className="flex">
                                {Array(5)
                                    .fill(0)
                                    .map((item, index) => {
                                        if (modal?.rating > index) {
                                            return (
                                                <AiFillStar
                                                    key={index}
                                                    className="text-yellow-500 w-[0.65rem] h-[0.65rem]"
                                                />
                                            );
                                        } else {
                                            return (
                                                <AiOutlineStar
                                                    key={index}
                                                    className="text-yellow-500 w-[0.65rem] h-[0.65rem]"
                                                />
                                            );
                                        }
                                    })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <p className="font-medium">Reviews</p>
                            <p className="text-gray-400 text-xs">
                                ({modal?.reviews})
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <p className="font-medium">Price</p>
                            <p className="text-gray-400 text-xs">
                                ${modal?.price}
                            </p>
                        </div>
                    </div>

                    {/* Further Details */}
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1">
                            <p className="text-sm font-medium">Author:</p>
                            <p className="text-sm">{modal?.author}</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="text-sm font-medium">Country:</p>
                            <p className="text-sm">{modal?.country}</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="text-sm font-medium">Language:</p>
                            <p className="text-sm">{modal?.language}</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="text-sm font-medium">Year:</p>
                            <p className="text-sm">{modal?.year}</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="text-sm font-medium">Pages:</p>
                            <p className="text-sm">{modal?.pages}</p>
                        </div>
                    </div>

                    {/* Go to page */}
                    <div className="w-full">
                        <a
                            href={modal?.link}
                            target="_blank"
                            className="bg-[#004D6D] hover:opacity-90 flex gap-3 items-center justify-center text-white px-4 py-2 rounded-md w-full"
                        >
                            <p>View Details</p>
                            <BsBoxArrowUpRight
                                strokeWidth={0.5}
                                className="text-white w-4 h-4 mb-[0.125rem]"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};

export default Popup;
