"use client";

import FeaturedBooks from "./components/FeaturedBooks";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setBooks, setFilteredList } from "./store/slices/booksSlice";
import Loading from "./loading";

const Homepage = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getFeaturedBooks();
            setLoading(false);
            dispatch(setBooks(data));
            dispatch(setFilteredList(data));
        };
        fetchBooks();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            {/* Featured Books */}
            <div>
                <FeaturedBooks />
            </div>
        </div>
    );
};

async function getFeaturedBooks() {
    const res = await fetch(`https://books-list-api.vercel.app/books`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-api-key": "#b0@6hX8YasCq6^unOaPw1tqR",
        },
    });
    const data = await res.json();
    return data;
}

export default Homepage;
