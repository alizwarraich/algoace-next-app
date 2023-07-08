"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "../store/slices/booksSlice";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

import Popup from "./Popup";

export default function FeaturedBooks() {
    const [modal, setModal] = useState({});

    const dispatch = useDispatch();

    const books = useSelector((state) => state.books.filteredList);
    const favouriteBooks = useSelector((state) => state.books.favourites);

    const addToFavourites = (book) => {
        if (favouriteBooks.includes(book)) {
            dispatch(setFavourites(favouriteBooks.filter((b) => b !== book)));
        } else {
            dispatch(setFavourites([...favouriteBooks, book]));
        }
    };

    const openModal = (book) => {
        setModal(book);
    };

    return (
        <div className="mx-16 my-20">
            {/* Modal */}
            <Popup modal={modal} setModal={setModal} />

            {/* List */}
            <div className="mx-32 grid grid-cols-4 gap-20 items-center">
                {books.map((book, index) => (
                    <div className="flex flex-col gap-3" key={index}>
                        {/* Image */}
                        <div
                            key={index}
                            className="hover:opacity-60 group relative rounded-xl min-h-80 h-80 max-h-80 min-w-60 w-60 max-w-60 bg-gray-100 overflow-hidden"
                        >
                            {/* Navigate button (only shows upon parent hover) */}
                            <div
                                className="absolute cursor-pointer top-[45%] right-[40%]"
                                onClick={() => openModal(book)}
                            >
                                <BsBoxArrowUpRight
                                    strokeWidth={0.75}
                                    className="w-8 h-8 hidden group-hover:block text-gray-200"
                                />
                            </div>

                            {/* Image */}
                            <img
                                src={book?.imageLink}
                                alt={book?.title}
                                className="object-contain"
                            />

                            <div
                                onClick={() => addToFavourites(book)}
                                className="cursor-pointer absolute top-4 right-3 w-9 h-9 flex items-center justify-center bg-white rounded-full "
                            >
                                {favouriteBooks.includes(book) ? (
                                    <AiFillHeart className="text-red-500 w-6 h-6" />
                                ) : (
                                    <AiOutlineHeart className="text-red-500 w-6 h-6" />
                                )}
                            </div>
                        </div>

                        {/* Title */}
                        <p className="text-lg font-semibold truncate">
                            {book?.title}
                        </p>

                        {/* Rating */}
                        <div className="flex">
                            {Array(5)
                                .fill(0)
                                .map((item, index) => {
                                    if (book?.rating > index) {
                                        return (
                                            <AiFillStar
                                                key={index}
                                                className="text-yellow-500 w-5 h-5"
                                            />
                                        );
                                    } else {
                                        return (
                                            <AiOutlineStar
                                                key={index}
                                                className="text-yellow-500 w-5 h-5"
                                            />
                                        );
                                    }
                                })}
                        </div>

                        {/* Price */}
                        <p className="">${book?.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
