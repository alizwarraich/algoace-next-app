"use client";

import { Oval } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="flex justify-center mt-24">
            <Oval
                height={80}
                width={80}
                color="#004D6D"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#BDBDBD"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
};

export default Loading;
