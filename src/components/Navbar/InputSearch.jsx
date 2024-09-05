"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Swal from "sweetalert2";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value.trim()

        if (keyword === "") {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
          color: '#222831',
            text: 'Search field cannot be empty!',
            background: '#F9F9F9',
            confirmButtonColor: '#32CD32',
            confirmButtonText: 'OK',
            customClass: {
              popup: 'swal2-responsive-popup'
            }
        });
          return
        }

        router.push(`/search/${keyword}`)

    }

    const handleKey = (event) => {
      if (event.key === 'Enter') {
        handleSearch(event)
      }
    }

    

  return (
    <div className="relative mr-2">
      
      <input placeholder="Search Anime..." className="p-2 w-full rounded-lg border shadow " ref={searchRef} onKeyDown={handleKey} />
      <button className="absolute top-2 end-2 hover:text-accent2 transition-all" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
