import Image from "next/image";
import Searchbar from "./Searchbar";

const Header = () => {
    return (
        <div>
            <div className="mx-32 grid grid-cols-[15%_70%_15%] items-center">
                {/* Icon */}
                <div className="justify-self-center">
                    <Image src="/logo.png" alt="logo" width={60} height={60} />
                </div>

                {/* Search */}
                <div>
                    <Searchbar />
                </div>

                {/* User */}
                <div className="justify-self-center">
                    <Image src="/user.png" alt="user" width={60} height={60} />
                </div>
            </div>
        </div>
    );
};

export default Header;
