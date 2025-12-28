import React from "react";

export default function NameHeader() {
    return (
        <>
            <h1 className="name">
                Alberto Barnabò
            </h1>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .name {
          font-family: 'Roboto', sans-serif; /* or any font you want */
          font-size: 4rem;
          text-align: center;
          opacity: 0;
          animation: fadeIn 3s forwards;
        }
      `}</style>
        </>
    );
}
