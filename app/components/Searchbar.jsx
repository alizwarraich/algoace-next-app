"use client";

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import { useSelector, useDispatch } from "react-redux";
import { setFilteredList } from "../store/slices/booksSlice";

const Searchbar = () => {
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.list);

    useEffect(() => {
        let filteredBooks =
            search.length > 0
                ? books.filter((book) =>
                      book.title.toLowerCase().includes(search.toLowerCase())
                  )
                : books;
        dispatch(setFilteredList(filteredBooks));
    }, [search]);

    return (
        <div className="rounded-l-full rounded-r-full py-2 px-2 bg-[#EFEFEF] grid grid-cols-[5%_95%] items-center">
            <div className="justify-self-center">
                <CiSearch />
            </div>
            <input
                className="bg-[#EFEFEF] outline-none"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default Searchbar;
