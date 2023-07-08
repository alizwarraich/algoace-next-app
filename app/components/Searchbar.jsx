"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
    const [search, setSearch] = useState("");
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
